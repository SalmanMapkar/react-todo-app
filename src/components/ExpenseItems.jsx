import ExpenseItem from "./ExpenseItem";
import "./ExpenseItems.css";
import Card from "./Card";

function ExpenseItems(props) {
  return (
    <Card className="expense-items">
      {props.ExpenseItems.map((expenseItem) => (
        <ExpenseItem key={expenseItem.id} ExpenseItem={expenseItem} />
      ))}
    </Card>
  );
}

export default ExpenseItems;
