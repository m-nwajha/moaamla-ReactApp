import { Navigate } from 'react-router-dom';

const GuestGuard = ({ role, children }) => {
  if (role === 'user') {
    return (
      <Navigate
        to={'/dashboard'}
        replace={true}
      />
    );
  }
  //   if (role === 'user') {
  //     return (
  //       <Navigate
  //         to={'/posts-page'}
  //         replace={true}
  //       />
  //     );
  //   }
  return children;
};

export default GuestGuard;
