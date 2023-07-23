import React, { useState } from "react";

import styles from "./PaymentForm.module.css";

const PaymentForm = ({ getPaymentFormData }) => {
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  const inputTextHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    getPaymentFormData(objectState);
    // console.log(objectState);

    setObjectState({
      //폼 데이터 보내고 값 비어주기 위함
      name: "",
      price: 0,
      today: new Date(),
    });
  };
  console.log("여기 폼", objectState.name);
  return (
    <div className={styles.newPayment}>
      <form onSubmit={buttonSubmitHander}>
        <div className={styles.newPaymentControls}>
          <div
            className={`${styles.newPaymentControl} ${
              objectState.name === "" && styles.isTrue
            }`}
          >
            <label>이름</label>
            <input
              type="text"
              onChange={inputTextHandler}
              value={objectState.name}
            />
          </div>
          <div className={styles.newPaymentControl}>
            <label>금액</label>
            <input
              type="number"
              min="1"
              step="1"
              onChange={inputPriceHandler}
              value={objectState.price}
            />
          </div>
          <div className={styles.newPaymentControl}>
            <label>날짜</label>
            <input
              type="date"
              min="2019-01-01"
              max="2023-12-31"
              onChange={inputTodayHandler}
              value={objectState.today}
            />
          </div>
        </div>
        <div className={styles.newPaymentControlActions}>
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
