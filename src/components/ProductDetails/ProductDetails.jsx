import "./ProductDetails.scss";
import { Typography } from "@mui/material";
import { Rating } from "@mui/material";
import { Button } from  "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const API_URL = import.meta.env.VITE_LOCALHOST;
    const { id } = useParams(); 

    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        rating: 0,
        image: ""
    });
//   const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    async function getProducts() {
      try {
        const resp = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(resp.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    getProducts();
  }, []);
  
  const imagePath=`../public/product-images/${product.image}`


  const handleRatingChange = (event, newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <img className="product__image" src={imagePath} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>$ {product.price}</p>
        <Typography component="legend">Rating:</Typography>
        <Rating
          name="product-rating"
          value={parseInt(product.rating)}
          onChange={handleRatingChange}
        />
      </div>

      <form>
  <div className="formfield">
    <label className="formfield__label" htmlFor="name">
      Name
    </label>
    <input
      className="formfield__textfield"
      type="text"
      name="name"
      placeholder="Add your name"
    />
  </div>
  <div className="formfield">
    <label className="formfield__label" htmlFor="review">
      Review
    </label>
    <input
      className="formfield__textfield"
      type="text"
      name="review"
      placeholder="Write your review here..."
    />
  </div>
  <Button>Post</Button>
</form>

    </>
  );
}

export default ProductDetails;




