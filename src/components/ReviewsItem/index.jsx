// Import Typography Components.
import { Body3, H6, Span1 } from '../Typography';

// Import ReviewsStars Component.
import ReviewsStars from '../ReviewsStars';

// Import Style css.
import './style.css';

const ReviewsItem = ({ imgURL, name, job, reviewText, star }) => {
  return (
    // Render the Reviews Item component.
    <div
      className='col-12 col-lg-4 px-4'
      data-aos='fade-down'>
      <div className='card'>
        <div className='card-body text-center'>
          {/** Reviews Image */}
          <img
            className='img-thumbnail'
            src={imgURL}
            alt={name}
          />

          <div className='reviews__stars'>
            {/** Reviews Stars */}
            <ReviewsStars amountStar={star} />
          </div>

          {/** Reviews Text */}
          <H6 className='card-title'>{name}</H6>
          <Span1 className='card-text job'>{job}</Span1>
          <i className='bi bi-chat-square-quote'></i>
          <Body3 className='card-text'>{reviewText}</Body3>
        </div>
      </div>
    </div>
  );
};

export default ReviewsItem;
