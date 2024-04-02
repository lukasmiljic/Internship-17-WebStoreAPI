import ProductList from "../../Components/ProductList/ProductList";
import Header from "../../Components/Header";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <div>
      <Header />
      <div className={classes.products}>
        <ProductList />
      </div>
    </div>
  );
};
export default Products;
