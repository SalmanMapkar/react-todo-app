import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
<<<<<<< HEAD

function ExpenseItems(props) {
  return (
    <div className="expense-items">
      {props.ExpenseItems.map((expenseItem) => (
        <ExpenseItem key={expenseItem.id} ExpenseItem={expenseItem} />
      ))}
    </div>
=======
import Card from "./Card";

function ExpenseItems(props) {
  return (
    <Card className="expense-items">
      {props.ExpenseItems.map((expenseItem) => (
        <ExpenseItem key={expenseItem.id} ExpenseItem={expenseItem} />
      ))}
    </Card>
>>>>>>> 68046a7
  );
}

export default ExpenseItems;
