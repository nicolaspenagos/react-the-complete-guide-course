import React from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import './ExpensesList.css';
function ExpensesList({ expensesList }) {
  return (
    <Card className="expenses-list">
      {expensesList.map((expense, index) => (
        <ExpenseItem expense={expense} key={index}/>
      ))}
    </Card>
  );
}

export default ExpensesList;
