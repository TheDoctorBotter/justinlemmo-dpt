import React from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="section-padding bg-white">
      <div className="container-main">
        <button
          onClick={onBack}
          className="text-scarlet hover:text-scarlet-600 font-medium mb-8 inline-flex items-center"
        >
          ← Back to Home
        </button>

        <h1 className="mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2026</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            Buckeye Physical Therapy PLLC ("we," "us," or "our") collects information you provide directly,
            including your name, contact information, medical history, and insurance information when you
            schedule appointments or receive treatment.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Provide physical therapy services and treatment</li>
            <li>Communicate with you about appointments and care</li>
            <li>Process payments and insurance claims</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Improve our services</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. HIPAA Compliance</h2>
          <p className="text-gray-600 mb-4">
            We comply with the Health Insurance Portability and Accountability Act (HIPAA) and protect
            your Protected Health Information (PHI) according to federal and state regulations.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information. We may share information with healthcare providers
            involved in your care, insurance companies for billing purposes, and as required by law.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, correct, or request deletion of your personal information.
            You may also request a copy of your medical records in accordance with HIPAA regulations.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            For questions about this Privacy Policy or to exercise your rights, contact us at:
          </p>
          <p className="text-gray-600 mb-4">
            Buckeye Physical Therapy PLLC<br />
            Email: buckeyephysicaltherapy@gmail.com<br />
            Phone: (956) 476-5310
          </p>
        </div>
      </div>
    </div>
  );
};
