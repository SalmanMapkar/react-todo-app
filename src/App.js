import "./App.css";
import ExpenseItems from "./components/Expense/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {
  const [ expenses, setExpenses] = useState([
      {
        id: 1,
        date: new Date(2022, 10, 3),
        name: "Netflix",
        price: "200",
      },
      {
        id: 2,
        date: new Date(2022, 10, 3),
        name: "Netflix",
        price: "200",
      },
      {
        id: 3,
        date: new Date(2022, 10, 3),
        name: "Netflix",
        price: "200",
      },
    ])
  

  const addNewExpenseDataHandler = expense => {
    const tempExpenses = expenses.sort(function(a, b) { 
      return (a.id - b.id);
    });
    //console.log(tempExpenses)
    setExpenses((prevExpenses) => [...prevExpenses, {...expense, id: (tempExpenses[tempExpenses.length]+1)},])
    //console.log(expenses)
  };

  return (
    <div className="App">
      <NewExpense onSaveNewExpense={addNewExpenseDataHandler} />
      <ExpenseItems ExpenseItems={expenses} />
    </div>
  );
}

export default App;
