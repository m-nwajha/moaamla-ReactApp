import { Navigate } from 'react-router-dom';

const UserGuard = ({ role, children }) => {
  if (role === 'guest') {
    return (
      <Navigate
        to={'/register'}
        replace={true}
      />
    );
  }
  return children;
};

export default UserGuard;
