import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <h1 className={classes.title}>
      <span className={classes.titleColor}>Web</span>
      Shop
    </h1>
  );
};

export default Logo;
