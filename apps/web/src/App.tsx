import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ModernisationDashboard from './pages/ModernisationDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The Active Directory modernization engine is currently performing a deep-scan of the forest topology and Group Policy objects. Risk analytics and migration orchestration workflows will be fully operational once the identity inventory is synchronized.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ModernisationDashboard />} />
          <Route path="/inventory" element={<Placeholder name="AD Object Inventory & Classification" />} />
          <Route path="/trusts" element={<Placeholder name="Forest & Domain Trust Mapping" />} />
          <Route path="/security" element={<Placeholder name="Identity Security Posture Analysis" />} />
          <Route path="/migration" element={<Placeholder name="Modernisation & Migration Planner" />} />
          <Route path="/hybrid" element={<Placeholder name="Hybrid Connectivity & Entra ID Sync" />} />
          <Route path="/protocols" element={<Placeholder name="Legacy Protocol (NTLM/Kerberos) Analysis" />} />
          <Route path="/gpo" element={<Placeholder name="Group Policy Modernisation & Cleanup" />} />
          <Route path="/risks" element={<Placeholder name="Identity Risk Scorecard & Analytics" />} />
          <Route path="/settings" element={<Placeholder name="Platform & RBAC Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
