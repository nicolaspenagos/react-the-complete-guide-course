import React from "react";
import styles from "./ListItem.module.css";

function ListItem({ user }) {
  return (
    <div className={styles.item}>
      <div className={styles.username}>{user.username}</div>
      <div>{user.age} years</div>
    </div>
  );
}

export default ListItem;
