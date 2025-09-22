import React from 'react';
import {  Info, ExternalLink } from 'lucide-react';
import LineChart from './LineChart';
import type { InsightMetric } from '../types/dashboard';

interface InsightCardProps {
  metric: InsightMetric;
}

const InsightCard: React.FC<InsightCardProps> = ({ metric }) => {
  const isPositive = metric.trend === 'up';
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
  // const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';

  //  sample chart data for demonstration
  const chartData = metric.chartData?.map((value, index) => ({
    date: `Day ${index + 1}`,
    value
  })) || [];

  return (
  <div className="bg-white rounded-lg border border-gray-200 p-4 flex flex-col justify-between hover:shadow-sm transition-shadow">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-medium text-gray-600 flex items-center">
        {metric.title}
        <Info className="ml-1 h-3 w-3 text-gray-400" />
      </h3>
      <span className="text-xs text-gray-500">Last week</span>
    </div>

    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="text-2xl font-bold text-gray-900">
          {metric.value}
        </div>
        <div className={`text-sm mt-1 ${changeColor}`}>
          {isPositive ? "▲" : "▼"} {Math.abs(metric.change)} {metric.comparison}
        </div>
      </div>

      {chartData.length > 0 && (
        <div className="w-20 h-12 ml-4">
          <LineChart
            data={chartData}
            height={48}
            color={isPositive ? '#10B981' : '#EF4444'}
          />
        </div>
      )}
    </div>

    <button className="flex items-center text-blue-600 text-xs font-medium hover:text-blue-700 mt-3 self-start">
      View Details
      <ExternalLink className="ml-1 h-3 w-3" />
    </button>
  </div>
);

};

export default InsightCard;