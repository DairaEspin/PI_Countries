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
    if (countryDetail && countryDetail.CountryId) {
      const countryId = countryDetail.CountryId;
      dispatch(getActivity(countryId));
      dispatch(getId(id));
    }
  }, [countryDetail, dispatch, id]);

  const filteredActivities = countryDetail ? countryDetail.Activities : [];

  // useEffect(() => {
  //   const countryId = countryDetail.CountryId;
  //   dispatch(getActivity(countryId));
  //   dispatch(getId(id));
  // }, [countryDetail.CountryId, dispatch, id]);

  // const filteredActivities = countryDetail.Activities;

  const handleNavigateToHome = () => {
    navigate("/home");
  };

  return (
    <div className={style.contenedor}>
      {countryDetail.name ? (
        <div>
          <img
            className={style.image}
            src={countryDetail.image}
            alt="Bandera del país"
          />
          <h2 className={style.name}>{countryDetail.name}</h2>
          <h2 className={style.capital}>Capital: {countryDetail.capital}</h2>
          <h2 className={style.population}>
            Población: {countryDetail.population}
          </h2>
          <h2 className={style.continent}>
            Continente: {countryDetail.continent}{" "}
          </h2>
        
          <div className={style.act}>
            {filteredActivities.map((activity, index) => (
              <>
                <h3 key={index}>Activities</h3>
                <ul>
                  <li>Name: {activity.name}</li>
                  <li>Difficulty: {activity.difficulty}</li>
                  <li>Hours (Time): {activity.duracionHoras}</li>
                  <li>Season: {activity.season}</li>
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