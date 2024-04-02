import classes from "./ProductCard.module.css";

const ProductCard = (props) => {
  const { title, price, image } = props;

  return (
    <div className={classes.productCard}>
      <div className={classes.wrapper}>
        <img className={classes.productImage} src={image} alt={title} />
        <h3>{title}</h3>
        <p className={classes.price}>{price} &euro;</p>
      </div>
    </div>
  );
};

export default ProductCard;
