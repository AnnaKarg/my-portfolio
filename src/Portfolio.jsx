import React from 'react';

function Portfolio({ title, text }) {
  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={descriptionStyle}>🛠️ {text}</p>
    </div>
  );
}

const heroStyle = {
  textAlign: 'left',
  width: '100%',
  maxWidth: '980px',
  boxSizing: 'border-box',
  padding: 'clamp(32px, 5vh, 44px) clamp(20px, 4vw, 48px)',
  color: 'var(--text-color)',
  background: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  borderRadius: '12px',
  boxShadow: 'var(--surface-shadow)',
  animation: 'fadeIn 0.7s ease-in'
};

const titleStyle = {
  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
  color: 'var(--text-color)',
  marginBottom: '12px',
  fontWeight: 800,
  lineHeight: 1.1
};

const descriptionStyle = {
  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
  color: 'var(--muted-text)',
  margin: '0',
  lineHeight: '1.6'
};

export default Portfolio;