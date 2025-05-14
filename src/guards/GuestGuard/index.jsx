import { Navigate } from 'react-router-dom';
import { ROLES } from '../../constants/ROLES';
import { PATHS } from '../../router/paths';

const GuestGuard = ({ role, children }) => {
  if (role === ROLES.user) {
    return (
      <Navigate
        to={PATHS.DASHBOARD.PATH}
        replace={true}
      />
    );
  }
  return children;
};

export default GuestGuard;
