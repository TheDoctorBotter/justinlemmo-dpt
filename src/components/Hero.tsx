import React from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto">
          {/* Location Badge */}
          <div className="inline-flex items-center bg-scarlet/10 text-scarlet px-4 py-2 rounded-full mb-6">
            <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
            <span className="font-medium text-sm">Coming Soon to Edinburg, TX</span>
          </div>

          {/* H1 */}
          <h1 className="text-gray-900 mb-6">
            Physical Therapy in Edinburg, TX
            <span className="block text-scarlet mt-2">Personal Injury & Cash Pay</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            1-on-1 visits&nbsp;&nbsp;•&nbsp;&nbsp;Fast scheduling&nbsp;&nbsp;•&nbsp;&nbsp;Evidence-based care
          </p>

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
              Attorney Liens Accepted
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
