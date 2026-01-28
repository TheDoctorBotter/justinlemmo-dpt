import React, { useState } from 'react';
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
import { PrivacyPolicy, TermsOfUse, Disclaimer, Accessibility, MeetTheTherapist } from './components/pages';

type Page = 'home' | 'privacy' | 'terms' | 'disclaimer' | 'accessibility' | 'meet-therapist';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  // Render policy pages
  if (currentPage === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigate} />
        <main>
          <PrivacyPolicy onBack={handleBackToHome} />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigate} />
        <main>
          <TermsOfUse onBack={handleBackToHome} />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage === 'disclaimer') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigate} />
        <main>
          <Disclaimer onBack={handleBackToHome} />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage === 'accessibility') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigate} />
        <main>
          <Accessibility onBack={handleBackToHome} />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (currentPage === 'meet-therapist') {
    return (
      <div className="min-h-screen bg-white">
        <Header onNavigate={handleNavigate} />
        <main>
          <MeetTheTherapist onBack={handleBackToHome} />
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  // Home page
  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero />
        <HowItWorks />
        <WhoWeHelp />
        <Services id="services" />
        <WhyBuckeyePT id="about" />
        <Testimonials id="testimonials" />
        <Disclaimers id="disclaimers" />
      </main>
      <Footer onNavigate={handleNavigate} />
      <MobileCTABar />
    </div>
  );
}

export default App;
