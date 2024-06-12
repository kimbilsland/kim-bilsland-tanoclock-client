import "./ReviewCounter.scss"

const ReviewCounter = ({ reviews }) => {
  const reviewCount = reviews.length;

  for (let i = 0; i < reviewCount; i++)
    if (reviewCount === 0) {
      return <p className="review-counter__heading">No reviews yet</p>;
    } else if (reviewCount === 1) {
      return <p className="review-counter__heading">{reviewCount} Review</p>;
    } else return <p className="review-counter__heading">{reviewCount} Reviews</p>;
};

export default ReviewCounter;
