import "./ProductList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem"

function ProductList() {
  const API_URL = import.meta.env.VITE_LOCALHOST;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const resp = await axios.get(`${API_URL}/api/products`);
        setProducts(resp.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }

    getProducts();
  }, []);

  return (
    <div>
      <h1> Product Recommendations </h1>

      <div className="products">
        <h2> Sunscreen </h2>
        <ul className="products__scrolling-wrapper-flexbox">
          {products
            .filter((product) => product.category === "SPF")
            .map((product) => (
              <li className="product__item" key={product.id}>
                {/* <Link key={product.id} to={`/${product.id}`}> */}
                  <ProductItem
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                  />
                {/* </Link> */}
              </li>
            ))}
        </ul>
      </div>
      

      <div>
        <h2> Alternative-Tan Options </h2>
        <ul className="products__scrolling-wrapper-flexbox">
          {products
            .filter((product) => product.category === "Alternative-tanning")
            .map((product) => (
              <li key={product.id}>
                {/* <Link key={product.id} to={`/${product.id}`}> */}
                  <ProductItem
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                  />
                {/* </Link> */}
              </li>
            ))}
        </ul>
      </div>
    </div>   
  );
}

export default ProductList;
