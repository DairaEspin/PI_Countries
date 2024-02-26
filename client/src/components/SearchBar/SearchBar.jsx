import React, { useState } from "react";
import style from "./SearchBar.module.css";
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className={style.contendor}>
      <input
        className={style.input}
        type="text"
        placeholder="Enter Country"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className={style.boton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;