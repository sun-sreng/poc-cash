import { budgets } from '@/assets/mock/budgets';
import { IBudgetCard } from '@/types/budget-card';

export async function getBudgets(status?: 'active' | 'achieved') {
  // const response = await fetch('http://localhost:3001/budgets');
  // const data: IBudgetCard[] = await response.json();

  if (status) return budgets.filter((budget) => budget.status === status);

  return budgets;
}

export async function getBudgetByID(id: string): Promise<IBudgetCard> {
  // const response = await fetch(`http://localhost:3001/budgets/${id}`);
  // return await response.json();

  return budgets.find((budget) => budget.id === id)!;
}
