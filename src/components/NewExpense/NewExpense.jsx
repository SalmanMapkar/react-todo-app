import React from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./css/NewExpense.css";

const NewExpense = (props) => {
  const newExpenseDataHandler = enteredExpenseData => {
      const newExpenseData = {...enteredExpenseData}
      props.onSaveNewExpense(newExpenseData)
  }

  return (
    <Card className="new-expense">
      <ExpenseForm onSaveEnteredExpenseData={newExpenseDataHandler}/>
    </Card>
  );
};

export default NewExpense;
