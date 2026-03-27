import React from 'react';

function Contact({ title, text }) {
  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={descriptionStyle}>{text}</p>
      
      <div style={linksContainer}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=annakarg12@gmail.com" target="_blank" rel="noreferrer" style={linkStyle}>Email</a>
        <a href="https://linkedin.com/in/anna-kargalidou-957055241/" target="_blank" rel="noreferrer" style={linkStyle}>LinkedIn</a>
        <a href="https://github.com/AnnaKarg" target="_blank" rel="noreferrer" style={linkStyle}>GitHub</a>
      </div>
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

const linksContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '14px',
  marginTop: '24px'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--accent-contrast)',
  fontWeight: 700,
  fontSize: '1rem',
  border: '1px solid transparent',
  background: 'linear-gradient(135deg, var(--accent-color), var(--accent-2))',
  padding: '10px 18px',
  borderRadius: '999px',
  boxShadow: '0 8px 18px var(--accent-shadow)'
};

export default Contact;