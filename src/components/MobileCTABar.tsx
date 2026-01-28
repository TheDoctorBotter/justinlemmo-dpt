import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export const MobileCTABar: React.FC = () => {
  return (
    <div className="mobile-cta-bar fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="flex">
        <a
          href="tel:9564765310"
          className="flex-1 flex items-center justify-center py-4 text-gray-900 font-semibold hover:bg-gray-50 transition-colors border-r border-gray-200"
        >
          <Phone className="h-5 w-5 mr-2 text-scarlet" aria-hidden="true" />
          Call / Text
        </a>
        <a
          href="tel:9564765310"
          className="flex-1 flex items-center justify-center py-4 bg-scarlet text-white font-semibold hover:bg-scarlet-600 transition-colors"
        >
          <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
          Book Now
        </a>
      </div>
    </div>
  );
};
