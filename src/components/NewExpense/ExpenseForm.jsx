import React from "react"

const ExpenseForm = () => 
{
    return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense_-controls">
                <label>Title</label>
                <input type="text" />
            </div>
            <div className="new-expense_-controls">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense_-controls">
                <label><Date></Date></label>
                <input type="date" />
            </div>
        </div>
        <div className="new-expense_-controls">
            <button className="new-expense__actions">Add Expense</button>        
        </div>
    </form>)
}

export default ExpenseForm;