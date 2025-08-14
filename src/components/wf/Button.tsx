import { ButtonHTMLAttributes, forwardRef } from 'react';

type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const buttonVariants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand/90 focus:ring-wf-green/30",
  secondary: "border border-wf-border text-fg hover:bg-fg/5 focus:ring-wf-green/20",
  success: "bg-wf-green text-white hover:bg-wf-green/90 focus:ring-wf-green/40",
  warning: "bg-wf-yellow text-black hover:bg-wf-yellow/90 focus:ring-wf-yellow/40",
  danger: "bg-wf-red text-white hover:bg-wf-red/90 focus:ring-wf-red/40",
  ghost: "text-fg hover:bg-fg/10 focus:ring-wf-green/20",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-4 disabled:opacity-50 disabled:pointer-events-none";
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${buttonVariants[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';