import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className={classes.SearchBar}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>
        <Link to={`/search/${search}`}>
          <i
            className={`fa-solid fa-magnifying-glass ${classes.searchIcon}`}></i>
        </Link>
      </button>
    </div>
  );
};

export default SearchBar;
