import React from 'react';

function Start({ title, text, startText }) {
  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>{title}</h1>
      
      <p style={detailStyle}>{startText}</p>
      <p style={subtitleStyle}>{text}</p>
      
      <div style={avatarPlaceholder}>
        <span style={{fontSize: '44px'}}>👩‍💻</span>
      </div>
    </div>
  );
}

// --- STYLES  ---
const heroStyle = {
  textAlign: 'center', 
  padding: 'clamp(20px, 5vh, 40px) 15px', 
  width: '100%',
  maxWidth: '900px', 
  color: 'var(--text-color)', 
  animation: 'fadeIn 1.2s ease-out'
};

const titleStyle = {

  fontSize: 'clamp(2rem, 7vw, 4rem)', 
  fontWeight: '800',
  letterSpacing: '-1px',
  marginBottom: '15px'
};

const detailStyle = {
  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', 
  color: 'var(--accent-color)',
  fontWeight: '500',
  marginBottom: '10px',
  lineHeight: '1.3'
};

const subtitleStyle = {
  fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
  opacity: 0.7,
  maxWidth: '600px',
  margin: '0 auto 30px',
  lineHeight: '1.6'
};

const avatarPlaceholder = {
  width: 'clamp(120px, 25vw, 200px)', 
  height: 'clamp(120px, 25vw, 200px)',
  borderRadius: '50%',
  background: 'var(--nav-bg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  border: '5px solid var(--accent-color)',
  boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
};

export default Start;