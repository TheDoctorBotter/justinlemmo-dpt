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
            Buckeye Physical Therapy PLLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects
            information you provide directly, including your name, contact information (such as email address and phone
            number), appointment details, and, when applicable, medical history and insurance information when you
            schedule appointments or receive treatment.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Provide physical therapy services and treatment</li>
            <li>Communicate with you about appointments, scheduling, and care-related follow up</li>
            <li>Send appointment confirmations and reminders</li>
            <li>Process payments and insurance claims (when applicable)</li>
            <li>Comply with legal and regulatory requirements</li>
            <li>Improve our services and patient experience</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. HIPAA Compliance</h2>
          <p className="text-gray-600 mb-4">
            We comply with the Health Insurance Portability and Accountability Act (HIPAA) and protect your Protected
            Health Information (PHI) according to applicable federal and state regulations.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. SMS / Text Messaging (Important)</h2>
          <p className="text-gray-600 mb-4">
            If you provide your mobile phone number, you may receive SMS (text) messages from Buckeye Physical Therapy
            related to appointment scheduling, confirmations, reminders, care-related notifications, and follow up
            communication.
          </p>

          <p className="text-gray-600 mb-4">
            <strong>How you opt in:</strong> You opt in by providing your phone number during intake, referral,
            scheduling, through our website, or by requesting contact from the clinic.
          </p>

          <p className="text-gray-600 mb-4">
            <strong>Message frequency:</strong> Message frequency varies.
            <br />
            <strong>Rates:</strong> Message and data rates may apply.
          </p>

          <p className="text-gray-600 mb-4">
            <strong>Opt out:</strong> You can opt out at any time by replying <strong>STOP</strong>. After you send STOP,
            you may receive one final message confirming your opt out.
            <br />
            <strong>Help:</strong> For help, reply <strong>HELP</strong> or contact us using the information in the
            &quot;Contact Us&quot; section below.
          </p>

          <p className="text-gray-600 mb-4">
            <strong>Privacy of mobile information:</strong> <strong>Mobile information will not be shared with third
            parties or affiliates for marketing or promotional purposes.</strong> We only share information with service
            providers as necessary to deliver messages and provide services (for example, messaging and scheduling
            systems), and as required by law.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell your personal information. We may share information with healthcare providers involved in
            your care, insurance companies for billing purposes (when applicable), service providers who help us operate
            our business (such as scheduling and messaging tools), and as required by law.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Your Rights</h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, correct, or request deletion of your personal information, subject to
            applicable legal requirements. You may also request a copy of your medical records in accordance with HIPAA
            regulations.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Privacy Policy from time to time. Updates will be posted on this page with an updated
            &quot;Last updated&quot; date.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p className="text-gray-600 mb-4">
            For questions about this Privacy Policy, to exercise your rights, or for SMS help, contact us at:
          </p>
          <p className="text-gray-600 mb-4">
            Buckeye Physical Therapy PLLC
            <br />
            Email: buckeyephysicaltherapy@gmail.com
            <br />
            Phone: (956) 476-5310
          </p>
        </div>
      </div>
    </div>
  );
};