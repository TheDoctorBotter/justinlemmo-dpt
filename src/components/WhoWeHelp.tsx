import React from 'react';
import { Car, Briefcase, Activity, Dumbbell, Stethoscope, Users } from 'lucide-react';

const conditions = [
  {
    icon: Car,
    title: 'Auto Accidents',
    description: 'Whiplash, back injuries, and trauma from motor vehicle accidents.',
  },
  {
    icon: Briefcase,
    title: 'Work Injuries',
    description: 'Repetitive strain, lifting injuries, and workplace accidents.',
  },
  {
    icon: Activity,
    title: 'Back & Neck Pain',
    description: 'Herniated discs, sciatica, chronic pain, and spinal conditions.',
  },
  {
    icon: Dumbbell,
    title: 'Sports Injuries',
    description: 'Sprains, strains, tendinitis, and return-to-sport rehab.',
  },
  {
    icon: Stethoscope,
    title: 'Post-Surgery',
    description: 'Joint replacements, rotator cuff repairs, ACL reconstruction.',
  },
  {
    icon: Users,
    title: 'General Orthopedic',
    description: 'Shoulder, knee, hip pain, and musculoskeletal conditions.',
  },
];

export const WhoWeHelp: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-title">Who We Help</h2>
          <p className="section-subtitle">
            We treat a wide range of conditions with personalized, evidence-based care.
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
