import React from "react";
import styles from "./ErrorModal.module.css";


function ErrorModal({ onCloseModal }) {
  return (
    <div
      className={styles.backdrop}
      onClick={(event) => {
        event.stopPropagation();
        onCloseModal();
      }}
    >
      <div className={styles.modal}>
        <header>
          <h2>Invalid Input</h2>
        </header>
        <p>Please enter a valid name and age (non-empty-values)</p>
        <button
          onClick={(event) => {
            onCloseModal();
          }}
        >
          Okay
        </button>
      </div>
    </div>
  );
}

export default ErrorModal;
