// Import React Router Hooks & Components
import { Link } from 'react-router-dom';

// Import Typography Components
import { Body2, H2WhiteBlue } from '../Typography';

// Import ABOUT_ADS Constants
import { ABOUT_ADS } from '../../constants/HOME_PAGE_DATA';

// Import Style css
import './style.css';

function AboutAds() {
  // Start About Ads Component.
  return (
    <section id='about2'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-11 col-lg-7 order-2 order-lg-1'>
            <img
              className='img-fluid'
              src={ABOUT_ADS.image}
              alt='about-img'
            />
          </div>
          <div className='col-12 col-lg-5 order-1 order-lg-2 p-3 align-self-center text-center'>
            {/** Title */}
            <H2WhiteBlue>{ABOUT_ADS.title}</H2WhiteBlue>

            {/** Description */}
            <Body2 className='card-text'>{ABOUT_ADS.description}</Body2>

            {/** Btns Links */}
            <div className='about2__btns'>
              <Link
                to={ABOUT_ADS.btns.btn1.href}
                className='more__btn'>
                {ABOUT_ADS.btns.btn1.label}
              </Link>
              <Link
                to={ABOUT_ADS.btns.btn2.href}
                className='contact__btn'>
                {ABOUT_ADS.btns.btn2.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAds;
