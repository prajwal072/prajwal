import React, { useState } from "react";
import "./bmi.css";
import { assets } from "./assets/imageIndex.js";

function Bmi() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const parseWeight = parseFloat(weight);
    const parseHeight = parseFloat(height);

    // Validate inputs
    if (isNaN(parseWeight) || parseWeight <= 0 || isNaN(parseHeight) || parseHeight <= 0) {
      setResult("Please enter valid positive numbers for weight and height.");
      setImage("");
      return;
    }

    // Correct BMI calculation
    const bmi = (parseWeight / (parseHeight * parseHeight)).toFixed(2);

    let message = "";
    let imgPath = "";

    if (bmi < 18.5) {
      message = `Your BMI is ${bmi}. You are underweight.`;
      imgPath = assets.underWeight;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = `Your BMI is ${bmi}. You are normal weight.`;
      imgPath = assets.normalWeight;
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = `Your BMI is ${bmi}. You are overweight.`;
      imgPath = assets.overWeight;
    } else {
      message = `Your BMI is ${bmi}. You are obese.`;
      imgPath = assets.obese;
    }

    setResult(message);
    setImage(imgPath);
  };

  return (
    <div>
      <div className="converter-container">
        <h1>BMI Calculator</h1>
        <form id="converterForm" onSubmit={handleSubmit}>
          <label htmlFor="weight">Enter Weight (kg):</label>
          <input
            type="number"
            placeholder="Enter weight"
            id="weight"
            required
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label htmlFor="height">Enter Height (m):</label>
          <input
            type="number"
            placeholder="Enter height (in meters)"
            id="height"
            required
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button type="submit">Calculate</button>
        </form>
        <div className="result">
          {result && <div>{result}</div>}
          {image && <img src={image} alt="BMI category" />}
        </div>
      </div>
    </div>
  );
}

export default Bmi;
