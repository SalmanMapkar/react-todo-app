import ExpenseItem from "./ExpenseItem";
import "./css/ExpenseItems.css";
import Card from "../UI/Card";
import React, {useState} from "react";
import ExpensesFilter from "./ExpensesFilter";

function ExpenseItems(props) {
  const [filterYear, setFilterYear] = useState('');
  const saveExpensesFilterYear = year => {
    setFilterYear(year);
    console.log("From ExpenseItems.jsx => Year is "+year);
  }
  return (
    <Card className="expense-items">
    <ExpensesFilter onExpensesFilterChange={saveExpensesFilterYear} />
      {props.ExpenseItems.map((expenseItem) => (
        <ExpenseItem key={expenseItem.id} ExpenseItem={expenseItem} />
      ))}
    </Card>
  );
}

export default ExpenseItems;
