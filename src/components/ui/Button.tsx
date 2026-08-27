import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  to?: string;
  href?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover border border-primary shadow-sm",
  secondary:
    "bg-surface text-ink border border-border-strong hover:bg-canvas-muted",
  ghost:
    "bg-transparent text-primary hover:bg-primary-light border border-transparent",
  danger: "bg-error text-white hover:bg-red-700 border border-error",
};

const sizeClasses: Record<Size, string> = {
  md: "px-4 py-2.5 text-sm font-semibold min-h-[44px]",
  lg: "px-5 py-3.5 text-base font-semibold min-h-[52px]",
};

export default function Button({
  variant = "primary",
  size = "lg",
  fullWidth = false,
  to,
  href,
  className = "",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
