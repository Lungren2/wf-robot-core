import { RobotHeader } from '@/components/wf/RobotHeader';
import { Card } from '@/components/wf/Card';
import { Button } from '@/components/wf/Button';
import { StatusBadge } from '@/components/wf/StatusBadge';
import { Table } from '@/components/wf/Table';
import { Alert } from '@/components/wf/Alert';
import { ThemeToggle } from '@/components/wf/ThemeToggle';
import { RobotDot } from '@/components/wf/RobotDot';

const Index = () => {
  // Sample data for demonstration
  const tableData = [
    { id: 'WF-001', customer: 'Acme Corp', amount: '$2,400', state: 'approved' as const, date: 'Dec 14' },
    { id: 'WF-002', customer: 'Beta Inc', amount: '$1,200', state: 'pending' as const, date: 'Dec 14' },
    { id: 'WF-003', customer: 'Gamma LLC', amount: '$3,600', state: 'rejected' as const, date: 'Dec 13' },
    { id: 'WF-004', customer: 'Delta Systems', amount: '$850', state: 'approved' as const, date: 'Dec 13' },
    { id: 'WF-005', customer: 'Echo Partners', amount: '$4,200', state: 'pending' as const, date: 'Dec 12' },
  ];

  const stats = [
    { label: 'Total Workflows', value: '1,247', change: '+12%', status: 'success' as const },
    { label: 'Pending Approvals', value: '23', change: '-8%', status: 'warning' as const },
    { label: 'Failed Jobs', value: '3', change: '+1', status: 'danger' as const },
    { label: 'Success Rate', value: '94.2%', change: '+2.1%', status: 'success' as const },
  ];

  return (
    <div className="min-h-screen bg-bg text-fg">
      <RobotHeader />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Status Alert */}
        <div className="mb-8">
          <Alert 
            tone="success" 
            title="System Status: All Systems Operational" 
            description="All workflows are running smoothly. Last check: 2 minutes ago."
          />
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 @container md:grid-cols-2 xl:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              title={stat.label} 
              statusStripe={stat.status}
              actions={<RobotDot state={stat.status === 'success' ? 'go' : stat.status === 'warning' ? 'wait' : 'stop'} />}
            >
              <div className="space-y-2">
                <div className="text-3xl font-display">{stat.value}</div>
                <div className={`text-sm ${stat.status === 'success' ? 'text-wf-green' : stat.status === 'warning' ? 'text-wf-yellow' : 'text-wf-red'}`}>
                  {stat.change} from last week
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Workflow Controls */}
          <Card 
            title="Workflow Controls"
            actions={<ThemeToggle />}
          >
            <div className="space-y-4">
              <div className="grid gap-3">
                <Button variant="success" className="w-full">
                  <RobotDot state="go" animate={false} />
                  Start All Workflows
                </Button>
                <Button variant="warning" className="w-full">
                  <RobotDot state="wait" animate={false} />
                  Pause Processing
                </Button>
                <Button variant="danger" className="w-full">
                  <RobotDot state="stop" animate={false} />
                  Emergency Stop
                </Button>
              </div>
              
              <div className="pt-4 border-t border-wf-border">
                <h4 className="font-medium mb-3">Active Processes</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Payment Processing</span>
                    <StatusBadge state="approved">Running</StatusBadge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Data Validation</span>
                    <StatusBadge state="pending">Queued</StatusBadge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Report Generation</span>
                    <StatusBadge state="approved">Complete</StatusBadge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card title="Recent Activity" className="lg:col-span-2">
            <Table rows={tableData} />
            
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm text-wf-muted">
                Showing 5 of 247 recent workflows
              </p>
              <Button variant="secondary">View All</Button>
            </div>
          </Card>
        </div>

        {/* System Info */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card title="System Performance">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>CPU Usage</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-wf-border rounded-full h-2">
                    <div className="bg-wf-green h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                  <span className="text-sm">68%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Memory</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-wf-border rounded-full h-2">
                    <div className="bg-wf-yellow h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                  <span className="text-sm">84%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Disk Space</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 bg-wf-border rounded-full h-2">
                    <div className="bg-wf-green h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                  <span className="text-sm">45%</span>
                </div>
              </div>
            </div>
          </Card>

          <Card title="Quick Actions">
            <div className="grid gap-3">
              <Button variant="primary" className="w-full justify-start">
                Create New Workflow
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                Import Configuration
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Export Logs
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                System Settings
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
