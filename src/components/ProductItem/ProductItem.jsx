import "./ProductItem.scss";

function VideoItem({ title, price, image, rating }) {

  return (
    <>
      <img src={image} alt={title}/>
      <div>
        <h3>{title}</h3>
        <p>{rating}</p>
        <p>$ {price}</p>
      </div>
    </>
  );
}

export default VideoItem;
