import "./App.css";
import ExpenseItems from "./components/Expense/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const state = {
    expense_items: [
      {
        id: 1,
        date: new Date(2022, 10, 3),
        name: "Netflix",
        price: "$200",
      },
      {
        id: 2,
        date: new Date(2022, 10, 3),
        name: "Netflix",
        price: "$200",
      },
      {
        id: 3,
        date: new Date(2022, 10, 3),
        name: "Netflix",
        price: "$200",
      },
    ],
  };
  return (
    <div className="App">
      <NewExpense />
      <ExpenseItems ExpenseItems={state.expense_items} />
    </div>
  );
}

export default App;
