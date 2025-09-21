import { useState, useEffect } from 'react';
import type {PaymentOverview, InsightMetric, PaymentMethod, ChartDataPoint } from '../types/dashboard'

export const useDashboardData = () => {
  const [paymentOverview ] = useState<PaymentOverview>({
    collectedAmount: {
      value: '₹ 0',
      change: 35,
      trend: 'up',
      comparison: 'more than the week before'
    },
    refunds: {
      value: '₹ 0',
      change: 50,
      trend: 'down',
      comparison: 'less than the week before'
    },
    orders: {
      value: '₹ 0',
      change: 0,
      trend: 'down',
      comparison: 'more than the week before'
    }
  });

  const [insights] = useState<InsightMetric[]>([
    {
      title: 'Payment count',
      value: 47,
      change: 6,
      trend: 'down',
      comparison: 'less than the week before',
      chartData: [45, 52, 48, 51, 47, 49, 47]
    },
    {
      title: 'Payment failure count',
      value: 29,
      change: 24,
      trend: 'up',
      comparison: 'more than the week before',
      chartData: [25, 28, 32, 29, 31, 27, 29]
    },
    {
      title: 'Refund count',
      value: 1,
      change: 1,
      trend: 'down',
      comparison: 'less than the week before',
      chartData: [2, 1, 3, 1, 2, 1, 1]
    },
    {
      title: 'Refund failure count',
      value: 0,
      change: 0,
      trend: 'up',
      comparison: 'same as the week before',
      chartData: [0, 0, 1, 0, 0, 0, 0]
    }
  ]);

  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      name: 'Card',
      value: '₹ 0',
      percentage: 60,
      color: '#3B82F6'
    },
    {
      name: 'Netbanking',
      value: '₹ 0',
      percentage: 30,
      color: '#8B5CF6'
    },
    {
      name: 'UPI',
      value: '₹ 0',
      percentage: 10,
      color: '#10B981'
    }
  ]);

  const [chartData] = useState<ChartDataPoint[]>([
    { date: 'Sep 11', value: 45000 },
    { date: 'Sep 12', value: 52000 },
    { date: 'Sep 13', value: 48000 },
    { date: 'Sep 14', value: 38000 },
    { date: 'Sep 15', value: 55000 },
    { date: 'Sep 16', value: 62000 },
    { date: 'Sep 17', value: 58000 }
  ]);

  const [dateRange, setDateRange] = useState('Last 7 days');

  // Simulate data loading
  useEffect(() => {
    // In a real app, this would fetch data from an API
    const timer = setTimeout(() => {
      // Data is already set in useState
    }, 1000);

    return () => clearTimeout(timer);
  }, [dateRange]);

  return {
    paymentOverview,
    insights,
    paymentMethods,
    chartData,
    dateRange,
    setDateRange,
    isLoading: false
  };
};