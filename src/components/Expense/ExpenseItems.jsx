import ExpenseItem from "./ExpenseItem";
import "./css/ExpenseItems.css";
import Card from "../UI/Card";

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
