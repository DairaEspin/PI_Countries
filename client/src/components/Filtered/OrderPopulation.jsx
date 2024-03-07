import { useDispatch, useSelector } from "react-redux";
import { orderPopulation } from "../../redux/Actions";
import style from "./FilterContinent.module.css";

export default function OrderPopulation() {
  const dispatch = useDispatch();
  const populationOrder = useSelector((state) => state.populationOrder);

  const handlePopulationOrderChange = (event) => {
    dispatch(orderPopulation(event.target.value));
  };

  // Restablece el filtro
  const handleResetFilter = () => {
    dispatch(orderPopulation(""));
  };

  return (
    <div className={style.contenedor}>
      <label className={style.label}>Order Population:</label>
      <select
        className={style.input}
        value={populationOrder || ""}
        onChange={handlePopulationOrderChange}
      >
        <option value="Ascendent">Ascendent</option>
        <option value="Descendent">Descendent</option>
      </select>
      <button className={style.boton} onClick={handleResetFilter}>
        Clean
      </button>
    </div>
  );
}