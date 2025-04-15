// Import React Hooks
import { useEffect } from 'react';

// Import useAPI Hook
import useAPI from '../../hooks/useAPI';

// Import ReviewsItem Component.
import ReviewsItem from '../ReviewsItem';

// Import Typography Components.
import { H2DarkBlue } from '../Typography';

// Import API URL Config
import { API_URL } from '../../config/API_URL';

// Import Reviews Constants.
import { REVIEWS } from '../../constants/HOME_PAGE_DATA';

// Import Style css
import './style.css';

const Reviews = () => {
  // useAPI Hook.
  const { get, data } = useAPI(`${API_URL}/reviews`);

  // useEffect Hook.
  useEffect(() => {
    // Get API.
    get();
  }, []);

  return (
    // Start Reviews
    <section id='reviews'>
      <div className='container'>
        {/** Title */}
        <H2DarkBlue>{REVIEWS.title}</H2DarkBlue>

        <div className='row reviews__items'>
          {/* Start Reviews Items */}
          {data.map(reviewItem => {
            return (
              <ReviewsItem
                key={reviewItem.id}
                imgURL={reviewItem.image}
                name={reviewItem.name}
                job={reviewItem.job}
                reviewText={reviewItem.reviewText}
                star={reviewItem.star}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
