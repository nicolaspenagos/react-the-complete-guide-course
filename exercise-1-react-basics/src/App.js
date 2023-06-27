import React, { useState } from 'react';
import ExpensesList from "./components/Expense/ExpensesList/ExpensesList";
import NewExpense from './components/NewExpense/NewExpense/NewExpense';

// Alternative way to write a function
const App = () => {

  const expensesList = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(expensesList);

  const addExpenseHandler = expense => {
  
    setExpenses((prevState)=>[...prevState, expense]);
  }

  // The under the hood / behind the scenes react stuff

  /*
  return React.createElement(
    'div',
    {}, // Atributtes / Props
    React.createElement('h2', {}, "Let's get started!"),
    React.createElement(ExpensesList, {expensesList:expenses})

  );*/

  // This why in the past we needed always import Reac from 'react' and 
  // also why we always need a unique wrapper element (we can't return more
  // than one thing)

  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <ExpensesList expensesList={expenses}/>
    </div>
  );
}

export default App;
