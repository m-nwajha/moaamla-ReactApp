// Import React Hooks
import { useState } from 'react';

// Import React Router Hooks & Components
import { useNavigate } from 'react-router-dom';

// Import Typography Components
import { Body1, H1, H2 } from '../Typography';

// Import Search Hero Form Components
import SearchHero from '../SearchHero';

// Import Hero Constants Data
import { HERO_DATA } from '../../constants/HOME_PAGE_DATA';

// Import Style css
import './style.css';

const Hero = () => {
  // Text Words State
  const [search, setSearch] = useState('');

  // useNavigate Hook
  const navigate = useNavigate();

  // Handel On Change Input from for Hero Search form
  const handelOnChange = e => setSearch(e.target.value);

  // Handel Submit Hero Search form
  const handelSearchServes = () => {
    navigate(`/serves/${search}`);
  };

  // Destructure Hero Data
  const { title, description, paragraph, input, btn, img } = HERO_DATA;

  return (
    // Start Hero Section
    <section
      id='hero'
      className='d-flex flex-row justify-content-center align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-7 text-end align-self-center'>
            <div className='px-3'>
              {/** Hero text */}
              <div className='hero_text'>
                {/** Hero Title */}
                <H1 className='m1'>{title}.</H1>

                {/** Hero Description Title*/}
                <H2>{description}</H2>

                {/** Hero Paragraph*/}
                <Body1>{paragraph}</Body1>
              </div>

              {/** Search Hero Form */}
              <SearchHero
                placeholder={
                  // Input placeholder
                  input
                }
                btnTitle={
                  // Btn Label
                  btn
                }
                searchVal={
                  // Word Text Value (State)
                  search
                }
                onChange={
                  // On Change (Input) Call Function
                  handelOnChange
                }
                searchServes={
                  // On Submit Search Call Function
                  handelSearchServes
                }
              />
            </div>
          </div>
          {/** Start Hero Image */}
          <div className='col-12 col-lg-5'>
            <img
              className='img-fluid'
              src={
                // Hero Image SRC
                img
              }
              alt='hero-img'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
