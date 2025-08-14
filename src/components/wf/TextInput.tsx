import { InputHTMLAttributes, forwardRef } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, label, className = '', ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label className="text-sm font-medium text-fg">{label}</label>
        )}
        <input
          ref={ref}
          className={`w-full rounded-xl border bg-white/90 px-3 py-2 text-sm text-fg placeholder:text-wf-muted/70 transition-colors
                      border-wf-border focus:border-wf-green focus:ring-4 focus:ring-wf-green/20 focus:outline-none
                      dark:bg-wf-card ${error ? 'border-wf-red focus:border-wf-red focus:ring-wf-red/20' : ''} ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-wf-red">{error}</p>}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';