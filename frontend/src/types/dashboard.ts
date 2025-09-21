export interface PaymentOverview {
  collectedAmount: {
    value: string;
    change: number;
    trend: 'up' | 'down';
    comparison: string;
  };
  refunds: {
    value: string;
    change: number;
    trend: 'up' | 'down';
    comparison: string;
  };
  orders: {
    value: string;
    change: number;
    trend: 'up' | 'down';
    comparison: string;
  };
}

export interface InsightMetric {
  title: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  comparison: string;
  chartData?: number[];
}

export interface PaymentMethod {
  name: string;
  value: string;
  percentage: number;
  color: string;
}

export interface ChartDataPoint {
  date: string;
  value: number;
}