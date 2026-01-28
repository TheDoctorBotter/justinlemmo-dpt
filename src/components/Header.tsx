import React from 'react';
import { Stethoscope, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };

  const handleLogoClick = () => {
    if (onNavigate) {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  const handleMeetTherapist = () => {
    if (onNavigate) {
      onNavigate('meet-therapist');
    }
    setShowMobileMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container-main py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <Stethoscope className="h-8 w-8 text-scarlet" aria-hidden="true" />
            <div>
              <span className="text-lg font-bold text-gray-900 block leading-tight">Buckeye Physical Therapy</span>
              <span className="text-xs text-gray-600 hidden sm:block">Justin Lemmo, PT, DPT</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-scarlet transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={handleMeetTherapist}
              className="text-gray-700 hover:text-scarlet transition-colors font-medium"
            >
              Meet the Therapist
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-scarlet transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-scarlet transition-colors font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-scarlet transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:9564765310"
              className="flex items-center text-gray-700 hover:text-scarlet transition-colors font-medium"
            >
              <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
              (956) 476-5310
            </a>
            <a
              href="tel:9564765310"
              className="btn-primary"
            >
              Book Evaluation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden p-2 text-gray-700 hover:text-scarlet"
            aria-expanded={showMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-scarlet transition-colors py-2 font-medium"
              >
                Services
              </button>
              <button
                onClick={handleMeetTherapist}
                className="text-left text-gray-700 hover:text-scarlet transition-colors py-2 font-medium"
              >
                Meet the Therapist
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-scarlet transition-colors py-2 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-scarlet transition-colors py-2 font-medium"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-scarlet transition-colors py-2 font-medium"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
