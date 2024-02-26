import Country from "../Country/Country";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { getAllCountry, getCountryByName } from "../../redux/Actions";
import Pagination from "../Pagination/Pagintaion";
import style from "./Countries.module.css";

export default function Countries({ searchTerm, setSearchTerm }) {
  const dispatch = useDispatch();
  const allCountry = useSelector((state) => state.allCountry);
  const continentFilter = useSelector((state) => state.continentFilter);
  const orderFilter = useSelector((state) => state.orderFilter);
  const populationOrder = useSelector((state) => state.populationOrder);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNoResults, setShowNoResults] = useState(false);
  let filteredCountries = [];
  const perPage = 10;

  // //Busca los países por Searchbar

  useEffect(() => {
    setCurrentPage(1);
    if (searchTerm) {
      const filteredCountries = allCountry.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filteredCountries.length === 0) {
        setShowNoResults(true);
      } else {
        setShowNoResults(false);
        dispatch(getCountryByName(searchTerm));
      }
    } else {
      setShowNoResults(false);
      dispatch(getAllCountry());
    }
  }, [dispatch, searchTerm, continentFilter, orderFilter, populationOrder]);

  // Filtra los países en función del término de búsqueda y el continente seleccionado
  filteredCountries = allCountry.filter((country) => {
    const nameMatch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const continentMatch =
      continentFilter && continentFilter.continente
        ? country.continente
            .toLowerCase()
            .includes(continentFilter.continente.toLowerCase())
        : true; // Si no se ha seleccionado un continente, no aplicamos filtro por continente

    return nameMatch && continentMatch;
  });

  //Filtro por alfabeto
  if (orderFilter === "A-Z") {
    filteredCountries.sort((a, z) => a.name.localeCompare(z.name));
  } else if (orderFilter === "Z-A") {
    filteredCountries.sort((a, z) => z.name.localeCompare(a.name));
  }

  // Filtro por población
  if (populationOrder === "Ascendente") {
    filteredCountries.sort((a, z) => z.población - a.población);
  } else if (populationOrder === "Descendente") {
    filteredCountries.sort((a, z) => a.población - z.población);
  }

  // Calcula el índice de inicio en función de la página actual
  const startIndex = (currentPage - 1) * perPage;

  // Obtiene los países para la página actual
  const currentCountries = filteredCountries.slice(
    startIndex,
    startIndex + perPage
  );

  const totalPages = Math.ceil(filteredCountries.length / perPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleCerrar = () => {
    setShowNoResults(false);
    setSearchTerm("");
  };
  return (
    <div>
      {showNoResults && (
        <div className={style.alert}>
          NOT FOUND RESULTS.
          <button className={style.btnalert} onClick={handleCerrar}>
            Close
          </button>
        </div>
      )}
      <div className={style.countries}>
        {showNoResults ? (
          <span></span>
        ) : (
          filteredCountries.length > 0 &&
          currentCountries.map((coun, index) => (
            <Country
              key={index}
              id={coun.id}
              name={coun.name}
              continente={coun.continente}
              imagen={coun.imagen}
            />
          ))
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
      />
    </div>
  );
}