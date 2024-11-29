import { signOut } from '@/utils/auth';
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Toolbar,
} from '@mui/material';
import { Link, useRouter } from '@tanstack/react-router';
import AccountMenu from './account-menu';
import { MobileMenu } from './mobile-menu';

export default function SiteHeader() {
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.invalidate();
  };
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={1}
      sx={{ bgcolor: 'background.paper' }}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexGrow: 1,
            }}
          >
            <Link to="/">
              <img
                src="/logo.svg"
                alt="poc cash"
                width="auto"
                height="36px"
                data-testid="logo"
              />
            </Link>
            <Box sx={{ display: { md: 'flex', xs: 'none' }, gap: 1 }}>
              <Link
                to="/"
                activeOptions={{ exact: true }}
                activeProps={{ className: 'active' }}
              >
                Home
              </Link>
              <Link to="/income" activeProps={{ className: 'active' }}>
                Income
              </Link>
              <Link to="/expense" activeProps={{ className: 'active' }}>
                Expense
              </Link>
              <Link to="/budget" activeProps={{ className: 'active' }}>
                Budget
              </Link>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <AccountMenu />
            <Divider orientation="vertical" variant="middle" flexItem />
            <Button
              variant="text"
              style={{
                color: 'var(--mui-palette-primary-main)',
                fontWeight: 500,
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
            <MobileMenu />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
