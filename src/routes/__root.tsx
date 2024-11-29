import { AuthContext } from '@/hooks/use-auth';
import SiteHeader from '@/layouts/site-header';
import { Container } from '@mui/material';
import {
  createRootRouteWithContext,
  Outlet,
  useLocation,
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

type RouterContext = {
  authentication: AuthContext;
};
export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
});

function Root() {
  const location = useLocation();
  const noHeaderRoutes = [
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/verify-code',
  ];
  const hideHeader = noHeaderRoutes.includes(location.pathname);

  return (
    <div>
      {!hideHeader && <SiteHeader />}
      <Container maxWidth="xl" sx={{ py: '20px' }}>
        <Outlet />
      </Container>
      <TanStackRouterDevtools />
    </div>
  );
}
