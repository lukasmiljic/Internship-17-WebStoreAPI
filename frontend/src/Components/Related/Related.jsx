import { useEffect, useState } from "react";
import classes from "./Related.module.css";
import fetchProducts from "../../Data/FetchProducts";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { Link } from "react-router-dom";

const Related = ({ category, id }) => {
  console.log(id);
  let [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const targetProducts = await fetchProducts(`category/${category}`);
        const removeDuplicate = targetProducts.filter(
          (product) => product.id !== id
        );
        setProducts(removeDuplicate);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <h2 className={classes.title}>Related Products</h2>
      {products && (
        <div className={classes.productList}>
          {products &&
            products.map((product, index) => (
              <p key={index}>
                <Link to={`/product/${product.id}`}>
                  <ProductCard {...product} />
                </Link>
              </p>
            ))}
        </div>
      )}
    </>
  );
};

export default Related;
