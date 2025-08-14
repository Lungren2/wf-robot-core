interface StatusBadgeProps {
  state: 'approved' | 'pending' | 'rejected' | 'draft';
  children?: React.ReactNode;
}

const stateMap = {
  approved: {
    bg: 'bg-wf-green',
    text: 'text-white',
    dot: 'bg-white'
  },
  pending: {
    bg: 'bg-wf-yellow',
    text: 'text-black',
    dot: 'bg-black'
  },
  rejected: {
    bg: 'bg-wf-red',
    text: 'text-white',
    dot: 'bg-white'
  },
  draft: {
    bg: 'bg-fg/10',
    text: 'text-fg',
    dot: 'bg-fg'
  }
};

export function StatusBadge({ state, children }: StatusBadgeProps) {
  const styles = stateMap[state];
  
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${styles.bg} ${styles.text}`}>
      <span className={`size-2 rounded-full ${styles.dot}`} />
      {children || state}
    </span>
  );
}