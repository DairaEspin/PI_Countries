import { useEffect } from "react";
import { getActivity, getId } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.id);
  const navigate = useNavigate();

  useEffect(() => {
    if (countryDetail && countryDetail.CountryId) {
      const countryId = countryDetail.CountryId;
      dispatch(getActivity(countryId));
      dispatch(getId(id));
    }
  }, [countryDetail, dispatch, id]);

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
            className={style.image}
            src={countryDetail.image}
            alt="Bandera del país"
          />
         <h2 className={style.id}>ID: {countryDetail.id}</h2>
          <h2 className={style.name}>Name: {countryDetail.name}</h2>
          <h2 className={style.capital}>Capital: {countryDetail.capital}</h2>
          <h2 className={style.subregion}>Subregion: {countryDetail.subregion}</h2>
          <h2 className={style.area}>Area: {countryDetail.area}</h2>
          <h2 className={style.population}>Population: {countryDetail.population}</h2>
          <h2 className={style.continent}>Continent: {countryDetail.continent}{" "}</h2>
        
          <div className={style.act}>
            {filteredActivities.map((activity, index) => (
              <>
                <h3 key={index}>Activities</h3>
                <ul>
                  <li>Name: {activity.name}</li>
                  <li>Difficulty: {activity.difficulty}</li>
                  <li>Hours (Time): {activity.duration}</li>
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
              Back Home
            </Link>
          </h5>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}