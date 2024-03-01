import { useDispatch, useSelector } from "react-redux";
import { filterContinent } from "../../Redux/Actions";
import style from "./FilterContinent.module.css";
import { useState } from "react";

export default function FilterContinent() {
  const dispatch = useDispatch();
  const continentFilter = useSelector(
    (state) => state.continentFilter.continent
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleContinentChange = (event) => {
    dispatch(filterContinent(event.target.value));
    setCurrentPage(1);
  };

  // Restablece el filtro
  const handleResetFilter = () => {
    dispatch(filterContinent(""));
  };

  return (
    <div className={style.contenedor}>
      <label className={style.label}>Filter of Continent:</label>
      <select
        className={style.input}
        value={continentFilter || ""}
        onChange={handleContinentChange}
      >
        <option value="">ALL</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Antarctica">Antarctica</option>
      </select>
      <button className={style.boton} onClick={handleResetFilter}>
        Clean
      </button>
    </div>
  );
}