import React from "react";
import { Link } from "react-router-dom";

import styles from "./Landing.module.css";
import landingTitulo from "../../assets/Landing.jpg";

function Landing() {
  return (
    <div className={styles.landingHome}>
      <div className={styles.buttonContainer}>
        <div>
          <img
            src={landingTitulo}
            alt="landingTitulo"
            className={styles.landingtitulo}
          />
        </div>
        <Link to="/home" className={styles.buttonDetalle}>
          Home
        </Link>
      </div>
    </div>
  );
}

export default Landing;