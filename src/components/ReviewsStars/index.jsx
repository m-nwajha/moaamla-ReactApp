// Import Style css
import './style.css';

const ReviewsStars = ({ amountStar }) => {
  // Star Array
  const star = [];

  // Star Loop
  for (let i = 0; i < amountStar; i++) {
    star.push(
      <i
        key={i}
        className='bi bi-star-fill'></i>
    );
  }
  return star;
};

export default ReviewsStars;
