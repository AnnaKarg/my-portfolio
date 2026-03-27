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
  maxWidth: '980px',
  boxSizing: 'border-box',
  padding: 'clamp(24px, 4vh, 34px) clamp(16px, 3vw, 32px)',
  color: 'var(--text-color)',
  background: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  borderRadius: '22px',
  boxShadow: 'var(--surface-shadow)',
  backdropFilter: 'blur(10px)',
  animation: 'fadeIn 0.7s ease-in'
};

const titleStyle = {
  fontSize: 'clamp(1.9rem, 6vw, 3rem)',
  color: 'var(--text-color)',
  marginBottom: '10px',
  lineHeight: 1.1
};

const descriptionStyle = {
  fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
  color: 'var(--muted-text)',
  maxWidth: '900px',
  margin: '28px auto 0',
  lineHeight: '1.7'
};

const downloadBtnStyle = {
  display: 'inline-block',
  marginTop: '24px',
  padding: '11px 18px',
  borderRadius: '999px',
  border: '1px solid transparent',
  background: 'linear-gradient(135deg, var(--accent-color), var(--accent-2))',
  color: 'var(--accent-contrast)',
  textDecoration: 'none',
  fontWeight: 700,
  boxShadow: '0 10px 20px var(--accent-shadow)',
  transition: 'all 0.25s ease'
};

export default About_Me;