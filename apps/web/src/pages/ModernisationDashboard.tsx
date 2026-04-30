import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  Users, 
  Activity, 
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Users as UsersIcon,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Globe,
  Lock,
  ShieldCheck,
  Cloud
} from 'lucide-react';

const identityModernisationData = [
  { month: 'Jan', legacy: 5000, hybrid: 1200, cloud: 300 },
  { month: 'Feb', legacy: 4800, hybrid: 1500, cloud: 500 },
  { month: 'Mar', legacy: 4200, hybrid: 1800, cloud: 1200 },
  { month: 'Apr', legacy: 3500, hybrid: 2200, cloud: 1800 },
  { month: 'May', legacy: 2800, hybrid: 2500, cloud: 2500 },
  { month: 'Jun', legacy: 1500, hybrid: 2800, cloud: 3500 },
];

const riskCategoryBreakdown = [
  { name: 'Legacy Protocols (NTLM)', value: 40, color: '#3b82f6' },
  { name: 'Privileged Shadowing', value: 25, color: '#2563eb' },
  { name: 'GPO Misconfigurations', value: 20, color: '#60a5fa' },
  { name: 'Inactive Identities', value: 15, color: '#93c5fd' },
];

const KPI_CARDS = [
  { title: 'Total AD Identities', value: '7.8k', trend: '-2% (Cleanup)', color: 'blue', icon: UsersIcon },
  { title: 'Modernisation Index', value: '62.4%', trend: '+15.2% MoM', color: 'blue', icon: Zap },
  { title: 'Identity Risk Score', value: 'B-', trend: 'Improving', color: 'blue', icon: ShieldCheck },
  { title: 'MFA Readiness', value: '88.5%', trend: '+4% QoQ', color: 'blue', icon: Lock },
];

const ModernisationDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Identity Transformation Hub</h1>
          <p className="text-slate-400">Institutional Active Directory modernisation and cloud identity migration analytics.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Generate Risk Report
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Simulate Modernisation Plan
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-blue-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-blue-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Modernisation Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Identity Evolution Velocity</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={identityModernisationData}>
                <defs>
                  <linearGradient id="colorCloud" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="cloud" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCloud)" name="Cloud-Native" />
                <Area type="monotone" dataKey="hybrid" stroke="#60a5fa" strokeWidth={2} fillOpacity={0} name="Hybrid Synced" />
                <Area type="monotone" dataKey="legacy" stroke="#1e293b" strokeWidth={2} fillOpacity={0} name="On-Prem Legacy" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Identity Risk Surface</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskCategoryBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskCategoryBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {riskCategoryBreakdown.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Domain Inventory Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Active Domain Transformation Ledger</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">View Forest Topology</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Domain / Forest</th>
                <th className="px-6 py-4 font-semibold">Discovery Tier</th>
                <th className="px-6 py-4 font-semibold">Legacy Exposure</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Hybrid Sync</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'corp.global.local', tier: 'Forest Root', exposure: 'Critical (NTLMv1)', status: 'In Assessment', sync: 'Disconnected' },
                { name: 'sales.us.corp.local', tier: 'Child Domain', exposure: 'Medium (RC4)', status: 'Transforming', sync: 'Partial' },
                { name: 'cloud-managed.azure', tier: 'Azure Managed', exposure: 'Low (Modern)', status: 'Modernised', sync: 'Native' },
              ].map((domain) => (
                <tr key={domain.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{domain.name}</span>
                      <span className="text-xs text-slate-500 font-mono">Functional Level: Windows 2012 R2</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{domain.tier}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      domain.exposure.includes('Critical') ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      {domain.exposure}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400 italic">{domain.status}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Cloud size={14} className={domain.sync === 'Native' ? 'text-emerald-500' : 'text-slate-500'} />
                      <span className="text-sm font-medium text-slate-300">{domain.sync}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModernisationDashboard;
