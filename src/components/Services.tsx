import React from 'react';
import { Baby, Blocks, Briefcase, Activity, Heart, Phone, Mail } from 'lucide-react';

interface ServicesProps {
  id?: string;
}

const services = [
  {
    icon: Baby,
    title: 'Early Intervention (Birth–3)',
    description: 'In-home physical therapy for infants and toddlers from birth through three years of age, built around your family’s daily routines.',
  },
  {
    icon: Blocks,
    title: 'Pediatric Physical Therapy',
    description: 'Play-based treatment for developmental delays, gross motor skills, gait and balance, torticollis, and low muscle tone.',
  },
  {
    icon: Activity,
    title: 'Orthopedic Rehabilitation',
    description: 'Expert treatment for musculoskeletal conditions including back, neck, shoulder, and knee problems.',
  },
  {
    icon: Briefcase,
    title: 'Work Injury Recovery',
    description: 'Specialized care to help you recover from workplace injuries and return to work safely.',
  },
  {
    icon: Heart,
    title: 'General Physical Therapy',
    description: 'Personalized treatment plans for a wide range of conditions and post-surgical recovery.',
  },
];

export const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Pediatric and early intervention therapy, plus orthopedic care for older children and adults.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="card p-6">
                <div className="w-12 h-12 bg-scarlet/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-scarlet" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Payment Options */}
        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Payment Options</h3>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Cash Pay</h4>
              <p className="text-gray-600 text-sm">
                Competitive self-pay rates with transparent pricing. No insurance hassles.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 bg-scarlet rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Ready to Start Your Recovery?</h3>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Contact us today to schedule an evaluation and take the first step toward recovery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9564765310"
              className="inline-flex items-center justify-center bg-white text-scarlet px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
              (956) 476-5310
            </a>
            <a
              href="mailto:buckeyephysicaltherapy@gmail.com"
              className="btn-dark px-8 py-4"
            >
              <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
