import React from 'react';

function Education({
  title,
  educationText1,
  educationText2,
  educationText3,
  educationText4,
  educationText5,
  educationText6
}) {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>

      <div style={entryStyle}>
        <div style={leftColumnStyle}>
          <h2 style={entryTitleStyle}>{educationText1}</h2>
          <p style={entryTextStyle}>{educationText2}</p>
        </div>
        <p style={dateStyle}>{educationText3}</p>
      </div>

      <div style={entryStyle}>
        <div style={leftColumnStyle}>
          <h2 style={entryTitleStyle}>{educationText4}</h2>
          <p style={entryTextStyle}>{educationText5}</p>
        </div>
        <p style={dateStyle}>{educationText6}</p>
      </div>
    </div>
  );
}

const containerStyle = {
  width: '100%',
  maxWidth: '980px',
  boxSizing: 'border-box',
  padding: 'clamp(32px, 5vh, 44px) clamp(20px, 4vw, 48px)',
  color: 'var(--text-color)',
  background: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  borderRadius: '12px',
  boxShadow: 'var(--surface-shadow)',
  animation: 'fadeIn 0.7s ease-in'
};

const titleStyle = {
  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
  color: 'var(--text-color)',
  marginBottom: '10px',
  fontWeight: 800,
  textAlign: 'left'
};

const entryStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '24px',
  margin: '24px 0 0 0',
  borderLeft: '3px solid var(--accent-color)',
  paddingLeft: '20px',
  paddingBottom: '20px',
  flexWrap: 'wrap-reverse',
  textAlign: 'left'
};

const leftColumnStyle = {
  flex: '1 1 520px',
  minWidth: '280px'
};

const entryTitleStyle = {
  margin: '0 0 8px 0',
  fontSize: '1.35rem',
  fontWeight: 700
};

const entryTextStyle = {
  margin: 0,
  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
  lineHeight: '1.65',
  color: 'var(--muted-text)',
  whiteSpace: 'pre-line'
};

const dateStyle = {
  margin: 0,
  flex: '0 0 auto',
  fontSize: '0.95rem',
  color: 'var(--accent-color)',
  whiteSpace: 'nowrap',
  fontWeight: 600
};

export default Education;