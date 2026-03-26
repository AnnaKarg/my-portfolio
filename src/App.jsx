import React, { useState } from 'react'

const translations = {
  el: {
    start: "Αρχική",
    about: "Σχετικά",
    education: "Εκπαίδευση",
    certificates: "Πιστοποιητικά",
    hobbies: "Ενδιαφέροντα & Δραστηριότητες",
    contact: "Επικοινωνία",
    welcome: "Γεια σας! Είμαι η Άννα και αυτό είναι το πρώτο μου React Portfolio.",
    hobbiesText: "Μου αρέσει ο προγραμματισμός, ο σχεδιασμός και τα ταξίδια.",
    contactText: "Μπορείτε να με βρείτε στο LinkedIn ή μέσω email.",
  },
  en: {
    start: "Home",
    about: "About",
    education: "Education",
    certificates: "Certificates",
    hobbies: "Interests & Activities",
    contact: "Contact",
    welcome: "Hello! I am Anna and this is my first React Portfolio.",
    hobbiesText: "I love programming, design, and traveling.",
    contactText: "You can find me on LinkedIn or via email.",
  }
};

function App() {

  const [language, setLanguage] = useState('el');

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  const t = translations[language];

  return (
    <div style={{ scrollBehavior: 'smooth' }}>
      {/* --- MENU --- */}
      <nav style={navStyle}>
        <a href="#start" style={linkStyle}>{t.start}</a>
        <a href="#about" style={linkStyle}>{t.about}</a>
        <a href="#education" style={linkStyle}>{t.education}</a>
        <a href="#certificates" style={linkStyle}>{t.certificates}</a>
        <a href="#activities" style={linkStyle}>{t.hobbies}</a>
        <a href="#contact" style={linkStyle}>{t.contact}</a>
        
        <button onClick={toggleLanguage} style={btnStyle}>
          {language === 'el' ? 'English 🇬🇧' : 'Ελληνικά 🇬🇷'}
        </button>
      </nav>
      {/* --- SECTION: START --- */}
      <section id="start" style={sectionStyle}>
        <h1>{t.start}</h1>
        <p>{t.welcome}</p>
      </section>

      {/* --- SECTION: ABOUT --- */}
      <section id="about" style={sectionStyle}>
        <h1>{t.about}</h1>
        <p>{t.welcome}</p>
      </section>

      {/* --- SECTION: EDUCATION --- */}
      <section id="education" style={sectionStyle}>
        <h1>{t.education}</h1>
        <p>{t.educationText}</p>
      </section>

      {/* --- SECTION: CERTIFICATES --- */}
      <section id="certificates" style={sectionStyle}>
        <h1>{t.certificates}</h1>
        <p>{t.certificatesText}</p>
      </section>

      {/* --- SECTION: ACTIVITIES --- */}
      <section id="activities" style={sectionStyle}>
        <h1>{t.hobbies}</h1>
        <p>{t.hobbiesText}</p>
      </section>

      {/* --- SECTION: CONTACT --- */}
      <section id="contact" style={sectionStyle}>
        <h1>{t.contact}</h1>
        <p>{t.contactText}</p>
      </section>
    </div>
  );
}

// --- STYLES (CSS-in-JS) ---
const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background: '#222',
  color: 'white',
  padding: '15px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  zIndex: 1000
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold'
};

const btnStyle = {
  marginLeft: 'auto',
  marginRight: '40px',
  cursor: 'pointer',
  padding: '8px 15px',
  borderRadius: '20px',
  border: '1px solid white',
  background: 'transparent',
  color: 'white',
  fontWeight: 'bold'
};

const sectionStyle = {
  padding: '120px 40px',
  minHeight: '100vh',
  borderBottom: '1px solid #eee',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: 'Arial, sans-serif'
};

export default App;

