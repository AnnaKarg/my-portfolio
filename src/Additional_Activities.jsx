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

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '24px',
  marginBottom: '8px',
  flexWrap: 'wrap'
};

const activityLabelStyle = {
  margin: 0,
  flex: '1 1 580px',
  minWidth: '250px',
  fontSize: 'clamp(1rem, 2.2vw, 1.1rem)',
  lineHeight: '1.35',
  color: 'var(--text-color)',
  fontWeight: 600
};

const activityValueStyle = {
  margin: 0,
  flex: '0 0 auto',
  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
  lineHeight: '1.35',
  color: 'var(--accent-color)',
  whiteSpace: 'nowrap'
};

export default Additional_Activities;