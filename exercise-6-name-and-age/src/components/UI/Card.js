import React from 'react';
import styles from './Card.module.css';

function Card(props) {
  return (
    <div className={`${styles.card} ${(props.shadow)?styles.shadow:''}`}>
        {props.children}
    </div>
  )
}

export default Card;