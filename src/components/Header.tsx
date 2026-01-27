import React from 'react';
import { Stethoscope, User, LogOut, Menu, X, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HeaderProps {
  user: any;
  onSignOut: () => void;
  onShowAuth?: () => void;
  onShowDashboard?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onSignOut, onShowAuth, onShowDashboard }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const handleSignOut = async () => {
    if (!supabase) {
      onSignOut();
      return;
    }
    
    await supabase.auth.signOut();
    onSignOut();
  };

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
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Buckeye Physical Therapy</h1>
              <p className="text-sm text-gray-600">Justin Lemmo, PT, DPT</p>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:956-476-5310"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <span className="hidden sm:inline">Call Now: (956) 476-5310</span>
              <span className="sm:hidden">Call</span>
            </a>
            
            {user ? (
              <div className="flex items-center space-x-3">
                {onShowDashboard && (
                  <button
                    onClick={onShowDashboard}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Dashboard
                  </button>
                )}
                <div className="flex items-center space-x-2 text-gray-700">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline text-sm">{user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="hidden sm:inline text-sm">Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={onShowAuth}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            )}
            
            {/* Mobile menu button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {showMobileMenu && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-600 hover:text-gray-900 transition-colors py-2"
              >
                Contact
              </button>
              <a
                href="tel:956-476-5310"
                className="text-left text-green-600 hover:text-green-700 transition-colors py-2 font-semibold"
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