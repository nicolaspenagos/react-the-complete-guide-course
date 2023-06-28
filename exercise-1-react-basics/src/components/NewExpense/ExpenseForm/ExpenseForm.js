import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");


  const handlerMapper = {
    title: (value) => {
      setEnteredTitle(value);
    },
    amount: (value) => {
      setEnteredAmount(value);
    },
    date: (value) => {
      setEnteredDate(value);
    },
  };

  const handleOnChange = (value, property) => {
    handlerMapper[property](value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSavedExpenseData(expenseData);

    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => handleOnChange(event.target.value, "title")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) => handleOnChange(event.target.value, "amount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={(event) => handleOnChange(event.target.value, "date")}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>
        <div className="new-expense__actions">
          <button onClick={()=>props.onCancel(false)}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

/*
  const [userInput, setUserInput] = useState({
    enteredTitle:'',
    enteredAmount:'',
    enteredDate:''
  });
  
  const titleChangeHandler = (event) => {
    
    setUserInput((prevState)=>{
        return {
            ...prevState,
            enteredTitle:event.target.value
        }
    });
  };

  const amountChangeHandler = (event) => {
    
    setUserInput({
        ...userInput,
        enteredAmount:event.target.value
    });
  };

  const dateChangedHander = (event) => {
    
    setUserInput({
        ...userInput,
        enteredDate:event.target.value
    });
  }*/
