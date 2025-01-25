import { Routes, Route } from "react-router-dom";
import "./App.css";
import Conversion from './Conversion.jsx'
import Calculator from './Calculator.jsx'
import Bmi from './Bmi.jsx'
import Demo from './Demo.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Demo/>} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/conversion" element={<Conversion />} />
      </Routes>
    </>
  );
}

export default App;
