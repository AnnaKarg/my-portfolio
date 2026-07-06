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
  marginBottom: '20px',
  fontWeight: 800,
  lineHeight: 1.1
};

const descriptionStyle = {
  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
  color: 'var(--muted-text)',
  maxWidth: '900px',
  margin: '0 0 28px 0',
  lineHeight: '1.75'
};

const downloadBtnStyle = {
  display: 'inline-block',
  padding: '10px 22px',
  borderRadius: '8px',
  border: '1px solid var(--accent-color)',
  background: 'var(--accent-color)',
  color: 'var(--accent-contrast)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '0.95rem'
};

export default About_Me;
