import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

export const StateMap = () => {
  // States where Dr. Lemmo is actively licensed and practicing
  const activePracticeStates = ['TX'];
  
  // States participating in PT Compact (as of 2024)
  const ptCompactStates = [
    'AL', 'AZ', 'CO', 'DE', 'GA', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'ME', 
    'MD', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NH', 'NJ', 'NC', 'ND', 'OH', 
    'OK', 'PA', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const getStateColor = (stateAbbr: string) => {
    if (activePracticeStates.includes(stateAbbr)) {
      return '#3B82F6'; // Blue for active practice
    } else if (ptCompactStates.includes(stateAbbr)) {
      return '#6B7280'; // Dark gray for PT Compact states
    } else {
      return '#FFFFFF'; // White for non-compact states
    }
  };

  const getStateStroke = (stateAbbr: string) => {
    if (activePracticeStates.includes(stateAbbr)) {
      return '#1D4ED8'; // Darker blue stroke for active states
    } else {
      return '#D1D5DB'; // Light gray stroke for all others
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
          <div className="relative">
            <svg
              viewBox="0 0 1000 600"
              className="w-full h-auto max-w-5xl mx-auto"
              style={{ maxHeight: '500px' }}
            >
              {/* Alaska */}
              <path
                d="M158 458L178 468L188 478L198 488L208 498L218 508L228 518L238 528L248 538L258 548L268 558L278 568L288 578L298 588L308 598L318 588L328 578L338 568L348 558L358 548L368 538L378 528L388 518L398 508L408 498L418 488L428 478L438 468L448 458L438 448L428 438L418 428L408 418L398 408L388 398L378 388L368 378L358 368L348 358L338 348L328 338L318 328L308 318L298 308L288 298L278 288L268 278L258 268L248 258L238 248L228 238L218 228L208 218L198 208L188 198L178 188L168 198L158 208L148 218L138 228L128 238L118 248L108 258L98 268L88 278L78 288L68 298L58 308L48 318L38 328L28 338L18 348L8 358L18 368L28 378L38 388L48 398L58 408L68 418L78 428L88 438L98 448L108 458L118 468L128 478L138 488L148 498L158 508L158 458Z"
                fill={getStateColor('AK')}
                stroke={getStateStroke('AK')}
                strokeWidth="1"
              />
              
              {/* Hawaii */}
              <circle cx="230" cy="450" r="8" fill={getStateColor('HI')} stroke={getStateStroke('HI')} strokeWidth="1" />
              <circle cx="250" cy="460" r="6" fill={getStateColor('HI')} stroke={getStateStroke('HI')} strokeWidth="1" />
              <circle cx="270" cy="470" r="5" fill={getStateColor('HI')} stroke={getStateStroke('HI')} strokeWidth="1" />
              <circle cx="290" cy="480" r="4" fill={getStateColor('HI')} stroke={getStateStroke('HI')} strokeWidth="1" />

              {/* Washington */}
              <path
                d="M100 50L200 50L200 120L100 120Z"
                fill={getStateColor('WA')}
                stroke={getStateStroke('WA')}
                strokeWidth="1"
              />

              {/* Oregon */}
              <path
                d="M100 120L200 120L200 180L100 180Z"
                fill={getStateColor('OR')}
                stroke={getStateStroke('OR')}
                strokeWidth="1"
              />

              {/* California */}
              <path
                d="M100 180L180 180L160 350L80 350Z"
                fill={getStateColor('CA')}
                stroke={getStateStroke('CA')}
                strokeWidth="1"
              />

              {/* Nevada */}
              <path
                d="M180 180L250 180L250 320L160 320Z"
                fill={getStateColor('NV')}
                stroke={getStateStroke('NV')}
                strokeWidth="1"
              />

              {/* Idaho */}
              <path
                d="M200 50L280 50L280 180L200 180Z"
                fill={getStateColor('ID')}
                stroke={getStateStroke('ID')}
                strokeWidth="1"
              />

              {/* Montana */}
              <path
                d="M280 50L450 50L450 120L280 120Z"
                fill={getStateColor('MT')}
                stroke={getStateStroke('MT')}
                strokeWidth="1"
              />

              {/* Wyoming */}
              <path
                d="M280 120L450 120L450 200L280 200Z"
                fill={getStateColor('WY')}
                stroke={getStateStroke('WY')}
                strokeWidth="1"
              />

              {/* Utah */}
              <path
                d="M250 180L320 180L320 280L250 280Z"
                fill={getStateColor('UT')}
                stroke={getStateStroke('UT')}
                strokeWidth="1"
              />

              {/* Colorado */}
              <path
                d="M320 200L450 200L450 280L320 280Z"
                fill={getStateColor('CO')}
                stroke={getStateStroke('CO')}
                strokeWidth="1"
              />

              {/* Arizona */}
              <path
                d="M250 280L320 280L320 380L200 380Z"
                fill={getStateColor('AZ')}
                stroke={getStateStroke('AZ')}
                strokeWidth="1"
              />

              {/* New Mexico */}
              <path
                d="M320 280L450 280L450 380L320 380Z"
                fill={getStateColor('NM')}
                stroke={getStateStroke('NM')}
                strokeWidth="1"
              />

              {/* North Dakota */}
              <path
                d="M450 50L550 50L550 120L450 120Z"
                fill={getStateColor('ND')}
                stroke={getStateStroke('ND')}
                strokeWidth="1"
              />

              {/* South Dakota */}
              <path
                d="M450 120L550 120L550 180L450 180Z"
                fill={getStateColor('SD')}
                stroke={getStateStroke('SD')}
                strokeWidth="1"
              />

              {/* Nebraska */}
              <path
                d="M450 180L550 180L550 230L450 230Z"
                fill={getStateColor('NE')}
                stroke={getStateStroke('NE')}
                strokeWidth="1"
              />

              {/* Kansas */}
              <path
                d="M450 230L550 230L550 280L450 280Z"
                fill={getStateColor('KS')}
                stroke={getStateStroke('KS')}
                strokeWidth="1"
              />

              {/* Oklahoma */}
              <path
                d="M450 280L580 280L580 330L450 330Z"
                fill={getStateColor('OK')}
                stroke={getStateStroke('OK')}
                strokeWidth="1"
              />

              {/* Texas */}
              <path
                d="M450 330L580 330L580 450L400 450L400 380L450 380Z"
                fill={getStateColor('TX')}
                stroke={getStateStroke('TX')}
                strokeWidth="2"
              />

              {/* Minnesota */}
              <path
                d="M550 50L620 50L620 150L550 150Z"
                fill={getStateColor('MN')}
                stroke={getStateStroke('MN')}
                strokeWidth="1"
              />

              {/* Iowa */}
              <path
                d="M550 150L620 150L620 200L550 200Z"
                fill={getStateColor('IA')}
                stroke={getStateStroke('IA')}
                strokeWidth="1"
              />

              {/* Missouri */}
              <path
                d="M550 200L650 200L650 280L550 280Z"
                fill={getStateColor('MO')}
                stroke={getStateStroke('MO')}
                strokeWidth="1"
              />

              {/* Arkansas */}
              <path
                d="M580 280L650 280L650 330L580 330Z"
                fill={getStateColor('AR')}
                stroke={getStateStroke('AR')}
                strokeWidth="1"
              />

              {/* Louisiana */}
              <path
                d="M580 330L650 330L650 400L580 400Z"
                fill={getStateColor('LA')}
                stroke={getStateStroke('LA')}
                strokeWidth="1"
              />

              {/* Wisconsin */}
              <path
                d="M620 50L680 50L680 150L620 150Z"
                fill={getStateColor('WI')}
                stroke={getStateStroke('WI')}
                strokeWidth="1"
              />

              {/* Illinois */}
              <path
                d="M620 150L680 150L680 230L620 230Z"
                fill={getStateColor('IL')}
                stroke={getStateStroke('IL')}
                strokeWidth="1"
              />

              {/* Michigan */}
              <path
                d="M680 80L750 80L750 180L680 180Z"
                fill={getStateColor('MI')}
                stroke={getStateStroke('MI')}
                strokeWidth="1"
              />

              {/* Indiana */}
              <path
                d="M680 150L730 150L730 230L680 230Z"
                fill={getStateColor('IN')}
                stroke={getStateStroke('IN')}
                strokeWidth="1"
              />

              {/* Ohio */}
              <path
                d="M730 120L800 120L800 230L730 230Z"
                fill={getStateColor('OH')}
                stroke={getStateStroke('OH')}
                strokeWidth="1"
              />

              {/* Kentucky */}
              <path
                d="M650 230L780 230L780 280L650 280Z"
                fill={getStateColor('KY')}
                stroke={getStateStroke('KY')}
                strokeWidth="1"
              />

              {/* Tennessee */}
              <path
                d="M650 280L800 280L800 320L650 320Z"
                fill={getStateColor('TN')}
                stroke={getStateStroke('TN')}
                strokeWidth="1"
              />

              {/* Mississippi */}
              <path
                d="M650 320L700 320L700 400L650 400Z"
                fill={getStateColor('MS')}
                stroke={getStateStroke('MS')}
                strokeWidth="1"
              />

              {/* Alabama */}
              <path
                d="M700 320L750 320L750 400L700 400Z"
                fill={getStateColor('AL')}
                stroke={getStateStroke('AL')}
                strokeWidth="1"
              />

              {/* Georgia */}
              <path
                d="M750 280L820 280L820 380L750 380Z"
                fill={getStateColor('GA')}
                stroke={getStateStroke('GA')}
                strokeWidth="1"
              />

              {/* Florida */}
              <path
                d="M750 380L850 380L880 420L850 460L750 460Z"
                fill={getStateColor('FL')}
                stroke={getStateStroke('FL')}
                strokeWidth="1"
              />

              {/* South Carolina */}
              <path
                d="M780 280L850 280L850 330L780 330Z"
                fill={getStateColor('SC')}
                stroke={getStateStroke('SC')}
                strokeWidth="1"
              />

              {/* North Carolina */}
              <path
                d="M780 230L880 230L880 280L780 280Z"
                fill={getStateColor('NC')}
                stroke={getStateStroke('NC')}
                strokeWidth="1"
              />

              {/* Virginia */}
              <path
                d="M780 180L880 180L880 230L780 230Z"
                fill={getStateColor('VA')}
                stroke={getStateStroke('VA')}
                strokeWidth="1"
              />

              {/* West Virginia */}
              <path
                d="M750 180L780 180L780 230L750 230Z"
                fill={getStateColor('WV')}
                stroke={getStateStroke('WV')}
                strokeWidth="1"
              />

              {/* Pennsylvania */}
              <path
                d="M750 120L850 120L850 180L750 180Z"
                fill={getStateColor('PA')}
                stroke={getStateStroke('PA')}
                strokeWidth="1"
              />

              {/* New York */}
              <path
                d="M800 50L900 50L900 120L800 120Z"
                fill={getStateColor('NY')}
                stroke={getStateStroke('NY')}
                strokeWidth="1"
              />

              {/* Vermont */}
              <path
                d="M850 50L880 50L880 120L850 120Z"
                fill={getStateColor('VT')}
                stroke={getStateStroke('VT')}
                strokeWidth="1"
              />

              {/* New Hampshire */}
              <path
                d="M880 50L910 50L910 120L880 120Z"
                fill={getStateColor('NH')}
                stroke={getStateStroke('NH')}
                strokeWidth="1"
              />

              {/* Maine */}
              <path
                d="M910 50L950 50L950 150L910 150Z"
                fill={getStateColor('ME')}
                stroke={getStateStroke('ME')}
                strokeWidth="1"
              />

              {/* Massachusetts */}
              <path
                d="M850 120L920 120L920 140L850 140Z"
                fill={getStateColor('MA')}
                stroke={getStateStroke('MA')}
                strokeWidth="1"
              />

              {/* Rhode Island */}
              <path
                d="M920 120L930 120L930 140L920 140Z"
                fill={getStateColor('RI')}
                stroke={getStateStroke('RI')}
                strokeWidth="1"
              />

              {/* Connecticut */}
              <path
                d="M850 140L900 140L900 160L850 160Z"
                fill={getStateColor('CT')}
                stroke={getStateStroke('CT')}
                strokeWidth="1"
              />

              {/* New Jersey */}
              <path
                d="M830 140L850 140L850 180L830 180Z"
                fill={getStateColor('NJ')}
                stroke={getStateStroke('NJ')}
                strokeWidth="1"
              />

              {/* Delaware */}
              <path
                d="M820 160L830 160L830 180L820 180Z"
                fill={getStateColor('DE')}
                stroke={getStateStroke('DE')}
                strokeWidth="1"
              />

              {/* Maryland */}
              <path
                d="M800 160L820 160L820 180L800 180Z"
                fill={getStateColor('MD')}
                stroke={getStateStroke('MD')}
                strokeWidth="1"
              />

              {/* State labels for active practice states */}
              {activePracticeStates.includes('TX') && (
                <text x="515" y="390" textAnchor="middle" className="text-sm font-bold fill-white">
                  TX
                </text>
              )}
            </svg>
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