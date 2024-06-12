const ReviewCounter = ({ reviews }) => {
  const reviewCount = reviews.length;

  for (let i = 0; i < reviewCount; i++)
    if (reviewCount === 0) {
      return <h3>No reviews yet</h3>;
    }
    else if (reviewCount ===1) {
      return <h3>{reviewCount} Review</h3>;
    }  
     else return <h3>{reviewCount} Reviews</h3>;
};

export default ReviewCounter;
