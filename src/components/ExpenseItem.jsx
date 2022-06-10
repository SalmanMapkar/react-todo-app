import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.ExpenseItem.date} />
      <div className="expense-item__description">
        <h2>{props.ExpenseItem.name}</h2>
        <div className="expense-item__price">{props.ExpenseItem.price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
