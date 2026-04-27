import React from 'react';
import '@/App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App relative min-h-screen bg-onyx text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
