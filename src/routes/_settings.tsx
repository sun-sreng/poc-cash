import SettingNav from '@/components/settings/setting-nav';
import SettingNavMobile from '@/components/settings/setting-nav-mobile';
import { H1 } from '@/components/widgets/typography';
import { Box, Grid2 as Grid } from '@mui/material';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_settings')({
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
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          gap: 1,
          mb: 2,
        }}
      >
        <SettingNavMobile />
        <H1 color="#324C5B" sx={{ flexGrow: 1 }}>
          Setting
        </H1>
      </Box>

      <Grid container spacing={2}>
        <Grid
          size={{ xs: 0, lg: 3 }}
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          <SettingNav />
        </Grid>
        <Grid size={{ xs: 12, lg: 9 }}>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}
