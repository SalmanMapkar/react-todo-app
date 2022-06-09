import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const ClickMe__OnClickHandler = () => {
    console.log("Clicked!!!");
  };

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.ExpenseItem.date} />
      <div className="expense-item__description">
        <h2>{props.ExpenseItem.name}</h2>
        <div className="expense-item__price">{props.ExpenseItem.price}</div>
        <button onClick={ClickMe__OnClickHandler}>Click me</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
