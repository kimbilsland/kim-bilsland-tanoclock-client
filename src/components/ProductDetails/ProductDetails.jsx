import "./ProductDetails.scss";
import "../Review/Review.scss";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FormField from "../FormField/FormField";
import Review from "../Review/Review";
import ReviewCounter from "../../components/ReviewCounter/ReviewCounter";

const API_URL = import.meta.env.VITE_LOCALHOST;

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    image: "",
  });
  const [rating, setRating] = useState({}); //rating isn't finished ()
  const [formData, setFormData] = useState({
    name: "",
    content: "",
    rating: 0,
  });
  const [errors, setErrors] = useState({
    name: "",
    content: "",
    rating: "",
  });
  const [review, setReviews] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const resp = await axios.get(`${API_URL}/api/products/${id}`);
        setProduct(resp.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    getProducts();
  }, []);

  const imagePath = `../public/product-images/${product.image}`;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleRatingChange = (event, newRating) => {
    setFormData({ ...formData, rating: newRating });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      content: "",
      rating: "",
    });
    setErrors({});
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${API_URL}/api/products/${id}/reviews`, formData);
      console.log(formData);
      const resp = await axios.get(`${API_URL}/api/products/${id}/reviews`);
      setReviews(resp.data);

      resetForm();
    } catch (error) {
      alert("Error uploading: " + error.message);
    }

    resetForm();
  };

  useEffect(() => {
    async function getReviews() {
      try {
        const resp = await axios.get(`${API_URL}/api/products/${id}/reviews`);
        setReviews(resp.data);
      } catch (error) {
        console.error("Error fetching inventory: ", error);
      }
    }

    getReviews();
  }, []);

  return (
    <div className="details">
      <div className="details__product">
        <img className="details__image" src={imagePath} alt={product.name} />
        <div className="details__info">
          <h3>{product.name}</h3>
          <p className="details__description">{product.description}</p>
          <p className="details__price">${product.price} CAD</p>
          <button className="details__button"> Purchase </button>
        </div>

        <form className="details__form" onSubmit={submitHandler}>
          <div className="details__fields">
            <h4 className="details__subtitle">Leave a review</h4>
            <FormField
              htmlFor="name"
              type="text"
              name="name"
              placeholder="Add your name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <FormField
              className="formfield__textfield--large"
              htmlFor="review"
              type="text"
              name="content"
              placeholder="Write your review here..."
              value={formData.content}
              onChange={handleInputChange}
            />
          </div>
          <div className="details__rating">
            <Rating
              name="rating"
              value={parseInt(product.rating)}
              onChange={handleRatingChange}
            />
          </div>
          <button type="submit" name="submit" className="details__post">
            Post
          </button>
        </form>

        <div className="details__reviews">
          <div className="details__reviews-block">
            <h4 className="details__subtitle"> Reviews </h4>
            <ReviewCounter reviews={review} />
          </div>
          <ul className="details__review-list">
            {review &&
              review.map((review) => (
                <Review
                  key={review.id}
                  id={review.id}
                  name={review.name}
                  review={review.content}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
