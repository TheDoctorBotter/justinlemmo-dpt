import React from 'react';

interface AccessibilityProps {
  onBack: () => void;
}

export const Accessibility: React.FC<AccessibilityProps> = ({ onBack }) => {
  return (
    <div className="section-padding bg-white">
      <div className="container-main">
        <button
          onClick={onBack}
          className="text-scarlet hover:text-scarlet-600 font-medium mb-8 inline-flex items-center"
        >
          ← Back to Home
        </button>

        <h1 className="mb-8">Accessibility Statement</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2026</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-4">
            Buckeye Physical Therapy PLLC is committed to ensuring digital accessibility for people
            with disabilities. We continually improve the user experience for everyone and apply
            relevant accessibility standards.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Accessibility Standards</h2>
          <p className="text-gray-600 mb-4">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            These guidelines explain how to make web content more accessible to people with disabilities.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Accessibility Features</h2>
          <p className="text-gray-600 mb-4">Our website includes the following accessibility features:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Semantic HTML for proper document structure</li>
            <li>ARIA labels for interactive elements</li>
            <li>Keyboard navigation support</li>
            <li>Sufficient color contrast ratios</li>
            <li>Resizable text without loss of functionality</li>
            <li>Alt text for images</li>
            <li>Focus indicators for interactive elements</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">Physical Accessibility</h2>
          <p className="text-gray-600 mb-4">
            Our physical clinic location will be ADA compliant with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
            <li>Wheelchair accessible entrance and facilities</li>
            <li>Accessible parking spaces</li>
            <li>Accessible treatment areas</li>
            <li>Accessible restrooms</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">Feedback</h2>
          <p className="text-gray-600 mb-4">
            We welcome your feedback on the accessibility of our website. If you encounter any
            accessibility barriers or have suggestions for improvement, please contact us:
          </p>
          <p className="text-gray-600 mb-4">
            Email: buckeyephysicaltherapy@gmail.com<br />
            Phone: (956) 476-5310
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Ongoing Efforts</h2>
          <p className="text-gray-600 mb-4">
            We regularly review our website for accessibility and work to address any issues identified.
            We are committed to making our website accessible to the widest possible audience.
          </p>
        </div>
      </div>
    </div>
  );
};
