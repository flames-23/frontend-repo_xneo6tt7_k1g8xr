import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Showcases from './components/Showcases';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <Experience />
      <Showcases />
      <Footer />
    </div>
  );
}

export default App;
