import React, { useState, useEffect } from 'react';
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

const pathToPage: Record<string, Page> = {
  '/': 'home',
  '/privacy': 'privacy',
  '/terms': 'terms',
  '/disclaimer': 'disclaimer',
  '/accessibility': 'accessibility',
  '/meet-therapist': 'meet-therapist',
};

const pageToPath: Record<Page, string> = {
  'home': '/',
  'privacy': '/privacy',
  'terms': '/terms',
  'disclaimer': '/disclaimer',
  'accessibility': '/accessibility',
  'meet-therapist': '/meet-therapist',
};

function getPageFromPath(): Page {
  const path = window.location.pathname;
  return pathToPage[path] || 'home';
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string) => {
    const newPage = page as Page;
    setCurrentPage(newPage);
    window.history.pushState({}, '', pageToPath[newPage]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
