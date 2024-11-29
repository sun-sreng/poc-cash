import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import SiteHeader from './site-header';

const mockNavigate = vi.fn();
vi.mock('@tanstack/react-router', async () => {
  const actual = await vi.importActual('@tanstack/react-router');
  return {
    ...actual,
    Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
      <a href={to}>{children}</a>
    ),
    useNavigate: () => ({
      from: '/',
      navigate: mockNavigate,
    }),
  };
});

vi.mock('../mobile-menu', () => ({
  MobileMenu: () => <div data-testid="mobile-menu">Mobile Menu</div>,
}));

vi.mock('../account-menu', () => ({
  default: () => <div data-testid="account-menu">Account Menu</div>,
}));

describe('SiteHeader', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders the logo with correct attributes', () => {
    render(<SiteHeader />);

    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo.svg');
    expect(logo).toHaveAttribute('alt', 'poc cash');
    expect(logo).toHaveAttribute('height', '36px');
  });

  it('renders all navigation links', () => {
    render(<SiteHeader />);

    const links = ['Home', 'Income', 'Expense', 'Budget'];
    links.forEach((linkText) => {
      const link = screen.getByText(linkText);
      expect(link).toBeInTheDocument();
    });
  });

  it('renders AccountMenu component', () => {
    render(<SiteHeader />);

    const accountMenu = screen.getByTestId('account-menu');
    expect(accountMenu).toBeInTheDocument();
  });

  it('logo click navigates to home page', async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const logo = screen.getByTestId('logo');
    await user.click(logo);
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });
});
