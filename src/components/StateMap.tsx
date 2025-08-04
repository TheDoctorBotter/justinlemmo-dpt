import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { MapPin, CheckCircle } from 'lucide-react';

// Using a reliable CDN for US states topology data
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-110m.json";

export const StateMap = () => {
  const [hoveredState, setHoveredState] = useState<string>('');

  // States where Dr. Lemmo is actively licensed and practicing
  const activePracticeStates = ['Texas'];
  
  // States participating in PT Compact (as of 2024)
  const ptCompactStates = [
    'Alabama', 'Arizona', 'Colorado', 'Delaware', 'Georgia', 'Idaho', 'Illinois', 
    'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Maine', 'Maryland', 'Michigan', 
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'New Hampshire', 
    'New Jersey', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 
    'Pennsylvania', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 
    'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const getStateFill = (stateName: string) => {
    if (activePracticeStates.includes(stateName)) {
      return '#3B82F6'; // Blue for active practice
    } else if (ptCompactStates.includes(stateName)) {
      return '#4B5563'; // Dark gray for PT Compact states
    } else {
      return '#FFFFFF'; // White for non-compact states
    }
  };

  const getStateStroke = (stateName: string) => {
    if (activePracticeStates.includes(stateName)) {
      return '#1D4ED8'; // Darker blue stroke for active states
    } else {
      return '#D1D5DB'; // Light gray stroke for all others
    }
  };

  const getStateStrokeWidth = (stateName: string) => {
    if (activePracticeStates.includes(stateName)) {
      return 2; // Thicker stroke for active states
    } else {
      return 0.5;
    }
  };

  const getStateStatus = (stateName: string) => {
    if (activePracticeStates.includes(stateName)) {
      return 'Active Practice';
    } else if (ptCompactStates.includes(stateName)) {
      return 'PT Compact State';
    } else {
      return 'Not Available';
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Licensed Practice Areas
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Virtual physical therapy services available through PT Compact licensing
          </p>
          <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-lg">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">
              Texas License #1215276 - Dr. Justin Lemmo, PT, DPT
            </span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <div className="relative w-full" style={{ paddingBottom: '60%' }}>
            <div className="absolute inset-0">
              <ComposableMap
                projection="geoAlbersUsa"
                projectionConfig={{
                  scale: 1000,
                }}
                width={1000}
                height={600}
                className="w-full h-full"
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const stateName = geo.properties.name;
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={getStateFill(stateName)}
                          stroke={getStateStroke(stateName)}
                          strokeWidth={getStateStrokeWidth(stateName)}
                          onMouseEnter={() => setHoveredState(stateName)}
                          onMouseLeave={() => setHoveredState('')}
                          style={{
                            default: {
                              outline: 'none',
                            },
                            hover: {
                              outline: 'none',
                              fill: activePracticeStates.includes(stateName) 
                                ? '#2563EB' 
                                : ptCompactStates.includes(stateName)
                                ? '#374151'
                                : '#F9FAFB',
                              cursor: 'pointer',
                            },
                            pressed: {
                              outline: 'none',
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
              </ComposableMap>
            </div>
            
            {hoveredState && (
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg border z-10">
                <p className="font-semibold text-gray-900">{hoveredState}</p>
                <p className="text-sm text-gray-600">{getStateStatus(hoveredState)}</p>
                {activePracticeStates.includes(hoveredState) && (
                  <p className="text-xs text-blue-600 font-medium">License #1215276</p>
                )}
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-6 space-x-8 flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Active Practice (Licensed)</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-600 rounded mr-2"></div>
              <span className="text-sm text-gray-700">PT Compact States</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-white border border-gray-300 rounded mr-2"></div>
              <span className="text-sm text-gray-700">Non-Compact States</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Currently Licensed</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-800">Texas (License #1215276)</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">PT Compact Expansion</h3>
            <p className="text-gray-700 text-sm mb-3">
              Services are expanding to additional PT Compact states. The Physical Therapy Compact allows 
              licensed PTs to practice across participating states with streamlined licensing.
            </p>
            <a
              href="mailto:justinlemmodpt@gmail.com?subject=PT Compact State Inquiry"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              <MapPin className="h-4 w-4 mr-1" />
              Inquire about services in your state
            </a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            <strong>Note:</strong> Virtual physical therapy services are only available to residents of states 
            where Dr. Lemmo holds an active license or PT Compact privilege. Please confirm your state of 
            residence before scheduling services.
          </p>
        </div>
      </div>
    </section>
  );
};