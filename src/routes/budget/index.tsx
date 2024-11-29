import { getBudgets } from '@/api/budgets';
import BudgetType from '@/components/budget/budget-type';
import { TransactionBudget } from '@/components/budget/transaction-budget';
import { H1 } from '@/components/widgets/typography';
import { Box } from '@mui/material';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/budget/')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: RouteComponent,
  loader: async () => await getBudgets(),
});

function RouteComponent() {
  const budgets = Route.useLoaderData();

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}
    >
      <H1 color="#324C5B" sx={{ flexGrow: 1 }}>
        My Budget
      </H1>
      <TransactionBudget />
      <BudgetType
        title="Active Budget"
        budgets={budgets.filter((budget) => budget.status === 'active')}
      />
      <BudgetType
        title="Achieved Budget"
        budgets={budgets.filter((budget) => budget.status === 'achieved')}
      />
    </Box>
  );
}
