import { render, screen } from '@testing-library/react';
import Greet from './greet';

describe('Greet', () => {
  it('should render', () => {
    render(<Greet name="John" />);

    const greet = screen.getByTestId('greet');
    expect(greet).toBeInTheDocument();
    expect(greet).toHaveTextContent(/john/i);
  });

  it('should render login button when name is not provided', () => {
    render(<Greet />);

    const greet = screen.getByTestId('btn-login');
    expect(greet).toBeInTheDocument();
    expect(greet).toHaveTextContent(/login/i);
  });
});
