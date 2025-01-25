import React, { useState } from 'react';
import './conversion.css';

function Conversion() {
    const [km, setKm] = useState('');
    const [result, setResult] = useState('');

    const handleConversion = (e) => {
        e.preventDefault();

        const kmValue = parseFloat(km);
        if (isNaN(kmValue) || kmValue < 0) {
            setResult('Please enter a valid positive number.');
        } else {
            const miles = (kmValue * 0.62137).toFixed(2);
            setResult(`${kmValue} km is equal to ${miles} miles.`);
        }
    };

    return (
        <div className="converter-container">
            <h1>KM to Miles Converter</h1>
            <form onSubmit={handleConversion}>
                <label htmlFor="km">Enter Distance (in KM):</label>
                <input
                    type="number"
                    id="km"
                    placeholder="Enter kilometers"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                    required
                />
                <button type="submit">Convert to Miles</button>
            </form>
            <div className="result" id="result">
                {result || 'Result will be displayed here.'}
            </div>
        </div>
    );
}

export default Conversion;
