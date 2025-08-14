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

  const animationMap = {
    go: 'animate-glow-green',
    wait: 'animate-glow-yellow', 
    stop: 'animate-glow-red'
  };
  
  return (
    <span 
      className={`inline-block size-2.5 rounded-full ${colorMap[state]} ${animate ? animationMap[state] : ''}`}
      aria-label={state}
    />
  );
}