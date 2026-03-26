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

const heroStyle = {
  textAlign: 'center', 
  padding: '24px 20px 40px',
  width: '100%',
  maxWidth: '900px', 
  color: 'var(--text-color)', 
  transform: 'translateY(-14px)',
  animation: 'fadeIn 1.2s ease-out'
};

const titleStyle = {
  fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
  fontWeight: '800',
  letterSpacing: '-1px',
  marginBottom: '20px'
};

const detailStyle = {
  fontSize: 'clamp(1.1rem, 2vw, 1.8rem)',
  color: 'var(--accent-color)',
  fontWeight: '500',
  marginBottom: '15px',
  lineHeight: '1.3'
};

const subtitleStyle = {
  fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
  opacity: 0.7,
  maxWidth: '700px',
  margin: '0 auto 40px',
  lineHeight: '1.6'
};

const avatarPlaceholder = {
  width: 'clamp(135px, 17vw, 220px)', 
  height: 'clamp(135px, 17vw, 220px)',
  borderRadius: '50%',
  background: 'var(--nav-bg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  border: '6px solid var(--accent-color)',
  boxShadow: '0 20px 40px rgba(0,0,0,0.3)' 
};

export default Start;