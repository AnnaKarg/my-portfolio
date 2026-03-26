import React from 'react';

function About_Me({ title, text }) {
  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={descriptionStyle}>{text}</p>
    </div>
  );
}

const heroStyle = {
  textAlign: 'center',
  width: '100%',
  boxSizing: 'border-box',
  padding: '24px 20px 20px',
  color: 'var(--text-color)',
  backgroundColor: 'transparent',
  animation: 'fadeIn 1s ease-in'
};

const titleStyle = {
  fontSize: '3.4rem',
  color: 'var(--text-color)',
  marginBottom: '10px'
};

const descriptionStyle = {
  fontSize: '1.2rem',
  color: 'var(--text-color)',
  maxWidth: '900px',
  margin: '28px auto 0',
  lineHeight: '1.7'
};

export default About_Me;