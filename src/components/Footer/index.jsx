import ContactInfo from '../ContactInfo';
import FooterLinks from '../FooterLinks';
import SocialLinks from '../SocialLinks';
import { QUICK_LINKS, ABOUT_LINKS } from '../../constants/FOOTER_LINKS';
import './style.css';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-3 footer-contact'>
            <ContactInfo />
          </div>
          <div className='col-12 col-md-6 col-lg-3 footer-links'>
            <FooterLinks
              title={QUICK_LINKS.title}
              menu={QUICK_LINKS.menu}
            />
          </div>
          <div className='col-12 col-md-6 col-lg-3 footer-links'>
            <FooterLinks
              title={ABOUT_LINKS.title}
              menu={ABOUT_LINKS.menu}
            />
          </div>
          <div className='col-12 col-md-6 col-lg-3'>
            {/** social links */}
            <SocialLinks />
          </div>
        </div>
        <div className='row mt-4 pt-3 border-top opacity-75 copyright'>
          <div className='col-12 d-block text-center d-md-flex flex-row-reverse justify-content-between'>
            <p className='text-white'>
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
              <strong className='mx-1'>
                <a href='/'>{document.title}</a>
              </strong>
            </p>
            <p className='text-white'>
              Powered by <a href='https://www.nawjha.tech'>Nawjha</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
