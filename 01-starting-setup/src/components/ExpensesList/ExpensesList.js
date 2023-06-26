import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './ExpensesList.css';
function ExpensesList({ expensesList }) {
  return (
    <div className="expense-list">
      {expensesList.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </div>
  );
}

export default ExpensesList;
