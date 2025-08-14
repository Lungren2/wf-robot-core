interface RobotDotProps {
  state: 'go' | 'wait' | 'stop';
  animate?: boolean;
}

export function RobotDot({ state, animate = true }: RobotDotProps) {
  const colorMap = {
    go: 'bg-wf-green',
    wait: 'bg-wf-yellow', 
    stop: 'bg-wf-red'
  };
  
  return (
    <span 
      className={`inline-block size-2.5 rounded-full ${colorMap[state]} ${animate ? 'animate-pulse-dot' : ''}`}
      aria-label={state}
    />
  );
}