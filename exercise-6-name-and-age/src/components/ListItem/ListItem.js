import React from "react";
import styles from "./ListItem.module.css";

function ListItem({ user }) {
  return (
    <li className={styles.item}>
      <div className={styles.username}>{user.username}</div>
      <div>{user.age} years</div>
    </li>
  );
}

export default ListItem;
