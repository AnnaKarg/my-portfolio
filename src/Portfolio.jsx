import React from 'react';

function Portfolio({ title }) {
  const skills = [
    { cat: "Languages", items: ["JavaScript", "Python", "Java", "HTML5", "CSS3", "SQL"] },
    { cat: "Frontend", items: ["React.js", "CSS", "Tailwind CSS", "Responsive Web Design"] },
    { cat: "Backend", items: ["FastAPI", "REST APIs", "PHP", "Pydantic", "Bcrypt"] },
    { cat: "Databases", items: ["PostgreSQL", "MySQL", "SQLite"] },
    { cat: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "Vercel", "Render", "VS Code"] },
    { cat: "AI / LLMs", items: ["LangGraph", "LangChain", "LLM Integration", "LangSmith", "Multi-Agent Orchestration"] }
  ];

  // Παίρνουμε τα δεδομένα απευθείας από το επίσημο CV σου
  const projects = [
    {
      name: "AI Python Tutor (Thesis Project)",
      status: ["In Progress"],
      tech: "Python, FastAPI, LangGraph, LangChain, React, PostgreSQL, LangSmith",
      desc: "Designed and built a multi-agent pipeline (Mentor, Debugger, Assessor) using LangGraph for personalized Python tutoring. Combined deterministic code analysis with LLM-based reasoning to reduce hallucinations.",
      link: "https://my-thesis-nine.vercel.app"
    },
    {
      name: "Gamified Calendar Application",
      status: ["In Progress"],
      tech: "React, Tailwind CSS, Python, FastAPI, SQLite, SQLAlchemy, Pydantic, Bcrypt",
      desc: "Developing a full-stack, RPG-inspired productivity calendar converting task management into an XP-based progression system. Implemented dynamic drag-and-drop mechanics using HTML5 API.",
      link: "https://cheerful-integrity-production.up.railway.app"
    },
    {
      name: "Online Backgammon Game",
      status: ["Team Project", "Completed"],
      tech: "PHP, MySQL, JavaScript, HTML5, CSS3, REST APIs",
      desc: "Collaborated in a team environment to engineer a full-stack online board game (Plakoto variant). Built server-side game logic in PHP managing complex calculations and dice algorithms.",
      link: "https://users.iee.ihu.gr/~iee2021011/"
    },
    {
      name: "Personalized Online CV",
      status: ["Completed"],
      tech: "React.js, CSS3, Vercel",
      desc: "Built a clean personal portfolio web app featuring dark/light mode toggles, global state management, and dynamic bilingual support.",
      link: "https://my-portfolio-puce-theta-45.vercel.app"
    }
  ];

  const statusColors = {
    "Completed": "#22c55e",
    "In Progress": "#f59e0b",
    "Team Project": "#818cf8"
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{title}</h1>

      <div style={techStackWrapStyle}>
        <h2 style={techStackHeadingStyle}>Tech Stack</h2>
        {skills.map((group, i) => (
          <div key={i} style={techCategoryStyle}>
            <span style={techCatLabelStyle}>{group.cat}</span>
            <div style={pillRowStyle}>
              {group.items.map((item, j) => (
                <span key={j} style={pillStyle}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={gridStyle}>
        {projects.map((proj, index) => (
          <div key={index} style={cardStyle}>
            <div style={cardHeaderStyle}>
              <h2 style={projNameStyle}>{proj.name}</h2>
              <div style={statusGroupStyle}>
                {proj.status.map((s, i) => (
                  <span key={i} style={{
                    ...statusStyle,
                    color: statusColors[s] || 'var(--muted-text)',
                    borderColor: statusColors[s] ? `${statusColors[s]}66` : 'var(--border-color)',
                    background: statusColors[s] ? `${statusColors[s]}1A` : 'var(--surface-color)'
                  }}>
                    <span style={{
                      ...statusDotStyle,
                      background: statusColors[s] || 'var(--muted-text)'
                    }} />
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <p style={techStyle}><strong>Tech Stack:</strong> {proj.tech}</p>
            <p style={descStyle}>{proj.desc}</p>
            <a href={proj.link} target="_blank" rel="noreferrer" style={linkStyle}>
              Explore Project ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- STYLES ---
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
  fontWeight: 800,
  marginBottom: '24px',
  textAlign: 'left'
};

const gridStyle = {
  display: 'grid',
  gap: '20px',
  textAlign: 'left'
};

const techStackWrapStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '32px',
  paddingBottom: '28px',
  borderBottom: '1px solid var(--border-color)'
};

const techStackHeadingStyle = {
  margin: 0,
  fontSize: '0.9rem',
  fontWeight: 800,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: 'var(--muted-text)'
};

const techCategoryStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};

const techCatLabelStyle = {
  fontSize: '0.75rem',
  fontWeight: 700,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  color: 'var(--accent-color)'
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

const cardStyle = {
  padding: '20px',
  border: '1px solid var(--border-color)',
  borderRadius: '8px',
  background: 'var(--bg-color)',
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '10px',
  marginBottom: '8px'
};

const projNameStyle = {
  margin: 0,
  fontSize: '1.25rem',
  fontWeight: 700
};

const statusGroupStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px'
};

const statusStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '0.8rem',
  padding: '4px 10px',
  borderRadius: '999px',
  border: '1px solid var(--border-color)',
  fontWeight: 600,
  color: 'var(--muted-text)'
};

const statusDotStyle = {
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  flexShrink: 0
};

const techStyle = {
  margin: '0 0 12px 0',
  fontSize: '0.9rem',
  color: 'var(--accent-color)'
};

const descStyle = {
  margin: '0 0 16px 0',
  fontSize: '0.95rem',
  lineHeight: '1.5',
  color: 'var(--muted-text)'
};

const linkStyle = {
  fontSize: '0.9rem',
  fontWeight: 600,
  color: 'var(--text-color)',
  textDecoration: 'none',
  borderBottom: '1px solid var(--text-color)'
};

export default Portfolio;