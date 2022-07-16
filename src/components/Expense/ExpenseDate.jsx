import "./css/ExpenseDate.css";
import React from "react";

function ExpenseDate(props) {
  const expenseDay = props.expenseDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const expenseMonth = props.expenseDate.toLocaleString("en-US", {
    month: "long",
  });
  const expenseYear = props.expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
      <div className="expense-date__day">{expenseDay}</div>
    </div>
  );
}

export default ExpenseDate;
