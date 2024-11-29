import { Box, Grid2, Paper } from '@mui/material';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (isLogged()) {
      throw redirect({
        to: '/',
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Box component="section" sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2
          size={{ xs: 12, lg: 6 }}
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          <Box
            sx={{
              height: '100vh',
              bgcolor: 'primary.main',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Paper sx={{ width: '379px', height: '96px', p: 2 }}>
              <img
                src="/logo.svg"
                alt="Logo"
                style={{ width: '100%', height: '100%' }}
              />
            </Paper>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <Box
            sx={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ maxWidth: '500px' }}>
              <Outlet />
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
