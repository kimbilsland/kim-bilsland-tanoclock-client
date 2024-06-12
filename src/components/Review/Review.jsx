import "./Review.scss";

function Review({ name, created_at, review }) {
  return (
    <li className="review__item">
      <div className="review__info">
        <div className="review__details">
          <h4 className="review__name">{name}</h4>
          <h4 className="review__timestamp">
            {/* {new Date(created_at).toLocaleDateString()} */}
          {created_at}
          </h4>
        </div>
        <p className="review__message">{review}</p>
      </div>
    </li>
  );
}

export default Review;
