import React, { useState } from "react";

import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };


  return (
    <div className="new-expense">
      {showForm && <ExpenseForm onSavedExpenseData={saveExpenseDataHandler} onCancel={setShowForm}/>}
      {!showForm && <button onClick={()=>{setShowForm(true)}}>Add new expense</button>}
    </div>
  );
}

export default NewExpense;
