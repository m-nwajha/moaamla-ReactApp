// Import Typography Component.
import { Body2, H5 } from '../Typography';

// Import Style css.
import './style.css'

const HowUsedItem = ({ number, title, description }) => {
  // Render the How Used Item component.
  return (
    <div className='col-12 col-md-4'>
      <div className='card'>
        <div className='card-body d-flex flex-column justify-content-center align-items-center'>
          <span className='about__num'>{number}</span>
          <H5 className='card-title'>{title}</H5>
          <Body2 className='card-text'>{description}</Body2>
        </div>
      </div>
    </div>
  );
};

export default HowUsedItem;
