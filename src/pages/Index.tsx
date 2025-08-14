import { Button } from '@/components/wf/Button';
import { StatusBadge } from '@/components/wf/StatusBadge';
import { Card } from '@/components/wf/Card';
import { Alert } from '@/components/wf/Alert';
import { TextInput } from '@/components/wf/TextInput';
import { RobotDot } from '@/components/wf/RobotDot';
import { ThemeToggle } from '@/components/wf/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-bg text-fg">
      {/* Header */}
      <header className="border-b border-wf-border bg-wf-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="font-display text-3xl">WF Robot Design System</h1>
              <div className="flex items-center gap-1">
                <RobotDot state="stop" />
                <RobotDot state="wait" />
                <RobotDot state="go" />
              </div>
            </div>
            <ThemeToggle />
          </div>
          <p className="mt-2 text-wf-muted">A comprehensive design system following the traffic light methodology</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        
        {/* Typography */}
        <section>
          <h2 className="font-display text-2xl mb-6">Typography</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Display Font (Oswald)">
              <div className="space-y-4">
                <div className="font-display text-4xl">Display Heading</div>
                <div className="font-display text-3xl">Section Title</div>
                <div className="font-display text-2xl">Subsection</div>
                <div className="font-display text-xl">Card Title</div>
              </div>
            </Card>
            <Card title="Body Font (Montserrat)">
              <div className="space-y-4">
                <div className="text-lg font-semibold">Large Body Semibold</div>
                <div className="text-base">Regular body text for most content</div>
                <div className="text-sm text-wf-muted">Small muted text for secondary information</div>
                <div className="text-xs text-wf-muted">Extra small text for captions</div>
              </div>
            </Card>
          </div>
        </section>

        {/* Colors */}
        <section>
          <h2 className="font-display text-2xl mb-6">Color Palette</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Traffic Light System">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-wf-green"></div>
                  <div>
                    <div className="font-medium">Green - Go/Success</div>
                    <div className="text-sm text-wf-muted">Approvals, success states</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-wf-yellow"></div>
                  <div>
                    <div className="font-medium">Yellow - Wait/Warning</div>
                    <div className="text-sm text-wf-muted">Pending, needs attention</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-wf-red"></div>
                  <div>
                    <div className="font-medium">Red - Stop/Error</div>
                    <div className="text-sm text-wf-muted">Rejections, errors</div>
                  </div>
                </div>
              </div>
            </Card>
            <Card title="Brand Foundation">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-fg"></div>
                  <div>
                    <div className="font-medium">Foreground</div>
                    <div className="text-sm text-wf-muted">Primary text & brand</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-bg border border-wf-border"></div>
                  <div>
                    <div className="font-medium">Background</div>
                    <div className="text-sm text-wf-muted">Main page background</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-wf-muted"></div>
                  <div>
                    <div className="font-medium">Muted</div>
                    <div className="text-sm text-wf-muted">Secondary text</div>
                  </div>
                </div>
              </div>
            </Card>
            <Card title="Utility Colors">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-wf-card border border-wf-border"></div>
                  <div>
                    <div className="font-medium">Card</div>
                    <div className="text-sm text-wf-muted">Card backgrounds</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-wf-border"></div>
                  <div>
                    <div className="font-medium">Border</div>
                    <div className="text-sm text-wf-muted">Separators & outlines</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-wf-ring"></div>
                  <div>
                    <div className="font-medium">Focus Ring</div>
                    <div className="text-sm text-wf-muted">Focus indicators</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className="font-display text-2xl mb-6">Buttons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Button Variants">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </div>
            </Card>
            <Card title="Button States">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Normal</Button>
                  <Button variant="primary" disabled>Disabled</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="success">
                    <RobotDot state="go" animate={false} />
                    With Icon
                  </Button>
                  <Button variant="primary" className="w-full">Full Width</Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Status Badges */}
        <section>
          <h2 className="font-display text-2xl mb-6">Status Badges</h2>
          <Card title="Traffic Light States">
            <div className="flex flex-wrap gap-4">
              <StatusBadge state="approved">Approved</StatusBadge>
              <StatusBadge state="pending">Pending</StatusBadge>
              <StatusBadge state="rejected">Rejected</StatusBadge>
              <StatusBadge state="draft">Draft</StatusBadge>
            </div>
          </Card>
        </section>

        {/* Robot Dots */}
        <section>
          <h2 className="font-display text-2xl mb-6">Robot Status Indicators</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Animated Dots">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <RobotDot state="go" />
                  <div className="mt-2 text-sm">Go</div>
                </div>
                <div className="text-center">
                  <RobotDot state="wait" />
                  <div className="mt-2 text-sm">Wait</div>
                </div>
                <div className="text-center">
                  <RobotDot state="stop" />
                  <div className="mt-2 text-sm">Stop</div>
                </div>
              </div>
            </Card>
            <Card title="Static Dots">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <RobotDot state="go" animate={false} />
                  <div className="mt-2 text-sm">Static Go</div>
                </div>
                <div className="text-center">
                  <RobotDot state="wait" animate={false} />
                  <div className="mt-2 text-sm">Static Wait</div>
                </div>
                <div className="text-center">
                  <RobotDot state="stop" animate={false} />
                  <div className="mt-2 text-sm">Static Stop</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Forms */}
        <section>
          <h2 className="font-display text-2xl mb-6">Form Elements</h2>
          <Card title="Input Fields">
            <div className="space-y-4 max-w-md">
              <TextInput placeholder="Normal input field" />
              <TextInput error="This field has an error" placeholder="Input with error" />
              <TextInput placeholder="Disabled input" disabled />
            </div>
          </Card>
        </section>

        {/* Alerts */}
        <section>
          <h2 className="font-display text-2xl mb-6">Alerts</h2>
          <div className="space-y-4">
            <Alert tone="success" title="Success Alert" description="Everything is working correctly." />
            <Alert tone="warning" title="Warning Alert" description="Something needs your attention." />
            <Alert tone="danger" title="Error Alert" description="Something went wrong." />
          </div>
        </section>

        {/* Cards with Status Stripes */}
        <section>
          <h2 className="font-display text-2xl mb-6">Cards with Status Stripes</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card title="Success Card" statusStripe="success">
              <p className="text-wf-muted">This card has a green status stripe indicating success.</p>
            </Card>
            <Card title="Warning Card" statusStripe="warning">
              <p className="text-wf-muted">This card has a yellow status stripe indicating a warning.</p>
            </Card>
            <Card title="Danger Card" statusStripe="danger">
              <p className="text-wf-muted">This card has a red status stripe indicating an error.</p>
            </Card>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Index;
