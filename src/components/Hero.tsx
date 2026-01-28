import React from 'react';
import { Phone, Calendar, Globe } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline Stack */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
            Buckeye Physical Therapy
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
            Justin Lemmo, PT, DPT
          </p>
          <p className="text-lg md:text-xl text-scarlet font-semibold mb-8">
            1-on-1 Physical Therapy. Done Right.
          </p>

          {/* Supporting Line */}
          <p className="text-base md:text-lg text-gray-600 mb-4">
            1-on-1 visits&nbsp;&nbsp;•&nbsp;&nbsp;Fast scheduling&nbsp;&nbsp;•&nbsp;&nbsp;Evidence-based care
          </p>

          {/* Bilingual Badge */}
          <div className="inline-flex items-center bg-gray-200 text-gray-700 px-4 py-2 rounded-full mb-10">
            <Globe className="h-4 w-4 mr-2" aria-hidden="true" />
            <span className="font-medium text-sm">Bilingual: English &amp; Spanish</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:9564765310"
              className="btn-primary-lg"
            >
              <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
              Book Evaluation
            </a>
            <a
              href="tel:9564765310"
              className="btn-secondary-lg"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
              Call / Text
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></span>
              Licensed in Texas
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></span>
              15+ Years Experience
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2" aria-hidden="true"></span>
              Edinburg, TX
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
