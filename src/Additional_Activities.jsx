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
  fontSize: '1.2rem',
  lineHeight: '1.35',
  color: 'var(--text-color)',
  fontWeight: 600
};

const activityValueStyle = {
  margin: 0,
  flex: '0 0 auto',
  fontSize: '1.2rem',
  lineHeight: '1.35',
  color: 'var(--text-color)',
  whiteSpace: 'nowrap'
};

export default Additional_Activities;