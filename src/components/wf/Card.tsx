import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Card({ title, children, actions, className = '' }: CardProps) {
  return (
    <section className={`rounded-2xl bg-wf-card text-wf-card-fg shadow-card border border-wf-border animate-fade-in hover:shadow-lg transition-shadow duration-300 ${className}`}>
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