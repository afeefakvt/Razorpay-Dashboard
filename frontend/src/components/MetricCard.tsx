import React from 'react';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: 'up' | 'down';
  comparison: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend,
  comparison,
  className = ''
}) => {
  const isPositive = trend === 'up';
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
  const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';

  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600 flex items-center">
          {title}
          <Info className="ml-1 h-3 w-3 text-gray-400" />
        </h3>
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-bold text-gray-900">
          {value}
        </div>
        
        <div className="flex items-center space-x-2">
          <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${changeColor}`}>
            {isPositive ? (
              <TrendingUp className="h-3 w-3 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 mr-1" />
            )}
            {Math.abs(change)}%
          </div>
          <span className="text-xs text-gray-500">{comparison}</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;