import React, { useState } from "react";
import "./calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e, operation) => {
    e.preventDefault();
    let no1 = parseFloat(num1);
    let no2 = parseFloat(num2);
    let res;
    switch (operation) {
      case "add":
        res = no1 + no2;
        break;
      case "sub":
        res = no1 - no2;
        break;
      case "mul":
        res = no1 * no2;
        break;
      case "div":
        res = no1 / no2;
        break;
      default:
        res = "Invalid Input";
        break;
    }
    setResult(res);
  };

  return (
    <div>
      <div className="converter-container">
        <h1>Calculator</h1>
        <form>
          <label htmlFor="num1">Enter Number 1:</label>
          <input
            type="number"
            placeholder="Enter 1st Number"
            id="num1"
            required
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <label htmlFor="num2">Enter Number 2:</label>
          <input
            type="number"
            placeholder="Enter 2nd Number"
            id="num2"
            required
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
          <button onClick={(e) => handleSubmit(e, "add")}>Add</button>
          <button onClick={(e) => handleSubmit(e, "sub")}>Sub</button>
          <button onClick={(e) => handleSubmit(e, "mul")}>Mul</button>
          <button onClick={(e) => handleSubmit(e, "div")}>Div</button>

          <div className="result" id="result">
            Result: {result}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
