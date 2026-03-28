import React, { useEffect, useState } from 'react';
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
    welcome: "Καλώς ήρθατε στο βιογραφικό μου!",
    aboutMeText: "Είμαι φοιτήτρια στο Τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων του Διεθνές Πανεπιστημίου Ελλάδος στη Θεσσαλονίκη, με κατεύθυνση στον Προγραμματισμό και ισχυρή θεωρητική βάση σε Ηλεκτρονικά Συστήματα και Αλγορίθμους. Διαθέτω αποδεδειγμένη εργασιακή ηθική και δεξιότητες εξυπηρέτησης από προηγούμενη απασχόληση, με έμφαση στην ομαδική εργασία και τη γρήγορη προσαρμογή σε νέα περιβάλλοντα. Εστιάζω στην ανάπτυξη λογισμικού και την επίλυση προβλημάτων, με στόχο τη συμβολή σε καινοτόμα έργα που βελτιώνουν την καθημερινή ζωή. Αναζητώ ευκαιρίες για να εφαρμόσω τις γνώσεις μου και να αναπτυχθώ επαγγελματικά στον τομέα της τεχνολογίας.",
    downloadCv: "Λήψη CV",
    educationText1: "Προπτυχιακή Φοιτήτρια",
    educationText2:"Τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων, Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙΠΑΕ), Θεσσαλονίκη (Σίνδος)",
    educationText3:"Οκτώβριος 2021 - Σήμερα",
    educationText4:"Απόφοιτη του 1ου Γενικού Λυκείου Δράμας",
    educationText5:"Βαθμός απολυτηρίου: “΄Αριστα” ΔΕΚΑΕΝΝΕΑ κι ΕΞΙ ΔΕΚΑΤΑ (19,6) Διαγωγή: ΕΞΑΙΡΕΤΙΚΗ",
    educationText6:"Σεπτέμβριος 2018 - Ιούνιος 2021",
    certificateText1:"Lower Certificate ECCE",
    certificateText2:"Πιστοποιητικό Γνώσης Χειρισμού Η/Υ:",
    certificateText3:"• Χρήση Η/Υ και διαχείριση αρχείων Ελληνική έκδοση, Windows 7, Syllabus SYITGR06 • Επεξεργασία κειμένου Ελληνική έκδοση, Microsoft Word 2007, Syllabus SYITGR06 • Υπολογιστικά φύλλα Ελληνική έκδοση, Microsoft Excel 2007, Syllabus SYITGR06 • Βάσεις δεδομένων Ελληνική έκδοση, Microsoft Access 2007, Syllabus SYITGR06 • Παρουσιάσεις Ελληνική έκδοση, Microsoft Power Point 2007, Syllabus SYITGR06 • Υπηρεσίες διαδικτύου Ελληνική έκδοση, MS Internet Explorer, Microsoft Outlook 2007, Syllabus SYITGR06 ",
    activitiesText1:"· Υπάλληλος πολλαπλών αρμοδιοτήτων στο Viale Espresso and Convenience Store",
    activitiesText2:"Οκτώβριος 2022 – Ιούνιος 2023",
    activitiesText3:"· Παρακολούθηση επιμορφοτικού προγράμματος εκπαιδευτικής ρομποτικής ",
    activitiesText4:"2 χρόνια",
    activitiesText5:"· Προσκοπισμός ",
    activitiesText6:"3 χρόνια",
    activitiesText7:"· Αποτέλεση καθηκόντων ομαδάρχισας στην κατασκήνωση Tzioni Summer Camp",
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
    startText: "Undergraduate student in Department of Information and Electronic Engineering",    
    welcome: "Welcome to my CV!",
    aboutMeText: "I am an undergraduate student in the Department of Information and Electronic Engineering at the International Hellenic University in Thessaloniki, specializing in Programming, with a strong theoretical background in Electronic Systems and Algorithms. I possess a proven work ethic and customer service skills gained through previous employment, with an emphasis on teamwork and adaptability. I focus on software development and problem-solving, aiming to contribute to innovative projects that improve everyday life. I am seeking opportunities to apply my knowledge and grow professionally in the technology sector.",
    downloadCv: "Download CV",
    educationText1: "Undergraduate Student",
    educationText2: "Department of Information and Electronic Engineering, International Hellenic University, Thessaloniki (Sindos)",
    educationText3: "October 2021 - Present",
    educationText4: "Graduate of the 1st General High School of Drama",
    educationText5: "Graduation Grade: “Excellent” Nineteen point Six  (19.6) Conduct: Excellent",
    educationText6: "September 2018 - June 2021",
    certificateText1: "Lower Certificate ECCE",
    certificateText2: "Computer Skills Certificate:",
    certificateText3: "• Computer use and file management, Windows 7, Syllabus SYITGR06 • Word processing, Microsoft Word 2007, Syllabus SYITGR06 • Spreadsheets, Microsoft Excel 2007, Syllabus SYITGR06 • Databases, Microsoft Access 2007, Syllabus SYITGR06 • Presentations, Microsoft Power Point 2007, Syllabus SYITGR06 • Internet services, MS Internet Explorer, Microsoft Outlook 2007, Syllabus SYITGR06",
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const t = translations[language];

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div style={appShellStyle}>
      <div style={orbOneStyle} aria-hidden="true" />
      <div style={orbTwoStyle} aria-hidden="true" />
      
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
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
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

const orbOneStyle = {
  position: 'absolute',
  width: '420px',
  height: '420px',
  borderRadius: '50%',
  top: '-170px',
  right: '-80px',
  background: 'var(--bg-orb-1)',
  filter: 'blur(42px)',
  opacity: 0.58,
  pointerEvents: 'none'
};

const orbTwoStyle = {
  position: 'absolute',
  width: '360px',
  height: '360px',
  borderRadius: '50%',
  bottom: '-140px',
  left: '-100px',
  background: 'var(--bg-orb-2)',
  filter: 'blur(46px)',
  opacity: 0.52,
  pointerEvents: 'none'
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

const linkBtn = {
  background: 'transparent',
  border: '1px solid transparent',
  color: 'var(--text-color)',
  cursor: 'pointer',
  fontWeight: 600,
  padding: '10px 14px',
  fontSize: 'clamp(12px, 1.4vw, 14px)',
  borderRadius: '999px',
  textDecoration: 'none',
  transition: 'all 0.25s ease'
};

const activeBtn = {
  ...linkBtn,
  color: 'var(--accent-contrast)',
  border: '1px solid transparent',
  background: 'linear-gradient(135deg, var(--accent-color), var(--accent-2))',
  boxShadow: '0 8px 20px var(--accent-shadow)'
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
  padding: '8px 12px',
  borderRadius: '999px',
  fontWeight: 700,
  boxShadow: 'var(--surface-shadow)'
};

const themeBtnStyle = {
  ...langBtn,
  fontSize: '1.05rem',
  minWidth: '44px'
};

export default App;