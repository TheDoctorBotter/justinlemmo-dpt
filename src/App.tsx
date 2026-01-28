import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Disclaimers } from './components/Disclaimers';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { MobileCTABar } from './components/MobileCTABar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services id="services" />
        <Testimonials id="testimonials" />
        <Disclaimers id="disclaimers" />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}

export default App;
