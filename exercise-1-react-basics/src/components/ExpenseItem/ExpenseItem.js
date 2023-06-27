import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../Card/Card';

function ExpenseItem({expense:props}) {
  
  const {date, title, amount} = props;

  const [actualTitle, setActualTitle] = useState(title); 
  // Use state always return an array with two values, first the variable and second 
  // the function to change it


  const changeTitleHandler = () => {
    setActualTitle('Updated!');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{actualTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={changeTitleHandler} >Change title</button>
    </Card>
  );
}

export default ExpenseItem;
