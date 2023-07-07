import React from "react";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Modal = ({ onCloseModal }) => {
  return (
    <>
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
      <div
        className={styles.backdrop}
        onClick={(event) => {
          event.stopPropagation();
          onCloseModal();
        }}
      ></div>
    </>
  );
};

function ErrorModal({ onCloseModal }) {
  return ReactDOM.createPortal(
    <Modal onCloseModal={onCloseModal} />,
    document.getElementById("overlay-root")
  );
}

export default ErrorModal;
