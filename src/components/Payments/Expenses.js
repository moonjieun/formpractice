import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  console.log(props.items);
  const [inputValue, setInputValue] = useState();

  const filteredExpenses = props.items.filter((expense) => {
    if (inputValue === 100) {
      return expense.amount >= inputValue;
    }
    return expense.amount >= inputValue && expense.amount < inputValue + 10;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter inputValue={inputValue} setInputValue={setInputValue} />
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <p>결제 목록이 없습니다.</p>
      )}
    </Card>
  );
};

export default Expenses;
