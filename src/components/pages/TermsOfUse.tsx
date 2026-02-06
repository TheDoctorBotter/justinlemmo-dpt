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

          <h2 className="text-xl font-semibold mt-8 mb-4">8. SMS/Text Messaging Terms</h2>
          <p className="text-gray-600 mb-4">
            <strong>Program Name:</strong> Buckeye Physical Therapy Appointment Messaging
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">What Messages We Send</h3>
          <p className="text-gray-600 mb-4">
            By opting in to our SMS program, you may receive text messages related to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Appointment confirmations</li>
            <li>Appointment reminders</li>
            <li>Scheduling and rescheduling notifications</li>
            <li>Cancellation notices</li>
            <li>Care coordination and follow-up messages</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Message Frequency</h3>
          <p className="text-gray-600 mb-4">
            Message frequency varies based on your appointment activity and care needs.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">How You Consent (Opt-In)</h3>
          <p className="text-gray-600 mb-4">
            You consent to receive SMS messages from Buckeye Physical Therapy when you:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Provide your phone number during patient intake</li>
            <li>Submit a scheduling request via our website or phone</li>
            <li>Verbally agree to receive text messages during a phone call</li>
            <li>Text our clinic number to initiate communication</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">How to Opt Out</h3>
          <p className="text-gray-600 mb-4">
            You may opt out of SMS communications at any time by replying <strong>STOP</strong> to any message.
            You will receive a confirmation message and will no longer receive text messages from us.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Help</h3>
          <p className="text-gray-600 mb-4">
            For assistance, reply <strong>HELP</strong> to any message, or contact us directly at
            buckeyephysicaltherapy@gmail.com or (956) 476-5310.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Message and Data Rates</h3>
          <p className="text-gray-600 mb-4">
            Message and data rates may apply. Please contact your wireless carrier for details about your messaging plan.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Carrier Disclaimer</h3>
          <p className="text-gray-600 mb-4">
            Carriers are not liable for delayed or undelivered messages. Message delivery is subject to
            effective transmission from your network carrier and their policies.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Privacy</h3>
          <p className="text-gray-600 mb-4">
            Your mobile phone number and information will not be shared with third parties for marketing purposes.
            For more information, please see our <a href="/privacy" className="text-scarlet hover:text-scarlet-600 underline">Privacy Policy</a>.
          </p>

          <h3 className="text-lg font-semibold mt-6 mb-3">Consent Not Required for Treatment</h3>
          <p className="text-gray-600 mb-4">
            Consent to receive SMS messages is not a condition of receiving physical therapy services or treatment
            from Buckeye Physical Therapy. You may decline to receive text messages and still receive care.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Governing Law</h2>
          <p className="text-gray-600 mb-4">
            These Terms of Use shall be governed by the laws of the State of Texas without regard
            to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact</h2>
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
