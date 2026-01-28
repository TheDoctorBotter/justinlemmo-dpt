import React from 'react';
import { Stethoscope, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (page: string) => (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-main py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-scarlet" aria-hidden="true" />
              <div>
                <span className="text-lg font-bold block">Buckeye Physical Therapy</span>
                <span className="text-sm text-gray-400">Justin Lemmo, PT, DPT</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quality physical therapy services specializing in personal injury,
              attorney lien cases, and cash pay patients in the Rio Grande Valley.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:9564765310"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2 text-scarlet" aria-hidden="true" />
                  (956) 476-5310
                </a>
              </li>
              <li>
                <a
                  href="mailto:buckeyephysicaltherapy@gmail.com"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mr-2 text-scarlet" aria-hidden="true" />
                  buckeyephysicaltherapy@gmail.com
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-scarlet flex-shrink-0" aria-hidden="true" />
                <span>Coming Soon to Edinburg, TX</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-scarlet" aria-hidden="true" />
                <span>By Appointment</span>
              </li>
              <li>Monday – Friday: 8am – 6pm</li>
              <li>Saturday: By appointment</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Buckeye Physical Therapy PLLC. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/privacy"
                onClick={handleLinkClick('privacy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                onClick={handleLinkClick('terms')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="/disclaimer"
                onClick={handleLinkClick('disclaimer')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Disclaimer
              </a>
              <a
                href="/accessibility"
                onClick={handleLinkClick('accessibility')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Texas PT License #1215276 | HIPAA Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
