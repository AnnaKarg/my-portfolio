import React from 'react';

function About_Me({ title, text, downloadLabel, cvFileUrl = '/CV.pdf' }) {
  const skills = [
    { cat: "Languages", items: ["JavaScript", "Python", "Java", "HTML5", "CSS3", "SQL"] },
    { cat: "Frontend", items: ["React.js", "Tailwind CSS", "Responsive Design"] },
    { cat: "Backend & DBs", items: ["FastAPI", "REST APIs", "PHP", "PostgreSQL", "MySQL"] },
    { cat: "AI & Tools", items: ["LangGraph", "LangChain", "Docker", "Git", "GitHub"] }
  ];

  return (
    <div style={heroStyle}>
      <h1 style={titleStyle}>{title}</h1>
      <p style={descriptionStyle}>{text}</p>

      <div style={skillsWrapStyle}>
        {skills.map((group, i) => (
          <div key={i} style={skillRowStyle}>
            <span style={skillCatStyle}>{group.cat}</span>
            <div style={pillRowStyle}>
              {group.items.map((item, j) => (
                <span key={j} style={pillStyle}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <a href={cvFileUrl} download style={downloadBtnStyle}>
        {downloadLabel}
      </a>
    </div>
  );
}

const heroStyle = {
  textAlign: 'left',
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
  marginBottom: '20px',
  fontWeight: 800,
  lineHeight: 1.1
};

const descriptionStyle = {
  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
  color: 'var(--muted-text)',
  maxWidth: '900px',
  margin: '0 0 28px 0',
  lineHeight: '1.75'
};

const skillsWrapStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  margin: '0 0 32px 0',
  paddingTop: '24px',
  borderTop: '1px solid var(--border-color)'
};

const skillRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '12px'
};

const skillCatStyle = {
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: 'var(--muted-text)',
  flex: '0 0 140px'
};

const pillRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px'
};

const pillStyle = {
  fontSize: '0.85rem',
  fontWeight: 600,
  padding: '5px 14px',
  borderRadius: '999px',
  background: 'transparent',
  border: '1px solid var(--border-color)',
  color: 'var(--text-color)'
};

const downloadBtnStyle = {
  display: 'inline-block',
  padding: '10px 22px',
  borderRadius: '8px',
  border: '1px solid var(--accent-color)',
  background: 'var(--accent-color)',
  color: 'var(--accent-contrast)',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '0.95rem'
};

export default About_Me;
