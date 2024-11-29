import AnalyticsReport from '@/components/home/analytics-report';
import BudgetAchievement from '@/components/home/budget-achievement';
import BudgetProgress from '@/components/home/budget-progress';
import OverviewCard, {
  OverviewCardProps,
} from '@/components/home/overview-card';
import RecentTransactions from '@/components/home/recent-transactions';
import SearchField from '@/components/home/search-field';
import SpendingSummary from '@/components/home/spending-summary';
import SplashScreen from '@/components/home/splash-screen';
import { FlexJustifyEnd } from '@/components/widgets/flex';
import { H1 } from '@/components/widgets/typography';
import { CalendarMonth } from '@mui/icons-material';
import { Button, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

const HomeRoot = styled('div')(({ theme }) => ({
  margin: '0px',
  [theme.breakpoints.down('sm')]: { margin: '0px' },
}));

export const Route = createFileRoute('/')({
  beforeLoad: ({ context }) => {
    const { isLogged } = context.authentication;
    if (!isLogged()) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: Index,
});

function Index() {
  const [showSplash, setShowSplash] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem('hasSeenSplash');
    if (!isFirstVisit) {
      setShowSplash(true);
      sessionStorage.setItem('hasSeenSplash', 'true');
    }
  }, []);
  const data: OverviewCardProps[] = [
    {
      title: 'Total Balance',
      value: '$ 5,000',
      color: 'primary',
      metadata: {
        percentage: 6.12,
        trend: 'positive',
        label: 'vs last month',
      },
    },
    {
      title: 'Income',
      value: '$ 3,500',
      color: 'white',
      metadata: {
        percentage: -2.5,
        trend: 'positive',
        label: 'vs last month',
      },
    },
    {
      title: 'Expend',
      value: '$ 1,800',
      color: 'white',
      metadata: {
        percentage: 6.12,
        trend: 'negative',
        label: 'vs last month',
      },
    },
    {
      title: 'Budget saving',
      value: '$ 1,200',
      color: 'white',
      metadata: {
        percentage: 6.12,
        trend: 'positive',
        label: 'vs last month',
      },
    },
  ];

  return (
    <HomeRoot>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      {!showSplash && (
        <>
          <Grid container spacing={1} py={2}>
            <Grid size={{ xs: 12, md: 7 }}>
              <H1 color="#324C5B" sx={{ flexGrow: 1 }}>
                My Dashboard
              </H1>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <FlexJustifyEnd gap={1}>
                <SearchField
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                />
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{
                    minWidth: '32px',
                    bgcolor: 'background.paper',
                    color: '#0f172a',
                  }}
                >
                  <CalendarMonth />
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  sx={{ bgcolor: 'background.paper', color: '#0f172a' }}
                >
                  This Month
                </Button>
              </FlexJustifyEnd>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 9 }}>
              <Grid container spacing={2}>
                {data.map((item, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                    <OverviewCard {...item} />
                  </Grid>
                ))}
                <Grid size={12}>
                  <AnalyticsReport />
                </Grid>
                <Grid size={12}>
                  <RecentTransactions />
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 3 }}>
              <Grid container spacing={2}>
                <Grid size={12}>
                  <SpendingSummary />
                </Grid>
                <Grid size={12}>
                  <BudgetProgress />
                </Grid>
                <Grid size={12}>
                  <BudgetAchievement />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </HomeRoot>
  );
}
