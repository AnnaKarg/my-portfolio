import React from 'react';

function Additional_Activities({
  title,
  activitiesText1,
  activitiesText2,
  activitiesText3,
  activitiesText4,
  activitiesText5,
  activitiesText6,
  activitiesText7,
  activitiesText8
}) {
  const activityRows = [
    { label: activitiesText1, value: activitiesText2 },
    { label: activitiesText3, value: activitiesText4 },
    { label: activitiesText5, value: activitiesText6 },
    { label: activitiesText7, value: activitiesText8 }
  ];

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>

      <div style={contentStyle}>
        {activityRows.map((row, index) => (
          <div key={`${row.label}-${index}`} style={rowStyle}>
            <p style={activityLabelStyle}>{row.label}</p>
            <p style={activityValueStyle}>{row.value}</p>
          </div>
        ))}
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
  paddingTop: '20px'
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '24px',
  marginBottom: '16px',
  flexWrap: 'wrap',
  textAlign: 'left'
};

const activityLabelStyle = {
  margin: 0,
  flex: '1 1 580px',
  minWidth: '250px',
  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
  lineHeight: '1.5',
  color: 'var(--text-color)',
  fontWeight: 600
};

const activityValueStyle = {
  margin: 0,
  flex: '0 0 auto',
  fontSize: '0.9rem',
  lineHeight: '1.5',
  color: 'var(--accent-color)',
  fontWeight: 600,
  whiteSpace: 'nowrap'
};

export default Additional_Activities;