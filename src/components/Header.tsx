import React from 'react';
import { Stethoscope, Youtube, User, LogOut } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface HeaderProps {
  user: any;
  onSignOut: () => void;
  onShowAuth?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onSignOut, onShowAuth }) => {
  const handleSignOut = async () => {
    if (!supabase) {
      onSignOut();
      return;
    }
    
    await supabase.auth.signOut();
    onSignOut();
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Dr. Justin Lemmo</h1>
              <p className="text-sm text-gray-600">Doctor of Physical Therapy</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.youtube.com/@justinlemmodpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span className="hidden sm:inline">Exercise Library</span>
            </a>
            
            {user ? (
              <div className="flex items-center space-x-3">
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
          </div>
        </div>
      </div>
    </header>
  );
};