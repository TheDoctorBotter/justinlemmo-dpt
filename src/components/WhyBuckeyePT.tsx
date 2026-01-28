import React from 'react';
import { Award, UserCheck, Target, Shield } from 'lucide-react';

const benefits = [
  {
    icon: UserCheck,
    title: '1-on-1 Care',
    description: 'Every session is with Dr. Lemmo—no handoffs to aides or techs.',
  },
  {
    icon: Award,
    title: '15+ Years Experience',
    description: 'Doctorate in Physical Therapy with extensive orthopedic expertise.',
  },
  {
    icon: Target,
    title: 'Evidence-Based',
    description: 'Treatment plans backed by current research and best practices.',
  },
  {
    icon: Shield,
    title: 'Flexible Payment',
    description: 'Cash pay and attorney liens accepted. No insurance hassles.',
  },
];

export const WhyBuckeyePT: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="section-padding bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="section-title">Why Buckeye Physical Therapy?</h2>
            <p className="text-gray-600 mb-8">
              At Buckeye Physical Therapy, you're not just another patient number. Dr. Justin Lemmo, PT, DPT
              provides personalized, hands-on care focused on getting you back to your life—faster and stronger.
            </p>

            <div className="space-y-6">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-scarlet/10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <Icon className="h-5 w-5 text-scarlet" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Credentials Card */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-scarlet/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-scarlet" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Justin Lemmo, PT, DPT</h3>
              <p className="text-gray-600">Doctor of Physical Therapy</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">License</span>
                <span className="font-medium text-gray-900">Texas #1215276</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Experience</span>
                <span className="font-medium text-gray-900">15+ Years</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200">
                <span className="text-gray-600">Specialty</span>
                <span className="font-medium text-gray-900">Orthopedics</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-gray-600">Location</span>
                <span className="font-medium text-gray-900">Edinburg, TX</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a href="tel:9564765310" className="btn-primary w-full justify-center">
                Schedule with Dr. Lemmo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
