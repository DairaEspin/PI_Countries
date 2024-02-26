import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FilterContinent from "../Filtered/FilterContinent";
import OrderCountries from "../Filtered/OrderCountries";
import OrderPopulation from "../Filtered/OrderPopulation";
import { Link } from "react-router-dom";
import style from "../Filtered/FilterContinent.module.css";

const Nav = ({ onSearch, searchTerm, setSearchTerm }) => {
  return (
    <nav>
      <SearchBar
        onSearch={onSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <FilterContinent />
      <OrderCountries />
      <OrderPopulation />
      <Link className={style.link} to="/activities">
        Search Activities
      </Link>
    </nav>
  );
};

export default Nav;