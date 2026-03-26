import React from 'react';

function Contact({ title, text }) {
  return (
    <div style={containerStyle}>
      <h1>{title}</h1>
      <p>{text}</p>
      
      <div style={linksContainer}>
        <a href="mailto:your-email@example.com" style={linkStyle}>📧 Email</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" style={linkStyle}>🔗 LinkedIn</a>
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer" style={linkStyle}>💻 GitHub</a>
      </div>
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

const linksContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '30px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#00d1b2',
  fontWeight: 'bold',
  fontSize: '20px',
  border: '1px solid #00d1b2',
  padding: '10px 20px',
  borderRadius: '8px'
};

export default Contact;