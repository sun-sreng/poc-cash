import { FC } from 'react';

export const Greet: FC<{ name?: string }> = ({ name }) => {
  if (name) return <h1 data-testid="greet">Hello {name}</h1>;

  return <button data-testid="btn-login">Login</button>;
};

export default Greet;
