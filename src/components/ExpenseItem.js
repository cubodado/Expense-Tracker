import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>Date : Dec 1st 2021</div>
      <div className="expense-item__description">
        <h2>Title : Coffee</h2>
        <div className="expense-item__price">Amount : $4</div>
      </div>
    </div>
  );
}

export default ExpenseItem;