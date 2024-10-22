import React, { useState } from 'react';
import { LayoutDashboard, Users, BarChart, FileText, Settings, Menu, X, Download} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const performanceData = [
  { name: 'Jan', leads: 65, conversion: 45, revenue: 4800 },
  { name: 'Feb', leads: 78, conversion: 52, revenue: 5200 },
  { name: 'Mar', leads: 82, conversion: 55, revenue: 5800 },
  { name: 'Apr', leads: 70, conversion: 48, revenue: 5100 },
  { name: 'May', leads: 85, conversion: 58, revenue: 6200 },
  { name: 'Jun', leads: 90, conversion: 60, revenue: 6500 },
];

const leadsData = [
  { id: 1, name: 'John Smith', email: 'john@example.com', status: 'New', date: '2024-10-21' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', status: 'Contacted', date: '2024-10-20' },
  { id: 3, name: 'Mike Wilson', email: 'mike@example.com', status: 'Qualified', date: '2024-10-19' },
];

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderDashboardContent = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Total Leads</h3>
        <p className="text-3xl font-bold">245</p>
        <p className="text-green-500">↑ 12% from last month</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
        <p className="text-3xl font-bold">52%</p>
        <p className="text-green-500">↑ 5% from last month</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Revenue</h3>
        <p className="text-3xl font-bold">$28,450</p>
        <p className="text-green-500">↑ 8% from last month</p>
      </div>
    </div>
  );

  const renderLeadsContent = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Lead Management</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Lead
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {leadsData.map((lead) => (
              <tr 
                key={lead.id}
                onClick={() => setSelectedLead(lead)}
                className="hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${lead.status === 'New' ? 'bg-green-100 text-green-800' : 
                    lead.status === 'Contacted' ? 'bg-blue-100 text-blue-800' : 
                    'bg-yellow-100 text-yellow-800'}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{lead.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAnalyticsContent = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Performance Analytics</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="leads" stroke="#8884d8" />
            <Line type="monotone" dataKey="conversion" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const renderReportsContent = () => (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Reports</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
          <div>
            <h3 className="font-medium">Lead Performance Report</h3>
            <p className="text-sm text-gray-500">Monthly overview of lead metrics</p>
          </div>
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <Download size={16} />
            <span>Download</span>
          </button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded">
          <div>
            <h3 className="font-medium">Conversion Analytics</h3>
            <p className="text-sm text-gray-500">Detailed conversion breakdown</p>
          </div>
          <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            <Download size={16} />
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return renderDashboardContent();
      case 'leads':
        return renderLeadsContent();
      case 'analytics':
        return renderAnalyticsContent();
      case 'reports':
        return renderReportsContent();
      default:
        return renderDashboardContent();
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-lg transition-all duration-300`}>
        <div className="p-4 flex justify-between items-center">
          {isSidebarOpen && <h1 className="text-xl font-bold">EzyMetrics</h1>}
          <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="mt-8">
          <div 
            className={`flex items-center space-x-4 px-4 py-3 cursor-pointer
              ${activeSection === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveSection('dashboard')}
          >
            <LayoutDashboard size={20} />
            {isSidebarOpen && <span>Dashboard</span>}
          </div>
          <div 
            className={`flex items-center space-x-4 px-4 py-3 cursor-pointer
              ${activeSection === 'leads' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveSection('leads')}
          >
            <Users size={20} />
            {isSidebarOpen && <span>Leads</span>}
          </div>
          <div 
            className={`flex items-center space-x-4 px-4 py-3 cursor-pointer
              ${activeSection === 'analytics' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveSection('analytics')}
          >
            <BarChart size={20} />
            {isSidebarOpen && <span>Analytics</span>}
          </div>
          <div 
            className={`flex items-center space-x-4 px-4 py-3 cursor-pointer
              ${activeSection === 'reports' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
            onClick={() => setActiveSection('reports')}
          >
            <FileText size={20} />
            {isSidebarOpen && <span>Reports</span>}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="px-4 py-6">
            <h1 className="text-2xl font-semibold">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h1>
          </div>
        </header>
        <main className="p-6">
          {renderContent()}
        </main>
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Lead Details</h2>
              <button 
                onClick={() => setSelectedLead(null)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1">{selectedLead.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1">{selectedLead.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <p className="mt-1">{selectedLead.status}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date Added</label>
                <p className="mt-1">{selectedLead.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
