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
  padding: 'clamp(32px, 5vh, 44px) clamp(20px, 4vw, 48px)',
  color: 'var(--text-color)',
  background: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  borderRadius: '12px',
  boxShadow: 'var(--surface-shadow)'
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
  margin: '0 0 24px 0',
  lineHeight: '1.6'
};

const linksContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '12px',
  marginTop: '24px'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--accent-contrast)',
  fontWeight: 600,
  fontSize: '0.95rem',
  border: '1px solid var(--accent-color)',
  background: 'var(--accent-color)',
  padding: '10px 20px',
  borderRadius: '8px',
  boxShadow: 'none'
};

export default Contact;