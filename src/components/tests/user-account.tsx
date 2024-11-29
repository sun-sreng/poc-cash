import Greet from '@/components/tests/greet';
import { User } from './tests.type';

const UserAccount = ({ user }: { user: User }) => {
  return (
    <>
      <h2>User Profile</h2>
      <Greet name={user.name} />
      {user.isAdmin && <button data-testid="btn-edit">Edit</button>}
      <div data-testid="user-account">
        <strong>Name:</strong> {user.name}
      </div>
    </>
  );
};

export default UserAccount;
