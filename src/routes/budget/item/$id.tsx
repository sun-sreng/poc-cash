import { getBudgetByID } from '@/api/budgets';
import BudgetViewer from '@/components/budget/budget-viewer';
import { H1 } from '@/components/widgets/typography';
import { Box } from '@mui/material';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/budget/item/$id')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: RouteComponent,
  loader: ({ params }) => getBudgetByID(params.id),
});

function RouteComponent() {
  const data = Route.useLoaderData();

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
      {data && (
        <BudgetViewer
          id={data?.id}
          title={data?.title}
          amount={data?.amount}
          remaining={data?.remaining}
          progress={data?.progress}
          completed={data?.completed}
        />
      )}
    </Box>
  );
}
