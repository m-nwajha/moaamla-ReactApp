// Import React Router Hooks & Components
import { NavLink } from 'react-router-dom';

// Import Menu Data
import { NAV_MENU } from '../../constants/HEADER';

// Import Style css
import './style.css';


const NavMenu = () => {
  return (
    <ul className='menu'>

      {/** Start Nav Menu Item  */}
      {NAV_MENU.map(navItem => {
        return (
          <li key={navItem.id}>
            <NavLink
              className='link__nav'
              to={navItem.href}>
              {navItem.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
