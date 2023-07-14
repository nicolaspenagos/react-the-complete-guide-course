import React from "react";
import classes from "./Checkout.module.css";
import useInput from "../hooks/use-input";

const isEmpty = (value) => value.trim() !== "";

const getValidationClasses = (hasError) =>
  hasError ? `${classes.control} ${classes.invalid}` : classes.control;

const Checkout = (props) => {
  const {
    value: name,
    hasError: nameHasError,
    isValid: isNameValid,
    onChangeInputHanlder: onNameChangeHandler,
    onBlurHandler: onNameBlurHandler,
    clearInput: clearName,
  } = useInput(isEmpty);

  const {
    value: street,
    hasError: streetHasError,
    isValid: isSteetValid,
    onChangeInputHanlder: onStreetChangeHandler,
    onBlurHandler: onStreetBlurHandler,
    clearInput: clearStreet,
  } = useInput(isEmpty);

  const {
    value: postal,
    hasError: postalHasError,
    isValid: isPostalValid,
    onChangeInputHanlder: onPostalChangeHandler,
    onBlurHandler: onPostalBlurHandler,
    clearInput: clearPostal,
  } = useInput(isEmpty);

  const {
    value: city,
    hasError: cityHasError,
    isValid: isCityValid,
    onChangeInputHanlder: onCityChangeHandler,
    onBlurHandler: onCityBlurHandler,
    clearInput: clearCity,
  } = useInput(isEmpty);

  const isFormValid =
    isNameValid && isCityValid && isSteetValid && isPostalValid;

  const onSubmitHanlder = (event) => {
    event.preventDefault();

    if (isFormValid) {
      props.onConfirm({ name, street, postal, city });
      clearCity();
      clearName();
      clearPostal();
      clearStreet();
    }
  };

  return (
    <form className={classes.form} onSubmit={onSubmitHanlder}>
      <div className={getValidationClasses(nameHasError)}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChangeHandler}
          onBlur={onNameBlurHandler}
        />
        {nameHasError && <p>Please enter a valid name!</p>}
      </div>
      <div className={getValidationClasses(streetHasError)}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={onStreetChangeHandler}
          onBlur={onStreetBlurHandler}
        />
        {streetHasError && <p>Please enter a valid street!</p>}
      </div>
      <div className={getValidationClasses(postalHasError)}>
        <label htmlFor="postal-code">Postal code</label>
        <input
          type="text"
          id="postal-code"
          value={postal}
          onChange={onPostalChangeHandler}
          onBlur={onPostalBlurHandler}
        />
        {postalHasError && <p>Please enter a valid postal code!</p>}
      </div>
      <div className={getValidationClasses(cityHasError)}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={onCityChangeHandler}
          onBlur={onCityBlurHandler}
        />
        {cityHasError && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>

        <button
          disabled={!isFormValid}
          className={`${classes.submit} ${isFormValid ? "" : classes.disabled}`}
          type="submit"
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
