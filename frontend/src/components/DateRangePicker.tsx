import React, { useState } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';

interface DateRangePickerProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ 
  value, 
  onChange, 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    'Last 7 days',
    'Last 30 days',
    'Last 3 months',
    'Last 6 months',
    'Last year',
    'Custom range'
  ];

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <Calendar className="h-4 w-4" />
        <span>11/09/2025 — 17/09/2025</span>
        <span className="text-gray-500">{value}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`
                  block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors
                  ${value === option ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}
                `}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;