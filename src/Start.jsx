import React from 'react';

function Start({ title, text, startText, imageUrl = '/my_image1.5.jpg' }) {
  const skills = [
    { cat: "Languages", items: "JavaScript, Python, Java, HTML5, CSS3, SQL" },
    { cat: "Frontend", items: "React.js, Tailwind CSS, Responsive Design" },
    { cat: "Backend & DBs", items: "FastAPI, REST APIs, PHP, PostgreSQL, MySQL" },
    { cat: "AI & Tools", items: "LangGraph, LangChain, Docker, Git, GitHub" }
  ];

  return (
    <div style={containerStyle}>
      <div style={heroStyle}>
        <div style={textSideStyle}>
          <h1 style={titleStyle}>{title}</h1>
          <p style={detailStyle}>{startText}</p>
          <p style={subtitleStyle}>{text}</p>
        </div>
        
        <div style={avatarSideStyle}>
          <div style={avatarWrapper}>
            <img src={imageUrl} alt="Profile" style={avatarImgStyle} />
          </div>
        </div>
      </div>

      {/* ΝΕΑ ΕΝΟΤΗΤΑ: TECH STACK */}
      <div style={stackSectionStyle}>
        <h2 style={stackTitleStyle}>TECH STACK</h2>
        <div style={stackGridStyle}>
          {skills.map((s, i) => (
            <div key={i} style={skillCardStyle}>
              <span style={skillCatStyle}>{s.cat}</span>
              <p style={skillItemsStyle}>{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- STYLES ---
const containerStyle = {
  width: '100%',
  maxWidth: '980px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  animation: 'fadeIn 0.7s ease-out',
};

const heroStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px',
  padding: 'clamp(32px, 6vh, 54px) clamp(20px, 4vw, 48px)',
  background: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  borderRadius: '12px',
  boxShadow: 'var(--surface-shadow)'
};

const textSideStyle = { flex: '1 1 450px', textAlign: 'left' };
const avatarSideStyle = { flex: '0 1 auto', margin: '0 auto' };
const titleStyle = { fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: '800', marginBottom: '12px', lineHeight: 1.1 };
const detailStyle = { fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: 'var(--muted-text)', fontWeight: 500, marginBottom: '16px' };
const subtitleStyle = { fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: 'var(--muted-text)', margin: 0, lineHeight: '1.6', opacity: 0.85 };

const avatarWrapper = {
  width: 'clamp(160px, 22vw, 240px)', height: 'clamp(160px, 22vw, 240px)',
  borderRadius: '12px', border: '1px solid var(--border-color)', overflow: 'hidden'
};
const avatarImgStyle = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' };

// Styles για το Tech Stack block
const stackSectionStyle = {
  padding: '24px clamp(20px, 4vw, 48px)',
  background: 'var(--surface-color)',
  border: '1px solid var(--border-color)',
  borderRadius: '12px',
  boxShadow: 'var(--surface-shadow)',
  textAlign: 'left'
};

const stackTitleStyle = { fontSize: '1.1rem', fontWeight: 800, letterSpacing: '0.05em', margin: '0 0 16px 0', color: 'var(--muted-text)' };
const stackGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' };
const skillCardStyle = { padding: '12px', background: 'var(--bg-color)', borderRadius: '6px', border: '1px solid var(--border-color)' };
const skillCatStyle = { fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-color)', display: 'block', marginBottom: '4px' };
const skillItemsStyle = { margin: 0, fontSize: '0.9rem', lineHeight: '1.4', fontWeight: 500 };

export default Start;