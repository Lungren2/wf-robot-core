import { Button } from './Button';
import { RobotDot } from './RobotDot';

export function RobotHeader() {
  return (
    <header className="sticky top-0 z-20 bg-bg/80 backdrop-blur border-b border-wf-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <h1 className="font-display text-2xl">WF Robot</h1>
              <div className="flex items-center gap-1">
                <RobotDot state="stop" />
                <RobotDot state="wait" />
                <RobotDot state="go" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="secondary">Documentation</Button>
            <Button variant="primary">New Approval</Button>
          </div>
        </div>
      </div>
    </header>
  );
}