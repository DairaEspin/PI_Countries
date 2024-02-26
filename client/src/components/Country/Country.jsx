import { Link } from "react-router-dom";
import style from "./Country.module.css";
export default function Country({
  id,
  name,
  image,
  continent,
  capital,
  population,
  activity,
}) {
  return (
    <div className={style.contenedor}>
      <Link className={style.link} to={`/Detail/${id}`}>
        <h2 className={style.name}>{name}</h2>
      </Link>
      <img className={style.img} src={image} alt="Flag of Country" />
      <h2 className={style.continent}> {continent} </h2>
      <h2 hidden>Capital: {capital}</h2>
      <h2 hidden>Population: {population}</h2>
      <h2 hidden>Activity: {activity}</h2>
    </div>
  );
}