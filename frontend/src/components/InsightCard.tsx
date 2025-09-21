import React from 'react';
import { TrendingUp, TrendingDown, Info, ExternalLink } from 'lucide-react';
import LineChart from './LineChart';
import type { InsightMetric } from '../types/dashboard';

interface InsightCardProps {
  metric: InsightMetric;
}

const InsightCard: React.FC<InsightCardProps> = ({ metric }) => {
  const isPositive = metric.trend === 'up';
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
  const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';

  // Generate sample chart data for demonstration
  const chartData = metric.chartData?.map((value, index) => ({
    date: `Day ${index + 1}`,
    value
  })) || [];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 flex items-center">
          {metric.title}
          <Info className="ml-1 h-3 w-3 text-gray-400" />
        </h3>
        <span className="text-xs text-gray-500">Last week</span>
      </div>
      
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-3xl font-bold text-gray-900 mb-2">
            {metric.value}
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${changeColor}`}>
              {isPositive ? (
                <TrendingUp className="h-3 w-3 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 mr-1" />
              )}
              {Math.abs(metric.change)} {metric.comparison}
            </div>
          </div>

          <button className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
            View Details
            <ExternalLink className="ml-1 h-3 w-3" />
          </button>
        </div>
        
        {chartData.length > 0 && (
          <div className="w-24 h-12 ml-4">
            <LineChart 
              data={chartData} 
              height={48}
              color={isPositive ? '#10B981' : '#EF4444'}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InsightCard;