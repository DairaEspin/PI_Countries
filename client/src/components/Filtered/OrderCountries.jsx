import { useDispatch, useSelector } from "react-redux";
import { orderCountry } from "../../Redux/Actions";
import style from "./FilterContinent.module.css";

export default function OrderCountries() {
  const dispatch = useDispatch();
  const orderFilter = useSelector((state) => state.orderFilter);

  const handleOrderByName = (event) => {
    dispatch(orderCountry(event.target.value));
  };

  // Restablece el filtro
  const handleResetFilter = () => {
    dispatch(orderCountry(""));
  };

  return (
    <div className={style.contenedor}>
      <label className={style.label}>Order Alphabetically:</label>
      <select
        className={style.input}
        value={orderFilter || ""}
        onChange={handleOrderByName}
      >
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <button className={style.boton} onClick={handleResetFilter}>
        Clean
      </button>
    </div>
  );
}