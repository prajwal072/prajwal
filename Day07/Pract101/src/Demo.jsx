import React from 'react';
import { useNavigate } from 'react-router-dom';

function Demo() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Hello</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          onClick={() => handleNavigation('/bmi')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Check BMI
        </button>
        <button
          onClick={() => handleNavigation('/calculator')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28A745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Calculator
        </button>
        <button
          onClick={() => handleNavigation('/conversion')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6F42C1',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Get Conversion
        </button>
      </div>
    </div>
  );
}

export default Demo;
