import { useEffect } from "react";
import { getActivity, getId } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.detail);
  const navigate = useNavigate();

  useEffect(() => {
    const countryId = countryDetail.CountryId;
    dispatch(getActivity(countryId));
    dispatch(getId(id));
  }, [countryDetail.CountryId, dispatch, id]);

  const filteredActivities = countryDetail.Activities;

  const handleNavigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className={style.contenedor}>
      {countryDetail.name ? (
        <div>
          <img
            className={style.imag}
            src={countryDetail.imagen}
            alt="Bandera del país"
          />
          <h2 className={style.name}>{countryDetail.name}</h2>
          <h2 className={style.capital}>Capital: {countryDetail.capital}</h2>
          <h2 className={style.poblacion}>
            Población: {countryDetail.población}
          </h2>
          <h2 className={style.continente}>
            Continente: {countryDetail.continente}{" "}
          </h2>
          <h2 className={style.preg}>
            <a
              className={style.link}
              href={countryDetail.mapa}
              target="_blank"
              rel="noopener noreferrer"
            >
              Miralo en el mapa
            </a>
          </h2>
          <div className={style.act}>
            {filteredActivities.map((activity, index) => (
              <>
                <h3 key={index}>Actividades</h3>
                <ul>
                  <li>Name: {activity.nombre}</li>
                  <li>Difficulty: {activity.dificultad}</li>
                  <li>Hours (Time): {activity.duracionHoras}</li>
                  <li>Season: {activity.temporada}</li>
                </ul>
              </>
            ))}
          </div>
          <h5>
            <Link
              className={style.home}
              to="/home"
              onClick={handleNavigateToHome}
            >
              Volver
            </Link>
          </h5>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}