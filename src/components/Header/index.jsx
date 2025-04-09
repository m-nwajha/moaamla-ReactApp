// Import React Hooks
import { useEffect, useState } from 'react';

// Import React Router Hooks & Components
import { Link } from 'react-router-dom';

// Import Navbar Component
import NavMenu from '../NavMenu';

// Import Nav Btns Component
import NavBtns from '../NavBtns';

// Import Logo App
import { LOGO_APP } from '../../constants/HEADER';

// Import Style css
import './style.css';

const Header = () => {
  // Scroll Page State
  const [heightScroll, setHeightScroll] = useState(0);

  // Mobile Menu State
  const [mobileMenu, setMobileMenu] = useState(false);

  // Handel Open Menu
  const handelOpenMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    // Add Scroll Event Listener on Component Mounting
    document.addEventListener('scroll', () => {
      setHeightScroll(window.scrollY);
    });
  }, []);

  return (
    // Start Contact Div The Header
    <div className={`${mobileMenu ? 'nav-active' : ''} `}>
      <header className={`header ${heightScroll > 0 ? 'scroll__header' : ''}`}>
        <div className='container'>
          <div className='d-flex flex-row justify-content-between align-items-center'>
            {/** Start Logo Tag */}
            <Link to={'/'}>
              <img
                src={LOGO_APP}
                alt='logo'
                className='logo'
              />
            </Link>

            {/** Btn Open Navbar In Mobile Browser */}
            <div className='text-start p-3'>
              <button
                className='open_nav__btn'
                onClick={handelOpenMobileMenu}>
                <i className='bi bi-list'></i>
              </button>
            </div>

            {/** Start Navbar Tag */}
            <nav className='navbar'>
              {/**  Btn Close Navbar In Mobile Browser */}
              <div className='text-start p-3'>
                <button
                  className='close_nav__btn'
                  onClick={handelOpenMobileMenu}>
                  <i className='bi bi-x-lg fs-3'></i>
                </button>
              </div>

              {/** Start Nav Menu Component */}
              <NavMenu />

              {/** Start Nav Btns (Login & Logout & Navigate To My Dashboard ) */}
              <NavBtns />
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
