import { Navigate } from 'react-router-dom';
import { ROLES } from '../../constants/ROLES';
import { PATHS } from '../../router/paths';

const UserGuard = ({ role, children }) => {
  if (role === ROLES.guest) {
    return (
      <Navigate
        to={PATHS.LOGIN.PATH}
        replace={true}
      />
    );
  }
  return children;
};

export default UserGuard;
