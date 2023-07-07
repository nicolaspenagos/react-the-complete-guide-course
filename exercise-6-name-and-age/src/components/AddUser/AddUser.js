import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const emptyData = { username: "", age: "" };
const USERNAME_KEY = "username";
const AGE_KEY = "age";

function AddUser({ onAddUser }) {

  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [userData, setUserData] = useState(emptyData);
  const [showModal, setShowModal] = useState(false);

  const onChangeHandler = (key, value) => {
    setUserData((prevUserData) => ({ ...prevUserData, [key]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (isValidData()) {
      onAddUser(userData);
      setUserData(emptyData);
    } else {
      setShowModal(true);
    }
  };

  const isValidData = () => {
    //return userData.username.trim() !== "" && userData.age.trim() !== "";
    return usernameInputRef.current.value.trim() !== "" && ageInputRef.current.value.trim() !== "";
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Wrapper>
      <Card shadow={true}>
        <h1 className={styles.title}>Create User</h1>
        <div className={styles.line} />
        <form className={styles.form} onSubmit={submitHandler}>
          <label htmlFor={USERNAME_KEY}>Username</label>
          <input
            id={USERNAME_KEY}
            onChange={(event) => {
              onChangeHandler(USERNAME_KEY, event.target.value);
            }}
            value={userData.username}
            type="text"
            ref={usernameInputRef}
          />

          <label htmlFor={AGE_KEY}>Age (years)</label>
          <input
            id={AGE_KEY}
            onChange={(event) => {
              onChangeHandler(AGE_KEY, event.target.value);
            }}
            value={userData.age}
            type="number"
            min="1"
            step="1"
            ref={ageInputRef}
          />

          <button type="submit">Add user</button>
        </form>
      </Card>

      {showModal && <ErrorModal onCloseModal={closeModal} />}
    </Wrapper>
  );
}

export default AddUser;
