import React, { useEffect, useRef, useState } from 'react';
import Start from './Start';
import About_Me from './About_Me';
import Education from './Education';
import Certificate from './Certificate';
import Additional_Activities from './Additional_Activities';
import Portfolio from './Portfolio';
import Contact from './Contact';

const translations = {
  el: {
    start: "Αρχική",
    about: "Σχετικά με μένα",
    education: "Εκπαίδευση",
    certificates: "Πιστοποιητικά",
    activities: "Επιπρόσθετες Ενασχολήσεις",
    portfolio: "Πορτφόλιο",
    contact: "Επικοινωνία",
    name:"Άννα Καργαλίδου",
    startText: "Προπτυχιακή φοιτήτρια Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων",
    welcome: "Καλώς ήρθατε στο πορτφόλιό μου!",
    aboutMeText: "Είμαι προπτυχιακή φοιτήτρια Μηχανικών Πληροφορικής με ευρύ ενδιαφέρον για όλο το φάσμα του προγραμματισμού και πάθος για τη διαρκή εκμάθηση νέων τεχνολογιών. Αν και με συναρπάζει η επίλυση προβλημάτων σε κάθε επίπεδο του software engineering, αυτή τη στιγμή εστιάζω στο Full-Stack Development. Στόχος μου είναι να συνδυάζω τις ισχυρές βάσεις μου σε αλγορίθμους και συστήματα με τη δημιουργία σύγχρονων, λειτουργικών και ολοκληρωμένων web εφαρμογών.",
    downloadCv: "Λήψη CV",
    educationText1: "Προπτυχιακή Φοιτήτρια",
    educationText2:"Τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων, Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙΠΑΕ), Θεσσαλονίκη (Σίνδος)",
    educationText3:"Οκτώβριος 2021 - Σήμερα",
    educationText4:"Απόφοιτη του 1ου Γενικού Λυκείου Δράμας",
    educationText5:"Βαθμός απολυτηρίου: “Άριστα” (19,6) Διαγωγή: Εξαιρετική",
    educationText6:"Σεπτέμβριος 2018 - Ιούνιος 2021",
    certificateText1:"Lower Certificate ECCE",
    certificateText2:"Πιστοποιητικό Γνώσης Χειρισμού Η/Υ:",
    certificateText3:"• Χρήση Η/Υ και διαχείριση αρχείων • Επεξεργασία κειμένου (MS Word) • Υπολογιστικά φύλλα (MS Excel) • Βάσεις δεδομένων (MS Access) • Παρουσιάσεις (MS PowerPoint) • Υπηρεσίες διαδικτύου & Διαχείριση πληροφοριών",
    activitiesText1:"· Υπάλληλος πολλαπλών αρμοδιοτήτων στο Viale Espresso and Convenience Store",
    activitiesText2:"Οκτώβριος 2022 – Ιούνιος 2023",
    activitiesText3:"· Παρακολούθηση επιμορφωτικού προγράμματος εκπαιδευτικής ρομποτικής",
    activitiesText4:"2 χρόνια",
    activitiesText5:"· Προσκοπισμός",
    activitiesText6:"3 χρόνια",
    activitiesText7:"· Άσκηση καθηκόντων ομαδάρχισσας στην κατασκήνωση Tzioni Summer Camp",
    activitiesText8:"1 κατασκηνοτική περίοδο",
    portfolioText: "Υπό κατασκευή",
    contactText: "Μπορείτε να με βρείτε εδώ:",
  },
  en: {
    start: "Home",
    about: "About Me",
    education: "Education",
    certificates: "Certificates",
    activities: "Additional Activities",
    portfolio: "Portfolio",
    contact: "Contact",
    name: "Anna Kargalidou",
    startText: "Undergraduate student in the Department of Information and Electronic Engineering",   
    welcome: "Welcome to my portfolio!",
    aboutMeText: "I am an Information and Electronic Engineering undergraduate student with a broad interest across all domains of programming and a passion for learning new technologies. While I am fascinated by problem-solving at every layer of software engineering, my current focus is dedicated to Full-Stack Development. My goal is to combine a solid foundation in algorithms and systems with building modern, scalable, and complete web applications.",
    downloadCv: "Download CV",
    educationText1: "Undergraduate Student",
    educationText2: "Department of Information and Electronic Engineering, International Hellenic University, Thessaloniki (Sindos)",
    educationText3: "October 2021 - Present",
    educationText4: "Graduate of the 1st General High School of Drama",
    educationText5: "Graduation Grade: “Excellent” (19.6) Conduct: Excellent",
    educationText6: "September 2018 - June 2021",
    certificateText1: "Lower Certificate ECCE",
    certificateText2: "Computer Skills Certificate:",
    certificateText3: "• Computer use and file management • Word processing (MS Word) • Spreadsheets (MS Excel) • Databases (MS Access) • Presentations (MS PowerPoint) • Internet services & Outlook",
    activitiesText1: "· Multi-role employee at Viale Espresso and Convenience Store",
    activitiesText2: "October 2022 - June 2023",
    activitiesText3: "· Attendance of an educational robotics training program",
    activitiesText4: "2 years",
    activitiesText5: "· Scouting",
    activitiesText6: "3 years",
    activitiesText7: "· Team leader duties at Tzioni Summer Camp",
    activitiesText8: "1 camp period",
    portfolioText: "Under construction",
    contactText: "You can find me here:",
  }
};

