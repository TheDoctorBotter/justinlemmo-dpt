import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

export const StateMap = () => {
  // States where Dr. Lemmo is licensed (currently only Texas)
  const licensedStates = ['TX'];
  
  // All US states with their abbreviations and positions for the map
  const states = [
    { name: 'Texas', abbr: 'TX', x: 380, y: 420 },
    { name: 'California', abbr: 'CA', x: 50, y: 300 },
    { name: 'Florida', abbr: 'FL', x: 580, y: 480 },
    { name: 'New York', abbr: 'NY', x: 620, y: 180 },
    { name: 'Illinois', abbr: 'IL', x: 450, y: 250 },
    { name: 'Pennsylvania', abbr: 'PA', x: 600, y: 200 },
    { name: 'Ohio', abbr: 'OH', x: 520, y: 220 },
    { name: 'Georgia', abbr: 'GA', x: 550, y: 380 },
    { name: 'North Carolina', abbr: 'NC', x: 580, y: 320 },
    { name: 'Michigan', abbr: 'MI', x: 500, y: 180 },
    { name: 'Virginia', abbr: 'VA', x: 590, y: 280 },
    { name: 'Washington', abbr: 'WA', x: 80, y: 80 },
    { name: 'Arizona', abbr: 'AZ', x: 200, y: 380 },
    { name: 'Massachusetts', abbr: 'MA', x: 650, y: 160 },
    { name: 'Tennessee', abbr: 'TN', x: 500, y: 320 },
    { name: 'Indiana', abbr: 'IN', x: 480, y: 240 },
    { name: 'Missouri', abbr: 'MO', x: 420, y: 300 },
    { name: 'Maryland', abbr: 'MD', x: 610, y: 260 },
    { name: 'Wisconsin', abbr: 'WI', x: 450, y: 180 },
    { name: 'Colorado', abbr: 'CO', x: 320, y: 300 },
    { name: 'Minnesota', abbr: 'MN', x: 400, y: 150 },
    { name: 'South Carolina', abbr: 'SC', x: 560, y: 360 },
    { name: 'Alabama', abbr: 'AL', x: 520, y: 380 },
    { name: 'Louisiana', abbr: 'LA', x: 420, y: 450 },
    { name: 'Kentucky', abbr: 'KY', x: 510, y: 280 },
    { name: 'Oregon', abbr: 'OR', x: 60, y: 120 },
    { name: 'Oklahoma', abbr: 'OK', x: 380, y: 360 },
    { name: 'Connecticut', abbr: 'CT', x: 640, y: 170 },
    { name: 'Utah', abbr: 'UT', x: 250, y: 280 },
    { name: 'Iowa', abbr: 'IA', x: 420, y: 220 },
    { name: 'Nevada', abbr: 'NV', x: 120, y: 280 },
    { name: 'Arkansas', abbr: 'AR', x: 440, y: 360 },
    { name: 'Mississippi', abbr: 'MS', x: 480, y: 400 },
    { name: 'Kansas', abbr: 'KS', x: 380, y: 300 },
    { name: 'New Mexico', abbr: 'NM', x: 280, y: 380 },
    { name: 'Nebraska', abbr: 'NE', x: 380, y: 250 },
    { name: 'West Virginia', abbr: 'WV', x: 560, y: 260 },
    { name: 'Idaho', abbr: 'ID', x: 180, y: 160 },
    { name: 'Hawaii', abbr: 'HI', x: 150, y: 500 },
    { name: 'New Hampshire', abbr: 'NH', x: 650, y: 140 },
    { name: 'Maine', abbr: 'ME', x: 670, y: 120 },
    { name: 'Montana', abbr: 'MT', x: 280, y: 120 },
    { name: 'Rhode Island', abbr: 'RI', x: 660, y: 170 },
    { name: 'Delaware', abbr: 'DE', x: 620, y: 250 },
    { name: 'South Dakota', abbr: 'SD', x: 360, y: 200 },
    { name: 'North Dakota', abbr: 'ND', x: 360, y: 120 },
    { name: 'Alaska', abbr: 'AK', x: 80, y: 450 },
    { name: 'Vermont', abbr: 'VT', x: 640, y: 140 },
    { name: 'Wyoming', abbr: 'WY', x: 280, y: 220 },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Licensed Practice Areas
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Virtual physical therapy services available in licensed states
          </p>
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-lg">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">
              Texas License #1215276 - Dr. Justin Lemmo, PT, DPT
            </span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <div className="relative">
            <svg
              viewBox="0 0 720 520"
              className="w-full h-auto max-w-4xl mx-auto"
              style={{ maxHeight: '400px' }}
            >
              {/* US Map Outline */}
              <rect x="0" y="0" width="720" height="520" fill="transparent" />
              
              {/* State circles */}
              {states.map((state) => {
                const isLicensed = licensedStates.includes(state.abbr);
                return (
                  <g key={state.abbr}>
                    <circle
                      cx={state.x}
                      cy={state.y}
                      r="20"
                      fill={isLicensed ? '#3B82F6' : '#E5E7EB'}
                      stroke={isLicensed ? '#1D4ED8' : '#9CA3AF'}
                      strokeWidth="2"
                      className="transition-colors duration-200"
                    />
                    <text
                      x={state.x}
                      y={state.y + 5}
                      textAnchor="middle"
                      className="text-xs font-semibold"
                      fill={isLicensed ? 'white' : '#6B7280'}
                    >
                      {state.abbr}
                    </text>
                    {isLicensed && (
                      <circle
                        cx={state.x + 15}
                        cy={state.y - 15}
                        r="8"
                        fill="#10B981"
                        stroke="white"
                        strokeWidth="2"
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
          
          <div className="flex justify-center mt-6 space-x-8">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Licensed States</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Not Yet Licensed</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-700">Active License</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Services are expanding to additional states through the PT Compact. 
            Check back regularly for updates on newly licensed states.
          </p>
          <a
            href="mailto:justinlemmodpt@gmail.com?subject=State Licensing Inquiry"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Inquire about services in your state
          </a>
        </div>
      </div>
    </section>
  );
};