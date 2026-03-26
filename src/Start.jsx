import React from 'react';

function Start({ title, text }) {
  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={subtitleStyle}>{text}</p>
      
      <div style={avatarPlaceholder}>
        <span style={{fontSize: '50px'}}>👩‍💻</span>
      </div>
    </div>
  );
}

const heroStyle = {

  textAlign: 'center', 
  padding: '20px',
  color: 'var(--text-color)', 
  backgroundColor: 'var(--bg-color)', 
  animation: 'fadeIn 1s ease-in'
};

const titleStyle = {
  fontSize: '3rem',
  color: '#222',
  marginBottom: '10px'
};

const subtitleStyle = {
  fontSize: '1.2rem',
  color: '#666',
  maxWidth: '600px',
  margin: '0 auto'
};

const avatarPlaceholder = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  background: '#eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '30px auto',
  border: '5px solid #00d1b2'
};

export default Start;