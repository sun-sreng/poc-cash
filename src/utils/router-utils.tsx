import { createMemoryHistory } from '@tanstack/react-router';
import { vi } from 'vitest';

export const mockNavigate = vi.fn();
export const mockHistory = createMemoryHistory({
  initialEntries: ['/'],
});

export const mockUseRouter = () => ({
  navigate: mockNavigate,
  history: mockHistory,
  state: { location: { pathname: '/' } },
  from: '/',
  preload: vi.fn(),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        mockNavigate(to);
      }}
    >
      {children}
    </a>
  ),
});

export const resetRouterMocks = () => {
  mockNavigate.mockReset();
  mockHistory.destroy();
};
