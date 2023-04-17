import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [selectedSection, setSelectedSection] = useState('About Me');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="App">
      <Header onSectionChange={handleSectionChange} />
      {selectedSection === 'About Me' && <AboutMe />}
      {selectedSection === 'Portfolio' && <Portfolio />}
      {selectedSection === 'Contact' && <Contact />}
      {selectedSection === 'Resume' && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
