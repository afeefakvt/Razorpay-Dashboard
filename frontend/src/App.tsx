import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricCard from './components/MetricCard';
import InsightCard from './components/InsightCard';
import DonutChart from './components/DonutChart';
import LineChart from './components/LineChart';
import DateRangePicker from './components/DateRangePicker';
import { useDashboardData } from './hooks/useDashboardData';
import { ExternalLink } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    paymentOverview,
    insights,
    paymentMethods,
    chartData,
    dateRange,
    setDateRange,
    isLoading
  } = useDashboardData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex flex-1">
        <Sidebar  isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
        />
        
        <main className="flex-1 p-4 lg:p-6 space-y-5">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-2xl font-semibold text-gray-900">Payments Overview</h1>
              <DateRangePicker 
                value={dateRange}
                onChange={setDateRange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              <MetricCard
                title="Collected Amount"
                value={paymentOverview.collectedAmount.value}
                change={paymentOverview.collectedAmount.change}
                trend={paymentOverview.collectedAmount.trend}
                comparison={paymentOverview.collectedAmount.comparison}
              />
              <MetricCard
                title="Refunds"
                value={paymentOverview.refunds.value}
                change={paymentOverview.refunds.change}
                trend={paymentOverview.refunds.trend}
                comparison={paymentOverview.refunds.comparison}
              />
              <MetricCard
                title="Orders"
                value={paymentOverview.orders.value}
                change={paymentOverview.orders.change}
                trend={paymentOverview.orders.trend}
                comparison={paymentOverview.orders.comparison}
              />
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <button className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">
                    This Week
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-900">
                    Last Week
                  </button>
                </div>
                <button className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
                  View collected amount
                  <ExternalLink className="ml-1 h-3 w-3" />
                </button>
              </div>
              
              <div className="h-64">
                <LineChart data={chartData} height={256} />
              </div>
              
              <div className="flex justify-between mt-4 text-xs text-gray-500">
                {chartData.map((point, index) => (
                  <span key={index}>{point.date}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-xl font-semibold text-gray-900">Top Insights</h2>
              <DateRangePicker 
                value={dateRange}
                onChange={setDateRange}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {insights.map((insight, index) => (
                  <InsightCard key={index} metric={insight} />
                ))}
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-medium text-gray-600 flex items-center">
                    Payment method split
                    <span className="ml-2 text-xs text-gray-500">Last week</span>
                  </h3>
                </div>
                
                <DonutChart data={paymentMethods} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;