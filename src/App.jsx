import React, { useState } from 'react';
import Start from './Start';
import About_Me from './About_Me';
import Education from './Education';
import Certificate from './Certificate';
import Additional_Activities from './Additional_Activities';
import Contact from './Contact';

const translations = {
  el: {
    start: "Αρχική",
    about: "Σχετικά με μένα",
    education: "Εκπαίδευση",
    certificates: "Πιστοποιητικά",
    activities: "Επιπρόσθετες Ενασχολήσεις",
    contact: "Επικοινωνία",
    contactText: "Μπορείτε να με βρείτε εδώ:",
    welcome: "Καλώς ήρθατε στο βιογραφικό μου!",
  },
  en: {
    start: "Home",
    about: "About Me",
    education: "Education",
    certificates: "Certificates",
    activities: "Additional Activities",
    welcome: "Welcome to my CV!",
    contact: "Contact",
    contactText: "You can find me here:",
  }
};

function App() {
  const [language, setLanguage] = useState('el');
  const [activeTab, setActiveTab] = useState('start');
  const [theme, setTheme] = useState('light');

  const t = translations[language];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* --- NAVIGATION BAR --- */}
      <nav style={navStyle}>
        <button onClick={() => setActiveTab('start')} style={activeTab === 'start' ? activeBtn : linkBtn}>{t.start}</button>
        <button onClick={() => setActiveTab('about')} style={activeTab === 'about' ? activeBtn : linkBtn}>{t.about}</button>
        <button onClick={() => setActiveTab('education')} style={activeTab === 'education' ? activeBtn : linkBtn}>{t.education}</button>
        <button onClick={() => setActiveTab('certificates')} style={activeTab === 'certificates' ? activeBtn : linkBtn}>{t.certificates}</button>
        <button onClick={() => setActiveTab('activities')} style={activeTab === 'activities' ? activeBtn : linkBtn}>{t.activities}</button>
        <button onClick={() => setActiveTab('contact')} style={activeTab === 'contact' ? activeBtn : linkBtn}>{t.contact}</button>

        <div style={controlsContainer}>
          <button onClick={() => setLanguage(language === 'el' ? 'en' : 'el')} style={langBtn}>
            {language === 'el' ? 'EN' : 'EL'}
          </button>
          <button onClick={toggleTheme} style={themeBtnStyle}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '60px' }}>
        {activeTab === 'start' && <Start title={t.start} text={t.welcome} />}
        {activeTab === 'about' && <About_Me title={t.about} text={t.welcome} />}
        {activeTab === 'education' && <Education title={t.education} text={t.education} />}
        {activeTab === 'certificates' && <Certificate title={t.certificates} text={t.certificates} />}
        {activeTab === 'activities' && <Additional_Activities title={t.activities} text={t.activities} />}
        {activeTab === 'contact' && <Contact title={t.contact} text={t.contactText} />}
      </main>

    </div>
  );
}

// --- STYLES ---

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '15px',
  padding: '15px 30px',
  background: 'var(--nav-bg, #222)',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1000,
  boxSizing: 'border-box'
};

const linkBtn = {
  background: 'none',
  border: 'none',
  color: 'var(--text-color, white)',
  cursor: 'pointer',
  fontWeight: 'bold',
  padding: '10px 5px',
  fontSize: '14px',
  textDecoration: 'none',
  borderBottom: '2px solid transparent'
};

const activeBtn = {
  ...linkBtn,
  color: 'var(--accent-color, cyan)',
  borderBottom: '2px solid var(--accent-color, cyan)'
};

const controlsContainer = {
  marginLeft: 'auto',
  display: 'flex',
  gap: '10px',
  alignItems: 'center'
};

const langBtn = {
  cursor: 'pointer',
  background: 'var(--nav-bg)',
  color: 'var(--text-color)',
  border: '1px solid var(--text-color)',
  padding: '5px 10px',
  borderRadius: '5px'
};

const themeBtnStyle = {
  ...langBtn,
  fontSize: '1.2rem',
  border: 'none'
};

export default App;