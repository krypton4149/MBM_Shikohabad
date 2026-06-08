"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useState } from "react";

type SafeImageProps = ImageProps;

/**
 * Wraps next/image with automatic fallback when the optimizer fails.
 * Retries once via the direct static file, then once more after a short delay.
 */
export function SafeImage({ alt, onError, onLoad, ...props }: SafeImageProps) {
  const [useDirect, setUseDirect] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  const handleError = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      if (!useDirect) {
        setUseDirect(true);
        setRetryCount(1);
        return;
      }

      if (retryCount < 2) {
        window.setTimeout(() => setRetryCount((count) => count + 1), 400);
        return;
      }

      onError?.(event);
    },
    [useDirect, retryCount, onError]
  );

  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      onLoad?.(event);
    },
    [onLoad]
  );

  return (
    <Image
      key={`${String(props.src)}-${useDirect}-${retryCount}`}
      alt={alt}
      {...props}
      unoptimized={useDirect || props.unoptimized}
      onError={handleError}
      onLoad={handleLoad}
    />
  );
}
