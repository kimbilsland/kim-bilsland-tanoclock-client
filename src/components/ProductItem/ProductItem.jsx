import "./ProductItem.scss";
import { Rating } from "@mui/material";

function ProductItem({ name, price, image, rating }) {

const imagePath=`public/product-images/${image}`

  return (
    <>
    <div className="product">
      <img className="product__image" src={imagePath} alt={name}/>
      <div className="product__info">
        <p className="product__name">{name}</p>
        <h4>${price} CAD</h4>
        <Rating name="product-rating" value={parseInt(rating)} size="small" readOnly />
      </div>
      </div>
    </>
  );
}

export default ProductItem;