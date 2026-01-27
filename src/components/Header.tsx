import React from 'react';
import { Stethoscope, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Stethoscope className="h-8 w-8 text-[#BB0000]" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Buckeye Physical Therapy</h1>
              <p className="text-sm text-gray-600">Justin Lemmo, PT, DPT</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#BB0000] transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-[#BB0000] transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#BB0000] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:956-476-5310"
              className="flex items-center space-x-2 bg-[#BB0000] text-white px-4 py-2 rounded-lg hover:bg-[#990000] transition-colors font-semibold"
            >
              <span className="hidden sm:inline">Call Now: (956) 476-5310</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-700 hover:text-[#BB0000]"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-[#BB0000] transition-colors py-2 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-[#BB0000] transition-colors py-2 font-medium"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-[#BB0000] transition-colors py-2 font-medium"
              >
                Contact
              </button>
              <a
                href="tel:956-476-5310"
                className="text-left text-[#BB0000] hover:text-[#990000] transition-colors py-2 font-semibold"
              >
                Call: (956) 476-5310
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
