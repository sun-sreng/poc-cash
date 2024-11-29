export interface IBudgetCard {
  id: string;
  title: string;
  amount: number;
  progress: number;
  remaining: number;
  completed?: boolean;
  status: 'active' | 'achieved';
}
