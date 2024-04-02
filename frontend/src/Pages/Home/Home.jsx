import Logo from "../../Components/Logo";
import SearchBar from "../../Components/SearchBar/SearchBar";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <SearchBar />
    </div>
  );
};

export default Home;
