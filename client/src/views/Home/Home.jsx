import { useState } from "react";
import Countries from "../../Components/Countries/Countries";
import Nav from "../../components/Nav/NavBar";
import styles from "./Home.module.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar la búsqueda
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className={styles.background}>
      <Nav onSearch={handleSearch} /> {/* Pasa la función de búsqueda */}
      <Countries searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}