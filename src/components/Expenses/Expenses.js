import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const fliterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filtered={filteredYear}
          onChangeFilter={fliterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem 
            key={ expense.id }
            title={ expense.title }
            amount={ expense.amount }
            date={ expense.date }
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
