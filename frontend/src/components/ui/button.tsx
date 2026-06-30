import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-[colors,transform] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-accent text-[rgb(var(--brand-accent-fg))] hover:bg-accent-hover",
        outline: "border border-hairline bg-transparent text-ink hover:bg-surface",
        ghost: "text-ink hover:bg-surface",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-5",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CommonProps = VariantProps<typeof buttonVariants> & { className?: string };

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    CommonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  ),
);
Button.displayName = "Button";

/** Same styling, renders a router <Link>. */
export function ButtonLink({
  to,
  className,
  variant,
  size,
  children,
}: CommonProps & { to: string; children: React.ReactNode }) {
  const external = /^https?:\/\//.test(to);
  const protocol = /^(mailto:|tel:)/.test(to);
  if (external || protocol) {
    return (
      <a
        href={to}
        className={cn(buttonVariants({ variant, size }), className)}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  // in-page anchor → smooth-scroll to the section id
  if (to.startsWith("#")) {
    return (
      <a
        href={to}
        className={cn(buttonVariants({ variant, size }), className)}
        onClick={(e) => {
          const el = document.getElementById(to.slice(1));
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            history.replaceState(null, "", to);
          }
        }}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}

export { buttonVariants };
