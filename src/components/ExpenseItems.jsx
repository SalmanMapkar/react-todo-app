import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  return (
    <div className="expense-items">
      {props.ExpenseItems.map((expenseItem) => (
        <ExpenseItem key={expenseItem.id} ExpenseItem={expenseItem} />
      ))}
    </div>
  );
}

export default ExpenseItems;
