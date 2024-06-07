import "./ProductItem.scss";

function VideoItem({ title, price, image, rating }) {

const imagePath=`public/product-images/${image}`


  return (
    <>
      <img className="product__image" src={imagePath} alt={title}/>
      <div>
        <h3>{title}</h3>
        <p>{rating}</p>
        <p>$ {price}</p>
      </div>
    </>
  );
}

export default VideoItem;