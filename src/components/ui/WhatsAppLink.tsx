import { WHATSAPP_URL } from "@/lib/contact";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type WhatsAppLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel"> & {
  children: ReactNode;
};

export function WhatsAppLink({ children, ...props }: WhatsAppLinkProps) {
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
