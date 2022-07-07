import React from "react";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";
import "./css/NewExpense.css";

const NewExpense = () => {
  return (
    <Card className="new-expense">
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
