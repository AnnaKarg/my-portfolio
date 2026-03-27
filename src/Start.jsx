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
  padding: 'clamp(24px, 5vh, 44px) clamp(16px, 3vw, 32px)',
  width: '100%',
  maxWidth: '980px',
  color: 'var(--text-color)',
  animation: 'fadeIn 0.7s ease-out',
  background: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  borderRadius: '22px',
  boxShadow: 'var(--surface-shadow)',
  backdropFilter: 'blur(10px)'
};

const titleStyle = {
  fontSize: 'clamp(2rem, 6.5vw, 3.8rem)',
  fontWeight: '800',
  letterSpacing: '-1px',
  marginBottom: '15px',
  lineHeight: 1.08
};

const detailStyle = {
  fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
  color: 'var(--accent-color)',
  fontWeight: 700,
  marginBottom: '10px',
  lineHeight: '1.3'
};

const subtitleStyle = {
  fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
  color: 'var(--muted-text)',
  maxWidth: '600px',
  margin: '0 auto 30px',
  lineHeight: '1.6'
};

const avatarPlaceholder = {
  width: 'clamp(120px, 25vw, 200px)', 
  height: 'clamp(120px, 25vw, 200px)',
  borderRadius: '50%',
  background: 'linear-gradient(145deg, var(--surface-strong), var(--surface-color))',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  border: '4px solid var(--accent-color)',
  boxShadow: '0 14px 24px var(--accent-shadow)'
};

export default Start;