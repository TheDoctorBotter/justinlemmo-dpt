import React from 'react';
import { Stethoscope, Mail, Phone, MapPin, Shield, FileText } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Stethoscope className="h-8 w-8 text-[#BB0000]" />
              <div>
                <h3 className="text-xl font-bold">Buckeye Physical Therapy</h3>
                <p className="text-gray-400">Justin Lemmo, PT, DPT</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Providing quality physical therapy services specializing in personal injury rehabilitation,
              attorney lien cases, and private pay patients.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#BB0000] mr-3" />
                <a
                  href="tel:956-476-5310"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (956) 476-5310
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#BB0000] mr-3" />
                <a
                  href="mailto:buckeyephysicaltherapy@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  buckeyephysicaltherapy@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#BB0000] mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Coming Soon to Edinburg, TX
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal & Licensing</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-300 text-sm">
                  Texas PT License #1215276
                </span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-3" />
                <span className="text-gray-300 text-sm">
                  HIPAA Compliant Services
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Licensed physical therapist providing rehabilitation services in accordance with Texas state regulations.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Buckeye Physical Therapy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#disclaimers" className="text-gray-400 hover:text-white text-sm transition-colors">
                Medical Disclaimers
              </a>
              <a href="#disclaimers" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
