import React from 'react';

function Additional_Activities({ title, text }) {
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
  fontSize: '1.25rem',
  lineHeight: '1.6',
  color: 'var(--text-color)', 
  backgroundColor: 'var(--bg-color)' 
};
export default Additional_Activities;