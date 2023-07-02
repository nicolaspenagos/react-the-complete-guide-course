import React, { useState } from "react";
import styles from "./Form.module.css";

function Form({calculateHandler}) {

  const [userInput, setUserInput] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  const inputChangeHandler = (property, event) => {
    setUserInput((prevState) => ({
      ...prevState,
      [property]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    calculateHandler(userInput);
  };

  const reset = () => {
    setUserInput({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
    calculateHandler(null);
  }

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
            onChange={(event) => inputChangeHandler("current-savings", event)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
            onChange={(event) => inputChangeHandler("expected-return", event)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={userInput["duration"]}
            type="number"
            id="duration"
            onChange={(event) => inputChangeHandler("duration", event)}
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button type="reset" className={styles["buttonAlt"]} onClick={reset}>
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
