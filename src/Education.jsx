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

const entryStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '24px',
  maxWidth: '900px',
  margin: '28px auto 0',
  borderBottom: '1px solid rgba(128, 128, 128, 0.25)',
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
  fontSize: '1.2rem',
  lineHeight: '1.7',
  color: 'var(--text-color)',
  whiteSpace: 'pre-line'
};

const dateStyle = {
  margin: 0,
  flex: '0 0 auto',
  fontSize: '1.2rem',
  color: 'var(--text-color)',
  whiteSpace: 'nowrap',
  fontWeight: 500
};

export default Education;