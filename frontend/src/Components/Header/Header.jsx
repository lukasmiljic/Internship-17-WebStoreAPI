import SearchBar from "../../Components/SearchBar/SearchBar";
import Logo from "../../Components/Logo/Logo";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link className={classes.logo} to="/">
          <Logo />
        </Link>
        <SearchBar />
      </header>
      <hr />
    </>
  );
};

export default Header;
