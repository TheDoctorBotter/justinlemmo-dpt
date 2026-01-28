import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhoWeHelp } from './components/WhoWeHelp';
import { Services } from './components/Services';
import { WhyBuckeyePT } from './components/WhyBuckeyePT';
import { Testimonials } from './components/Testimonials';
import { Disclaimers } from './components/Disclaimers';
import { Footer } from './components/Footer';
import { MobileCTABar } from './components/MobileCTABar';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhoWeHelp />
        <Services id="services" />
        <WhyBuckeyePT id="about" />
        <Testimonials id="testimonials" />
        <Disclaimers id="disclaimers" />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}

export default App;
