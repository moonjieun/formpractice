import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = ({ inputValue, setInputValue }) => {
  const handleChange = (e) => {
    setInputValue(parseInt(e.target.value));
  };
  const getPriceValue = (inputValue) => {
    if (inputValue === 100) {
      return `${inputValue}`;
    } else {
      return `${inputValue} - ${inputValue + 10}`;
    }
  };
  return (
    <div>
      <p>가격대: {getPriceValue(inputValue)}</p>
      <input
        id="pi_input"
        type="range"
        min="0"
        max="100"
        step="10"
        list="markers"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default ExpensesFilter;
