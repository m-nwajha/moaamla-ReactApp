// Import React Router Hooks & Components
import { Link, useNavigate } from 'react-router-dom';

// Import useAuthContext Hook
import { useContextAuth } from '../../hooks/useContext';

// Import App paths
import { PATHS } from '../../router/paths';

// Import App roles
import { ROLES } from '../../constants/ROLES';

// Import Style css
import './style.css';

const NavBtns = () => {
  // useContextAuth Hook
  const { role, setRole, setToken, setUser } = useContextAuth();

  console.log(role);
  // useNavigate Hook
  const navigate = useNavigate();

  // Handel Logout
  const handelLogout = () => {
    setRole(ROLES.guest);
    setToken('');
    setUser(null);
    localStorage.setItem('token', '');
    localStorage.setItem('role', ROLES.guest);
  };

  return (
    // Start Nav Btns
    <div className='d-flex flex-row gap-3 justify-content-center align-items-center'>
      {/** Login & Navigate To My Dashboard Btn */}
      <Link
        to={role === ROLES.guest ? PATHS.LOGIN.PATH : PATHS.DASHBOARD.PATH}
        className='login__btn'>
        {role === ROLES.guest ? 'تسجيل الدخول' : 'لوحة التحكم الخاصة بي'}
      </Link>

      {
        // Logout Btn
        role === ROLES.user ? (
          <a
            className='logout__btn'
            href=''
            onClick={handelLogout}>
            تسجيل الخروج
          </a>
        ) : null
      }
    </div>
  );
};

export default NavBtns;
