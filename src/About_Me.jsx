import React from 'react';

function About_Me({ title, text, downloadLabel, cvFileUrl = '/CV.pdf' }) {
  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={descriptionStyle}>{text}</p>
      <a href={cvFileUrl} download style={downloadBtnStyle}>
        {downloadLabel}
      </a>
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

const downloadBtnStyle = {
  display: 'inline-block',
  marginTop: '24px',
  padding: '10px 18px',
  borderRadius: '8px',
  border: '1px solid var(--text-color)',
  color: 'var(--text-color)',
  textDecoration: 'none',
  fontWeight: 700,
  transition: 'all 0.25s ease'
};

export default About_Me;