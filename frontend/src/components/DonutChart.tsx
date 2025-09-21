import React from 'react';
import type { PaymentMethod } from '../types/dashboard';

interface DonutChartProps {
  data: PaymentMethod[];
  size?: number;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, size = 120 }) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  
  let cumulativePercentage = 0;

  return (
    <div className="flex items-center space-x-6">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {data.map((item, index) => {
            const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -cumulativePercentage * circumference / 100;
            
            cumulativePercentage += item.percentage;
            
            return (
              <circle
                key={index}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth="12"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300 hover:stroke-width-[14]"
              />
            );
          })}
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">100%</div>
            <div className="text-xs text-gray-500">Total</div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{item.name}</div>
              <div className="text-xs text-gray-500">{item.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;