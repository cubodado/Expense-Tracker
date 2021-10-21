import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 11, 2);
  const expenseTitle = "Coffee";
  const expenseAmount = "4";

  return (
    <div className="expense-item">
      <div>{ expenseDate.toISOString() }</div>
      <div className="expense-item__description">
        <h2>{ expenseTitle }</h2>
        <div className="expense-item__price">${ expenseAmount }</div>
      </div>
    </div>
  );
}

export default ExpenseItem;