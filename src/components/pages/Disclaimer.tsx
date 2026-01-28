import React from 'react';

interface DisclaimerProps {
  onBack: () => void;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ onBack }) => {
  return (
    <div className="section-padding bg-white">
      <div className="container-main">
        <button
          onClick={onBack}
          className="text-scarlet hover:text-scarlet-600 font-medium mb-8 inline-flex items-center"
        >
          ← Back to Home
        </button>

        <h1 className="mb-8">Medical Disclaimer</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2026</p>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-xl font-semibold mt-8 mb-4">General Information</h2>
          <p className="text-gray-600 mb-4">
            The information provided on this website is for general informational purposes only and
            should not be considered medical advice. It is not intended to diagnose, treat, cure,
            or prevent any disease or health condition.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Professional Medical Advice</h2>
          <p className="text-gray-600 mb-4">
            Always seek the advice of your physician or other qualified healthcare provider with
            any questions you may have regarding a medical condition. Never disregard professional
            medical advice or delay in seeking it because of something you have read on this website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">No Doctor-Patient Relationship</h2>
          <p className="text-gray-600 mb-4">
            Viewing this website or contacting us through email or phone does not establish a
            doctor-patient relationship. A professional relationship is only established after
            an in-person evaluation and mutual agreement to proceed with treatment.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Results May Vary</h2>
          <p className="text-gray-600 mb-4">
            Testimonials and case studies on this website represent individual results. Your results
            may vary based on your specific condition, health status, and adherence to treatment plans.
            No guarantee of specific results is made.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Emergency Situations</h2>
          <p className="text-gray-600 mb-4">
            If you are experiencing a medical emergency, call 911 or go to the nearest emergency
            room immediately. Do not rely on this website for emergency medical guidance.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">External Links</h2>
          <p className="text-gray-600 mb-4">
            This website may contain links to external websites. We are not responsible for the
            content or accuracy of any external sites.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Licensing</h2>
          <p className="text-gray-600 mb-4">
            Justin Lemmo, PT, DPT is a licensed physical therapist in the State of Texas
            (License #1215276). Physical therapy services are provided in accordance with
            Texas state laws and regulations governing the practice of physical therapy.
          </p>
        </div>
      </div>
    </div>
  );
};
