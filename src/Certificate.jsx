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
              <span style={triangleStyle} aria-hidden="true">▸</span>
              <span>{certificateText1}</span>
            </li>
          )}

          {certificateText2 && (
            <li style={headListItemStyleWithChildren}>
              <div style={headItemRowStyle}>
                <span style={triangleStyle} aria-hidden="true">▸</span>
                <span>{certificateText2}</span>
              </div>

              <ul style={subListStyle}>
                {certificateItems.map((item, index) => (
                  <li key={`${item}-${index}`} style={subListItemStyle}>
                    <span style={subTriangleStyle} aria-hidden="true">▹</span>
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

const contentStyle = {
  maxWidth: '900px',
  margin: '28px auto 0',
  borderTop: '1px solid var(--border-color)',
  paddingTop: '14px',
  textAlign: 'left'
};

const headListStyle = {
  margin: '0',
  padding: 0,
  listStyle: 'none',
  display: 'grid',
  gap: '12px'
};

const headListItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: 'clamp(1.05rem, 2.3vw, 1.2rem)',
  fontWeight: 700,
  color: 'var(--text-color)'
};

const headListItemStyleWithChildren = {
  display: 'grid',
  gap: '8px'
};

const headItemRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: 'clamp(1.05rem, 2.3vw, 1.2rem)',
  fontWeight: 700,
  color: 'var(--text-color)'
};

const triangleStyle = {
  color: 'var(--accent-color)',
  fontSize: '1.05rem',
  lineHeight: 1
};

const subListStyle = {
  margin: '2px 0 0',
  paddingLeft: '30px',
  listStyle: 'none',
  display: 'grid',
  gap: '8px'
};

const subListItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
  lineHeight: '1.55',
  color: 'var(--muted-text)'
};

const subTriangleStyle = {
  color: 'var(--accent-2)',
  fontSize: '0.95rem',
  lineHeight: 1.4
};

export default Certificate;