import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "./ErrorModal";

const emptyData = { username: "", age: "" };
const USERNAME_KEY = "username";
const AGE_KEY = "age";

function AddUser({ onAddUser }) {
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
    return userData.username.trim() !== "" && userData.age.trim() !== "";
  };

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
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
          />

          <label htmlFor={AGE_KEY}>Age (years)</label>
          <input
            id={AGE_KEY}
            onChange={(event) => {
              onChangeHandler(AGE_KEY, event.target.value);
            }}
            value={userData.age}
            type="number"
            min="0"
            step="1"
          />

          <button type="submit">Add user</button>
        </form>
      </Card>
      {showModal&&<ErrorModal onCloseModal={closeModal}/>}
    </>
  );
}

export default AddUser;
