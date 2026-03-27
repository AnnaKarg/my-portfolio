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

const linksContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '14px',
  marginTop: '24px'
};

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--text-color)',
  fontWeight: 'bold',
  fontSize: '1rem',
  border: '1px solid var(--text-color)',
  padding: '10px 18px',
  borderRadius: '8px'
};

export default Contact;