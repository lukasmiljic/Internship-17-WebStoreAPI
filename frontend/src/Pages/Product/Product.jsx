import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchProducts from "../../Data/FetchProducts";
import Header from "../../Components/Header/Header";
import classes from "./Product.module.css";
import Related from "../../Components/Related";
// import { useNavigate } from "react-router-dom";

const Product = () => {
  let [product, setProduct] = useState(null);
  // const navigate = useNavigate();
  const productID = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const targetProducts = await fetchProducts(`${productID.productID}`);

        setProduct(targetProducts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [productID.productID]);

  return (
    <>
      <Header />
      {/* <button onClick={() => navigate(-1)}>
        <i class="fa-solid fa-chevron-left"></i>
      </button> */}

      {product && (
        <div className={classes.productMain}>
          <div className={classes.productCard}>
            <aside>
              <img
                className={classes.productImage}
                src={product.image}
                alt={product.title}
              />
            </aside>
            <main>
              <p className={classes.productTitle}>{product.title}</p>
              <p className={classes.productDescription}>
                {" "}
                {product.description}{" "}
              </p>
              <p className={classes.productPrice}>
                Price:{" "}
                <span className={classes.price}>{product.price} &euro;</span>
              </p>
              <button className={classes.btn}>
                <div className={classes.btnContent}>
                  Buy Now{" "}
                  <i
                    className={`fa-solid fa-cart-shopping ${classes.btnIcon}`}></i>
                </div>
              </button>
            </main>
          </div>
          <Related category={product.category} id={product.id} />
        </div>
      )}
    </>
  );
};

export default Product;
