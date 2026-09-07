import React from 'react';
import { Baby, Blocks, Footprints, Briefcase, Activity, Dumbbell, Stethoscope, Users } from 'lucide-react';

const conditions = [
  {
    icon: Baby,
    title: 'Early Intervention (Birth\u20133)',
    description: 'In-home therapy for infants and toddlers with developmental delays, through ECI.',
  },
  {
    icon: Blocks,
    title: 'Developmental Delays',
    description: 'Delayed rolling, sitting, crawling, or walking, and low muscle tone.',
  },
  {
    icon: Footprints,
    title: 'Walking & Gait Concerns',
    description: 'Toe walking, in-toeing, frequent falls, and coordination difficulties.',
  },
  {
    icon: Activity,
    title: 'Torticollis & Plagiocephaly',
    description: 'Head tilt, neck tightness, and flat-head positioning in infants.',
  },
  {
    icon: Stethoscope,
    title: 'Pediatric Post-Surgery',
    description: 'Rehabilitation and return to play after orthopedic surgery.',
  },
  {
    icon: Dumbbell,
    title: 'Youth Sports Injuries',
    description: 'Sprains, strains, tendinitis, and safe return-to-sport rehab.',
  },
  {
    icon: Users,
    title: 'Orthopedic & Back Pain',
    description: 'Shoulder, knee, hip, neck, and back conditions in older children and adults.',
  },
  {
    icon: Briefcase,
    title: 'Work Injuries',
    description: 'Repetitive strain, lifting injuries, and workplace accidents.',
  },
];

export const WhoWeHelp: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-title">Who We Help</h2>
          <p className="section-subtitle">
            Pediatric physical therapy is our focus\u2014with orthopedic care available for the whole family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="card p-6">
                <div className="w-12 h-12 bg-scarlet/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-scarlet" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
