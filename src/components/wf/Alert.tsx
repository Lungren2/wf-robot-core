interface AlertProps {
  tone?: 'success' | 'warning' | 'danger';
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Alert({ tone = 'success', title, description, children }: AlertProps) {
  const toneMap = {
    success: 'border-wf-green/40 bg-wf-green/10 text-wf-green',
    warning: 'border-wf-yellow/40 bg-wf-yellow/10 text-wf-yellow',
    danger: 'border-wf-red/40 bg-wf-red/10 text-wf-red'
  };
  
  return (
    <div className={`rounded-xl border px-4 py-3 ${toneMap[tone]}`}>
      <p className="font-semibold">{title}</p>
      {description && <p className="text-sm opacity-90">{description}</p>}
      {children}
    </div>
  );
}