import { StatusBadge } from './StatusBadge';

interface TableRow {
  id: string;
  customer: string;
  amount: string;
  state: 'approved' | 'pending' | 'rejected';
  date?: string;
}

interface TableProps {
  rows: TableRow[];
  title?: string;
}

export function Table({ rows, title = "Orders" }: TableProps) {
  return (
    <div className="space-y-4">
      {title && <h3 className="font-display text-xl">{title}</h3>}
      <div className="overflow-x-auto rounded-2xl border border-wf-border">
        <table className="min-w-full divide-y divide-wf-border">
          <thead className="bg-bg">
            <tr className="text-left text-xs uppercase text-wf-muted tracking-wider">
              <th className="px-4 py-3 font-medium">Order #</th>
              <th className="px-4 py-3 font-medium">Customer</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-wf-border bg-wf-card">
            {rows.map((row) => (
              <tr key={row.id} className="hover:bg-fg/5 transition-colors">
                <td className="px-4 py-3 font-mono text-sm">{row.id}</td>
                <td className="px-4 py-3 font-medium">{row.customer}</td>
                <td className="px-4 py-3">{row.amount}</td>
                <td className="px-4 py-3">
                  <StatusBadge state={row.state} />
                </td>
                <td className="px-4 py-3 text-sm text-wf-muted">
                  {row.date || 'Today'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}