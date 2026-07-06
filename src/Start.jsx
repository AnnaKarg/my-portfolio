import React from 'react';

function Start({ title, text, startText, imageUrl = '/my_image1.5.jpg' }) {
  return (
    <div style={heroStyle}>
      <div style={textSideStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <p style={detailStyle}>{startText}</p>
        <p style={subtitleStyle}>{text}</p>
      </div>

      <div style={avatarSideStyle}>
        <div style={avatarWrapper}>
          <img src={imageUrl} alt="Profile" style={avatarImgStyle} />
        </div>
      </div>
    </div>
  );
}

// --- STYLES ---
const heroStyle = {
  width: '100%',
  maxWidth: '980px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px',
  padding: 'clamp(32px, 6vh, 54px) clamp(20px, 4vw, 48px)',
  background: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  borderRadius: '12px',
  boxShadow: 'var(--surface-shadow)'
};

const textSideStyle = { flex: '1 1 450px', textAlign: 'left' };
const avatarSideStyle = { flex: '0 1 auto', margin: '0 auto' };
const titleStyle = { fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '800', marginBottom: '12px', lineHeight: 1.1 };
const detailStyle = { fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--muted-text)', fontWeight: 500, marginBottom: '16px' };
const subtitleStyle = { fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: 'var(--muted-text)', margin: 0, lineHeight: '1.6', opacity: 0.85 };

const avatarWrapper = {
  width: 'clamp(160px, 22vw, 240px)', height: 'clamp(160px, 22vw, 240px)',
  borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden'
};
const avatarImgStyle = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

export default Start;
