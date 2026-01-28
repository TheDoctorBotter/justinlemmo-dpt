import React, { useState } from 'react';
import { Shield, FileText, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

interface DisclaimersProps {
  id?: string;
}

export const Disclaimers: React.FC<DisclaimersProps> = ({ id }) => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-main max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Important Legal Information</h2>
          <p className="section-subtitle">
            Please review these important disclaimers and licensing information.
          </p>
        </div>

        <div className="space-y-4">
          {/* Medical Disclaimer */}
          <div className="card overflow-hidden">
            <button
              onClick={() => toggleSection('medical')}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              aria-expanded={expandedSection === 'medical'}
              aria-controls="medical-content"
            >
              <div className="flex items-center space-x-4">
                <Shield className="h-6 w-6 text-scarlet" aria-hidden="true" />
                <span className="text-lg font-semibold text-gray-900">Medical Disclaimer</span>
              </div>
              {expandedSection === 'medical' ?
                <ChevronUp className="h-5 w-5 text-gray-500" aria-hidden="true" /> :
                <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
              }
            </button>
            {expandedSection === 'medical' && (
              <div id="medical-content" className="px-6 pb-6 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed pt-4">
                  The content provided on this website is for informational purposes only and is not
                  a substitute for professional medical advice, diagnosis, or treatment. If you
                  experience a medical emergency, call 911 immediately.
                </p>
              </div>
            )}
          </div>

          {/* Licensing Notice */}
          <div className="card overflow-hidden">
            <button
              onClick={() => toggleSection('licensing')}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              aria-expanded={expandedSection === 'licensing'}
              aria-controls="licensing-content"
            >
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-green-600" aria-hidden="true" />
                <span className="text-lg font-semibold text-gray-900">Licensing Notice</span>
              </div>
              {expandedSection === 'licensing' ?
                <ChevronUp className="h-5 w-5 text-gray-500" aria-hidden="true" /> :
                <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
              }
            </button>
            {expandedSection === 'licensing' && (
              <div id="licensing-content" className="px-6 pb-6 border-t border-gray-100">
                <p className="text-gray-600 leading-relaxed pt-4 mb-4">
                  Physical therapy services are provided by Justin Lemmo, PT, DPT, licensed in
                  the State of Texas. Services are provided in accordance with Texas state laws
                  and regulations governing the practice of physical therapy.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-900 font-medium">
                    Texas Physical Therapy License #1215276
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Dr. Justin Lemmo, PT, DPT
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* HIPAA Privacy Policy */}
          <div className="card overflow-hidden">
            <button
              onClick={() => toggleSection('hipaa')}
              className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              aria-expanded={expandedSection === 'hipaa'}
              aria-controls="hipaa-content"
            >
              <div className="flex items-center space-x-4">
                <FileText className="h-6 w-6 text-blue-600" aria-hidden="true" />
                <span className="text-lg font-semibold text-gray-900">HIPAA Privacy Policy</span>
              </div>
              {expandedSection === 'hipaa' ?
                <ChevronUp className="h-5 w-5 text-gray-500" aria-hidden="true" /> :
                <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
              }
            </button>
            {expandedSection === 'hipaa' && (
              <div id="hipaa-content" className="px-6 pb-6 border-t border-gray-100">
                <div className="text-gray-600 leading-relaxed space-y-4 pt-4">
                  <p>
                    Buckeye Physical Therapy PLLC is committed to protecting your health information
                    in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">Your Rights:</p>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Request access to and copies of your health records</li>
                      <li>Request amendments to your health information</li>
                      <li>Request restrictions on use and disclosure</li>
                      <li>File a complaint if you believe your privacy rights have been violated</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm">
                      <strong>Contact for Privacy Concerns:</strong> buckeyephysicaltherapy@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
