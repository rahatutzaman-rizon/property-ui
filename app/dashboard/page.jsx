"use client"




// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import { BarChart2, DollarSign, TrendingUp, PieChart, Briefcase, Activity } from 'lucide-react';

export default function DashboardHome() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <OverviewContent />;
      case 'performance':
        return <PerformanceContent />;
      case 'allocation':
        return <AllocationContent />;
      default:
        return <OverviewContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 ">
      <Head>
        <title>JMC Asset Management Ltd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">JMC Asset Management Ltd</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard icon={<BarChart2 size={32} />} title="Assets Under Management" value="$3.2B" change="+5.3%" />
          <MetricCard icon={<DollarSign size={32} />} title="Annual Returns" value="14.2%" change="+2.1%" />
          <MetricCard icon={<TrendingUp size={32} />} title="YTD Performance" value="+8.7%" change="+1.4%" />
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="flex border-b">
            <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>Overview</TabButton>
            <TabButton active={activeTab === 'performance'} onClick={() => setActiveTab('performance')}>Performance</TabButton>
            <TabButton active={activeTab === 'allocation'} onClick={() => setActiveTab('allocation')}>Asset Allocation</TabButton>
          </div>
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

const MetricCard = ({ icon, title, value, change }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex items-center">
    <div className="text-primary mr-4">{icon}</div>
    <div>
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="text-3xl font-bold text-primary">{value}</p>
      <p className={`text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{change}</p>
    </div>
  </div>
);

const TabButton = ({ children, active, onClick }) => (
  <button
    className={`px-6 py-3 font-medium ${active ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-primary'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const OverviewContent = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-primary mb-4">Asset Overview</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-2">Top Performing Assets</h4>
        <ul className="space-y-2">
          <li className="flex justify-between"><span>Technology ETF</span><span className="text-green-500">+18.3%</span></li>
          <li className="flex justify-between"><span>Healthcare Fund</span><span className="text-green-500">+12.7%</span></li>
          <li className="flex justify-between"><span>Real Estate Trust</span><span className="text-green-500">+9.2%</span></li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-2">Asset Distribution</h4>
        <ul className="space-y-2">
          <li className="flex justify-between"><span>Equities</span><span>45%</span></li>
          <li className="flex justify-between"><span>Fixed Income</span><span>30%</span></li>
          <li className="flex justify-between"><span>Real Estate</span><span>15%</span></li>
          <li className="flex justify-between"><span>Alternatives</span><span>10%</span></li>
        </ul>
      </div>
    </div>
  </div>
);

const PerformanceContent = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-primary mb-4">Performance Metrics</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PerformanceCard icon={<Activity size={24} />} title="Alpha" value="2.3" />
      <PerformanceCard icon={<TrendingUp size={24} />} title="Beta" value="0.85" />
      <PerformanceCard icon={<PieChart size={24} />} title="Sharpe Ratio" value="1.7" />
    </div>
    <div className="bg-gray-100 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2">Historical Returns</h4>
      <ul className="space-y-2">
        <li className="flex justify-between"><span>1 Year</span><span className="text-green-500">+14.2%</span></li>
        <li className="flex justify-between"><span>3 Years</span><span className="text-green-500">+32.7%</span></li>
        <li className="flex justify-between"><span>5 Years</span><span className="text-green-500">+67.3%</span></li>
        <li className="flex justify-between"><span>10 Years</span><span className="text-green-500">+138.9%</span></li>
      </ul>
    </div>
  </div>
);

const PerformanceCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow p-4 flex items-center">
    <div className="text-primary mr-3">{icon}</div>
    <div>
      <h4 className="text-sm text-gray-600">{title}</h4>
      <p className="text-xl font-bold text-primary">{value}</p>
    </div>
  </div>
);

const AllocationContent = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-primary mb-4">Asset Allocation</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-2">By Asset Class</h4>
        <ul className="space-y-2">
          <li className="flex justify-between"><span>Equities</span><span>45%</span></li>
          <li className="flex justify-between"><span>Fixed Income</span><span>30%</span></li>
          <li className="flex justify-between"><span>Real Estate</span><span>15%</span></li>
          <li className="flex justify-between"><span>Alternatives</span><span>10%</span></li>
        </ul>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="text-lg font-semibold mb-2">By Geography</h4>
        <ul className="space-y-2">
          <li className="flex justify-between"><span>North America</span><span>50%</span></li>
          <li className="flex justify-between"><span>Europe</span><span>25%</span></li>
          <li className="flex justify-between"><span>Asia Pacific</span><span>20%</span></li>
          <li className="flex justify-between"><span>Emerging Markets</span><span>5%</span></li>
        </ul>
      </div>
    </div>
    <div className="bg-gray-100 rounded-lg p-4">
      <h4 className="text-lg font-semibold mb-2">Top 5 Holdings</h4>
      <ul className="space-y-2">
        <li className="flex justify-between"><span>Apple Inc. (AAPL)</span><span>3.2%</span></li>
        <li className="flex justify-between"><span>Microsoft Corp. (MSFT)</span><span>2.8%</span></li>
        <li className="flex justify-between"><span>Amazon.com Inc. (AMZN)</span><span>2.5%</span></li>
        <li className="flex justify-between"><span>Alphabet Inc. (GOOGL)</span><span>2.3%</span></li>
        <li className="flex justify-between"><span>Facebook, Inc. (FB)</span><span>2.0%</span></li>
      </ul>
    </div>
  </div>
);