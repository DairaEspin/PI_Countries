import { useEffect, useState } from "react";
import { getActivity } from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FilterActivity from "../Filtered/Filter";
import style from "./Activity.module.css";

export default function Activity() {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  console.log("estado", activities);
  const [activityFilter, setActivityFilter] = useState(""); // Estado local para almacenar el filtro
  const [error, setError] = useState(null);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setError(null); // Restablece el estado de error cuando se cambia el filtro
    setNoResults(false); // Restablece el estado noResults cuando se cambia el filtro
    dispatch(getActivity(activityFilter))
      .then((response) => {
        if (!response || response.length === 0) {
          setNoResults(true);
        }
      })
      .catch((error) => {
        if (error.response && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError("Ocurrió un error al buscar actividades.");
        }
      });
  }, [activityFilter, dispatch]);

  return (
    <div className={style.contenedor}>
      <div className={style.linkform}>
        <Link className={style.link} to="/create_activity">
          <h3>CREATE NEW ACTIVITY</h3>
        </Link>
      </div>
      <FilterActivity setActivityFilter={setActivityFilter} />
      {noResults ? (
        <div>
          <p className={style.alert}>
            NOT found Activity.
          </p>
          <button
            className={style.btnalert}
            onClick={() => setNoResults(false)}
          >
            Close
          </button>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        activities.map((activity, index) => (
          <div key={index} className={style.activity}>
            <p className={style.tipo}>Type of Activity: {activity.name}</p>
            <p className={style.tipo}>Difficulty: {activity.difficulty}</p>
            <p className={style.tipo}>
              Hours (Time): {activity.duration}
            </p>
            <p className={style.tipo}>Season: {activity.season}</p>
            <p className={style.tipo}>Country: {activity.pais.join(", ")}</p>
          </div>
        ))
      )}
      <div className={style.linkhome}>
        <Link className={style.link} to="/home">
          <h3>Back home</h3>
        </Link>
      </div>
    </div>
  );
}