import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNumber1, setNumber2, setResult } from "../features/counterSlice";

export default function Counter() {
  const number1 = useSelector((state) => state.counter.number1);
  const number2 = useSelector((state) => state.counter.number2);
  const result = useSelector((state) => state.counter.result);
  const dispatch = useDispatch();

  const [operator, setOperator] = useState("");

  const valueRef = useRef(null);

  useEffect(() => {
    if (operator && number1 && number2) {
      if (operator == "+") {
        dispatch(setResult(number1 + number2));
      } else if (operator == "-") {
        dispatch(setResult(number1 - number2));
      } else if (operator == "*") {
        dispatch(setResult(number1 * number2));
      } else if (operator == "/") {
        dispatch(setResult(number1 / number2));
      }
    }
  }, [operator, number1, number2, dispatch]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "number1") {
      dispatch(setNumber1(Number(value)));
    } else if (id === "number2") {
      dispatch(setNumber2(Number(value)));
    } else if (id === "operator") {
      setOperator(value);
    }
  };

  return (
    <div>
      <input
        type="number"
        id="number1"
        value={number1}
        onChange={handleChange}
      />
      <select id="operator" value={operator} onChange={handleChange}>
        <option value="">--Choise operator--</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        id="number2"
        value={number2}
        onChange={handleChange}
      />
      <span> = {result}</span>
    </div>
  );
}
