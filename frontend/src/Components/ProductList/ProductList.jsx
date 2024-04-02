import React, { useState, useEffect } from "react";
import fetchProducts from "../../Data/FetchProducts.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./ProductList.module.css";

const ProductsList = () => {
  const [productData, setProdcutData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  let { search } = useParams();
  if (!search) search = "";


  useEffect(() => {
    const fetchAndSetData = async () => {
      setIsLoading(true);

      try {
        const products = await fetchProducts("");
        const filteredProducts = products.filter((product) => {
          return search.toLowerCase() === ""
            ? product
            : product.title.toLowerCase().includes(search.toLowerCase());
        });
        setProdcutData(filteredProducts);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAndSetData();
  }, []);

  if (isLoading) {
    // <Loading />
    return <p>Loading...</p>;
  }

  if (error) {
    // <Error />
    return (
      <p>
        Something went wrong...
        <br /> Error: {error.message}
      </p>
    );
  }

  return (
    <div className={classes.productList}>
      {productData &&
        (productData.length === 0 ? (
          <p>No products found</p>
        ) : (
          productData.map((product, index) => (
            <p key={index}>
              <Link to={`/product/${product.id}`}>
                {" "}
                <ProductCard {...product} />{" "}
              </Link>
            </p>
          ))
        ))}
    </div>
  );
};

export default ProductsList;
