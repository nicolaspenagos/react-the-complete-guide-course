import React, { useState } from 'react';
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../Card/Card";
import './ExpensesList.css';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';

function ExpensesList({ expensesList }) {

  const [selectedYear, setSelectedYear] = useState(2019);

  const filteredList = expensesList.filter(expense=>expense.date.getFullYear().toString()===selectedYear);

  const hanldeOnSelectedYearChanged = (value) => {
    setSelectedYear(value);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectedYearChanged={hanldeOnSelectedYearChanged} selectedYear={selectedYear}/>
      <ul className="expenses-list">
        {filteredList.length === 0 ? <h2 className='expenses-list__fallback'>No Espenses found.</h2>:filteredList.map(expense => <ExpenseItem expense={expense} key={expense.id}/>)}
      </ul>
    </Card>
  );
}

export default ExpensesList;
