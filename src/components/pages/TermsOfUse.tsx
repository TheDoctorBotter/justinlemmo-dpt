import React from 'react';

interface TermsOfUseProps {
  onBack: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
  return (
    <div className="section-padding bg-white">
      <div className="container-main">
        <button
          onClick={onBack}
          className="text-scarlet hover:text-scarlet-600 font-medium mb-8 inline-flex items-center"
        >
          ← Back to Home
        </button>

        <h1 className="mb-8">Terms of Use</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2026</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-4">
            By accessing or using the Buckeye Physical Therapy website, you agree to be bound by these
            Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Services Description</h2>
          <p className="text-gray-600 mb-4">
            This website provides information about Buckeye Physical Therapy PLLC's physical therapy
            services. The content is for informational purposes only and does not constitute medical advice.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. No Medical Advice</h2>
          <p className="text-gray-600 mb-4">
            Information on this website is not intended to replace professional medical advice, diagnosis,
            or treatment. Always seek the advice of a qualified healthcare provider with any questions
            about a medical condition.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p className="text-gray-600 mb-4">
            All content on this website, including text, graphics, logos, and images, is the property
            of Buckeye Physical Therapy PLLC and is protected by copyright and trademark laws.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. User Conduct</h2>
          <p className="text-gray-600 mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Copy or reproduce any content without permission</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600 mb-4">
            Buckeye Physical Therapy PLLC shall not be liable for any damages arising from your use
            of this website or reliance on any information provided.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms of Use at any time. Your continued use of the
            website after changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Governing Law</h2>
          <p className="text-gray-600 mb-4">
            These Terms of Use shall be governed by the laws of the State of Texas without regard
            to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact</h2>
          <p className="text-gray-600 mb-4">
            For questions about these Terms of Use, contact us at:
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