function App() {
  const [language, setLanguage] = useState('el');
  const [activeTab, setActiveTab] = useState('start');
  const [theme, setTheme] = useState('dark');
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const t = translations[language];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div style={appShellStyle}>
      
      {/* --- NAVIGATION BAR --- */}
      <nav style={navStyle}>
        <button onClick={() => setActiveTab('start')} style={activeTab === 'start' ? activeBtn : linkBtn}>{t.start}</button>
        <button onClick={() => setActiveTab('about')} style={activeTab === 'about' ? activeBtn : linkBtn}>{t.about}</button>
        <button onClick={() => setActiveTab('education')} style={activeTab === 'education' ? activeBtn : linkBtn}>{t.education}</button>
        <button onClick={() => setActiveTab('certificates')} style={activeTab === 'certificates' ? activeBtn : linkBtn}>{t.certificates}</button>
        <button onClick={() => setActiveTab('activities')} style={activeTab === 'activities' ? activeBtn : linkBtn}>{t.activities}</button>
        <button onClick={() => setActiveTab('portfolio')} style={activeTab === 'portfolio' ? activeBtn : linkBtn}>{t.portfolio}</button>
        <button onClick={() => setActiveTab('contact')} style={activeTab === 'contact' ? activeBtn : linkBtn}>{t.contact}</button>

        <div style={controlsContainer}>
          <button onClick={() => setLanguage(language === 'el' ? 'en' : 'el')} style={langBtn}>
            {language === 'el' ? 'EN' : 'EL'}
          </button>
          <button onClick={toggleTheme} style={themeBtnStyle}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <div style={scrollShadowStyle} aria-hidden="true" />
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main
        ref={mainRef}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'safe center',
          alignItems: 'center',
          width: '100%',
          padding: '24px clamp(16px, 3vw, 36px) 32px',
          boxSizing: 'border-box',
          overflowY: 'auto',
          position: 'relative',
          zIndex: 1
        }}
      >
        {activeTab === 'start' && <Start title={t.name} text={t.welcome} startText={t.startText} />}
        {activeTab === 'about' && <About_Me title={t.about} text={t.aboutMeText} downloadLabel={t.downloadCv} cvFileUrl='/CV.pdf' />}
        {activeTab === 'education' && (
          <Education
            title={t.education}
            educationText1={t.educationText1}
            educationText2={t.educationText2}
            educationText3={t.educationText3}
            educationText4={t.educationText4}
            educationText5={t.educationText5}
            educationText6={t.educationText6}
          />
        )}
        {activeTab === 'certificates' && (
          <Certificate
            title={t.certificates}
            certificateText1={t.certificateText1}
            certificateText2={t.certificateText2}
            certificateText3={t.certificateText3}
          />
        )}
        {activeTab === 'activities' && (
          <Additional_Activities
            title={t.activities}
            activitiesText1={t.activitiesText1}
            activitiesText2={t.activitiesText2}
            activitiesText3={t.activitiesText3}
            activitiesText4={t.activitiesText4}
            activitiesText5={t.activitiesText5}
            activitiesText6={t.activitiesText6}
            activitiesText7={t.activitiesText7}
            activitiesText8={t.activitiesText8}
          />
        )}
        {activeTab === 'portfolio' && <Portfolio title={t.portfolio} text={t.portfolioText} />}
        {activeTab === 'contact' && <Contact title={t.contact} text={t.contactText} />}
      </main>
    </div>
  );
}

// --- STYLES ---
const appShellStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  position: 'relative'
};

const navStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px',
  padding: '14px clamp(12px, 2.2vw, 28px)',
  background: 'var(--nav-bg)',
  position: 'sticky',
  top: 0,
  width: '100%',
  zIndex: 1000,
  boxSizing: 'border-box',
  borderBottom: '1px solid var(--border-color)',
  backdropFilter: 'blur(12px)'
};

const scrollShadowStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: '100%',
  height: '20px',
  background: 'linear-gradient(to bottom, var(--nav-bg), transparent)',
  pointerEvents: 'none'
};

const linkBtn = {
  background: 'transparent',
  border: '1px solid transparent',
  color: 'var(--text-color)',
  cursor: 'pointer',
  fontWeight: 600,
  padding: '8px 16px',
  fontSize: 'clamp(12px, 1.4vw, 14px)',
  borderRadius: '8px',
  textDecoration: 'none',
  transition: 'all 0.2s ease'
};

const activeBtn = {
  ...linkBtn,
  color: 'var(--accent-contrast)',
  background: 'var(--accent-color)',
};

const controlsContainer = {
  marginLeft: 'auto',
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  padding: '0 6px'
};

const langBtn = {
  cursor: 'pointer',
  background: 'var(--surface-color)',
  color: 'var(--text-color)',
  border: '1px solid var(--border-color)',
  padding: '8px 14px',
  borderRadius: '8px',
  fontWeight: 700,
  boxShadow: 'var(--surface-shadow)'
};

const themeBtnStyle = {
  ...langBtn,
  fontSize: '1.05rem',
  minWidth: '44px'
};

export default App;