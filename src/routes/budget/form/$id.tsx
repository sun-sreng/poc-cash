import BudgetItemForm from '@/components/budget/budget-item-form';
import { H1 } from '@/components/widgets/typography';
import { Box } from '@mui/material';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/budget/form/$id')({
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
        My Budget
      </H1>
      <BudgetItemForm />
    </Box>
  );
}
