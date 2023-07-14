import React from "react";
import useInputReducer, {
  CLEAR,
  INPUT_BLUR,
  VALUE_CHANGED,
} from "../hooks/use-input-reducer";

const isEmpty = (val) => val.trim() !== "";

const isValidEmail = (val) => {
  const enteredEmailParts = val.split("@");
  return (
    enteredEmailParts.length === 2 &&
    enteredEmailParts[0].trim() !== "" &&
    enteredEmailParts[1].trim() !== ""
  );
};

const getInputClasses = (hasError) => {
  return hasError ? "form-control invalid" : "form-control";
};

const BasicForm = (props) => {

  const {
    inputState: nameState,
    hasError: nameHasError,
    blurHandler: nameBlurHandler,
    valueChangeHandler: nameChangeHandler,
    resetInput: resetNameHandler,
  } = useInputReducer(isEmpty);

  const {
    inputState: lastnameState,
    hasError: lastnameHasError,
    blurHandler: lastnameBlurHandler,
    valueChangeHandler: lastnameChangeHandler,
    resetInput: resetLastnameHandler,
  } = useInputReducer(isEmpty);

  const {
    inputState: emailState,
    hasError: emailHasError,
    blurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    resetInput: resetEmailHandler,
  } = useInputReducer(isValidEmail);


  const submitFormHandler = (event) => {
    event.preventDefault();
    resetNameHandler();
    resetLastnameHandler();
    resetEmailHandler();
  };

  const isFormValid =
    nameState.isValid && emailState.isValid && lastnameState.isValid;

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={getInputClasses(nameHasError)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={nameState.value}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && <p className="error-text">Name must not be empty</p>}
        </div>
        <div className={getInputClasses(lastnameHasError)}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastnameChangeHandler}
            onBlur={lastnameBlurHandler}
            value={lastnameState.value}
          />
          {lastnameHasError && (
            <p className="error-text">The email is not valid</p>
          )}
        </div>
      </div>
      <div className={getInputClasses(emailHasError)}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailState.value}
        />
      </div>
      {emailHasError && <p className="error-text">Email is not valid</p>}


      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
