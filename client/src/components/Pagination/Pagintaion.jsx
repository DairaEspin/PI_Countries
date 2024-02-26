import React from "react";
import style from "./Pagination.module.css";

export default function Pagination({
  currentPage,
  totalPages,
  goToPrevPage,
  goToNextPage,
}) {
  return (
    <div className={style.contenedor}>
      <button
        className={style.btn}
        onClick={goToPrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <p className={style.pagina}>
        Page {currentPage} of {totalPages}
      </p>
      <button
        className={style.btn}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}