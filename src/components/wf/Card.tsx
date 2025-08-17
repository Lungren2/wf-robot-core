import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  statusStripe?: 'success' | 'warning' | 'danger';
  className?: string;
}

export function Card({ title, children, actions, statusStripe, className = '' }: CardProps) {
  const stripeMap = {
    success: 'before:bg-wf-green',
    warning: 'before:bg-wf-yellow',
    danger: 'before:bg-wf-red'
  };
  
  const stripeClass = statusStripe ? `relative before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-tl-2xl before:rounded-bl-2xl ${stripeMap[statusStripe]}` : '';
  
  return (
    <section className={`rounded-2xl bg-wf-card text-wf-card-fg shadow-card border border-wf-border animate-fade-in ${stripeClass} ${className}`}>
      <header className="flex items-center justify-between px-5 py-4 border-b border-wf-border">
        <h3 className="font-display text-lg">{title}</h3>
        {actions && (
          <div className="flex items-center gap-2">{actions}</div>
        )}
      </header>
      <div className="px-5 py-4">{children}</div>
    </section>
  );
}