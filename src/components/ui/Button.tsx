import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "inverted" | "outlined" | "accent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-neutral hover:bg-primary-700",
  secondary: "bg-neutral-200 text-primary hover:bg-neutral-300",
  inverted: "bg-primary-400 text-neutral hover:bg-primary-500",
  outlined:
    "bg-neutral text-primary border border-primary hover:bg-tertiary",
  accent: "bg-secondary text-neutral hover:bg-secondary-500",
};

const sizeStyles = {
  sm: "px-4 py-2 text-small",
  md: "px-6 py-3 text-body",
  lg: "px-8 py-4 text-body font-medium",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          rounded-sm font-body font-medium
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
