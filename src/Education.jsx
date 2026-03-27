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

const entryStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '24px',
  maxWidth: '900px',
  margin: '28px auto 0',
  borderBottom: '1px solid var(--border-color)',
  paddingBottom: '14px',
  flexWrap: 'wrap'
};

const leftColumnStyle = {
  flex: '1 1 520px',
  minWidth: '280px',
  textAlign: 'left'
};

const entryTitleStyle = {
  margin: '0 0 6px',
  fontSize: '1.55rem',
  fontWeight: 700
};

const entryTextStyle = {
  margin: 0,
  fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
  lineHeight: '1.7',
  color: 'var(--muted-text)',
  whiteSpace: 'pre-line'
};

const dateStyle = {
  margin: 0,
  flex: '0 0 auto',
  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
  color: 'var(--accent-color)',
  whiteSpace: 'nowrap',
  fontWeight: 700
};

export default Education;