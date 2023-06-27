import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../Card/Card";

function ExpenseItem({ expense: props }) {
  const { date, title, amount } = props;

  // Use state always return an array with two values, first the variable and second
  // the function to change it

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
