import "./ProductItem.scss";
import { Rating } from "@mui/material";

function ProductItem({ name, price, image, rating }) {

const imagePath=`public/product-images/${image}`

  return (
    <>
    <div>
      <img className="product__image" src={imagePath} alt={name}/>
      <div>
        <h3>{name}</h3>
        <p>${price} CAD</p>
        <Rating name="product-rating" value={parseInt(rating)} size="small" readOnly />
      </div>
      </div>
    </>
  );
}

export default ProductItem;