import "./ProductDetails.scss";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FormField from "../FormField/FormField";

function ProductDetails() {
  const API_URL = import.meta.env.VITE_LOCALHOST;
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    image: "",
  });
  //   const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    async function getProducts() {
      try {
        const resp = await axios.get(
          `http://localhost:8080/api/products/${id}`
        );
        setProduct(resp.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    getProducts();
  }, []);

  const imagePath = `../public/product-images/${product.image}`;

  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  return (
    <div className="details">
      <div className="details__product">
        <img className="details__image" src={imagePath} alt={product.name} />
        <div className="details__info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="details__price">${product.price} CAD</p>
          <button className="details__button"> Purchase </button>
        </div>
        <form className="details__form">
          <div className="details__fields">
            <h4 className="details__subtitle">Leave a review</h4>
            <FormField
              htmlFor="name"
              type="text"
              name="name"
              placeholder="Add your name"
              // value=""
              // onChange={onChange}
            />
            <FormField
              className="formfield--large"
              htmlFor="review"
              type="text"
              name="review"
              placeholder="Write your review here..."
              // value=""
              // onChange={onChange}
            />
            <div></div>
            <Rating
              name="product-rating"
              value={parseInt(product.rating)}
              onChange={handleRatingChange}
            />
          </div>
          <button className="details__post">Post</button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;
