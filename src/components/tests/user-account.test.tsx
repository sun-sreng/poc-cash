import { render, screen } from '@testing-library/react';
import { User } from './tests.type';
import UserAccount from './user-account';

describe('UserAccount', () => {
  it('should render user name', () => {
    const user: User = {
      id: 1,
      name: 'John',
      isAdmin: true,
    };
    render(<UserAccount user={user} />);

    const userAccount = screen.getByTestId('user-account');
    expect(userAccount).toBeInTheDocument();
  });
});
