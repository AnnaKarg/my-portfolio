import React from 'react';

function Certificate({ title, text }) {
  return (
    <div style={containerStyle}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

const containerStyle = { 
  textAlign: 'center', 
  padding: '20px',
  color: 'var(--text-color)', 
  backgroundColor: 'var(--bg-color)' 
};
export default Certificate;