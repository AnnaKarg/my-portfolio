import React from 'react';

function Certificate({ title, certificateText1, certificateText2, certificateText3 }) {
  const certificateItems = (certificateText3 || '')
    .split(/•|\n/)
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>

      <div style={contentStyle}>
        <ul style={headListStyle}>
          {certificateText1 && (
            <li style={headListItemStyle}>
              <span style={triangleStyle} aria-hidden="true">■</span>
              <span>{certificateText1}</span>
            </li>
          )}

          {certificateText2 && (
            <li style={headListItemStyleWithChildren}>
              <div style={headItemRowStyle}>
                <span style={triangleStyle} aria-hidden="true">■</span>
                <span>{certificateText2}</span>
              </div>

              <ul style={subListStyle}>
                {certificateItems.map((item, index) => (
                  <li key={`${item}-${index}`} style={subListItemStyle}>
                    <span style={subTriangleStyle} aria-hidden="true">↳</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
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

const contentStyle = {
  margin: '20px 0 0 0',
  borderTop: '1px solid var(--border-color)',
  paddingTop: '20px',
  textAlign: 'left'
};

const headListStyle = {
  margin: '0',
  padding: 0,
  listStyle: 'none',
  display: 'grid',
  gap: '16px'
};

const headListItemStyle = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '12px',
  fontSize: '1.2rem',
  fontWeight: 700,
  color: 'var(--text-color)'
};

const headListItemStyleWithChildren = {
  display: 'grid',
  gap: '8px'
};

const headItemRowStyle = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '12px',
  fontSize: '1.2rem',
  fontWeight: 700,
  color: 'var(--text-color)'
};

const triangleStyle = {
  color: 'var(--accent-color)',
  fontSize: '0.8rem',
};

const subListStyle = {
  margin: '4px 0 0',
  paddingLeft: '24px',
  listStyle: 'none',
  display: 'grid',
  gap: '10px'
};

const subListItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: 'var(--muted-text)'
};

const subTriangleStyle = {
  color: 'var(--border-color)',
  fontWeight: 'bold',
  fontSize: '1rem',
};

export default Certificate;