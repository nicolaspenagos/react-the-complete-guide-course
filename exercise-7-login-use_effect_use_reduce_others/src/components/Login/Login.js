import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes(`@`) };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes(`@`) };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {


  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputRef = useRef();
  const passwrodInputRef = useRef();

  const [emailState, disptachEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, disptachPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const ctx = useContext(AuthContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log("Chech validity");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    return () => {
      clearTimeout(timerId);
      console.log("CLEAN UP");
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    disptachEmail({ type: "USER_INPUT", val: event.target.value });
    /*
    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    )*/
  };
  const passwordChangeHandler = (event) => {
    disptachPassword({ type: "USER_INPUT", val: event.target.value });
    /*
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );*/
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    disptachEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    disptachPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
      emailInputRef.current.focus();
    }else{
      passwrodInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwrodInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
