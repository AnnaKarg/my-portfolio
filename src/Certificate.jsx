import React from 'react';

function Certificate({ title, certificateText1, certificateText2, certificateText3 }) {
  const certificateItems = (certificateText3 || '')
    .split('•')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>

      <div style={contentStyle}>
        <h2 style={entryTitleStyle}>{certificateText1}</h2>

        <h2 style={entryTitleStyle}>{certificateText2}</h2>

        <ul style={listStyle}>
          {certificateItems.map((item, index) => (
            <li key={`${item}-${index}`} style={listItemStyle}>
              {item}
            </li>
          ))}
        </ul>
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

const contentStyle = {
  maxWidth: '900px',
  margin: '28px auto 0',
  borderTop: '1px solid rgba(128, 128, 128, 0.45)',
  paddingTop: '14px',
  textAlign: 'left'
};

const entryTitleStyle = {
  margin: '0 0 12px',
  fontSize: '1.55rem',
  fontWeight: 700,
  color: 'var(--text-color)'
};

const listStyle = {
  margin: '8px 0 0',
  paddingLeft: '32px'
};

const listItemStyle = {
  marginBottom: '10px',
  fontSize: '1.2rem',
  lineHeight: '1.7',
  color: 'var(--text-color)'
};

export default Certificate;