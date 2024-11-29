import ExpenseForm from '@/components/expense/expense-form';
import ExpenseList from '@/components/expense/expense-list';
import { H1 } from '@/components/widgets/typography';
import { Box } from '@mui/material';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/expense')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        width: '100%',
      }}
    >
      <H1 color="#324C5B" sx={{ flexGrow: 1 }}>
        My Expense
      </H1>
      <ExpenseForm />
      <ExpenseList />
    </Box>
  );
}
