import React from 'react';
import { Calendar, ClipboardList, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    step: '1',
    title: 'Book',
    description: 'Call or text to schedule an evaluation. Same-week appointments often available.',
  },
  {
    icon: ClipboardList,
    step: '2',
    title: 'Evaluate',
    description: 'A comprehensive 1-on-1 assessment of your child’s movement, strength, and development.',
  },
  {
    icon: TrendingUp,
    step: '3',
    title: 'Recover',
    description: 'Follow a personalized plan built around your family’s routines, with hands-on care and home strategies.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started is simple. We make therapy accessible and straightforward for families.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-scarlet/10 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-scarlet" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-scarlet text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a href="tel:9564765310" className="btn-primary-lg">
            Schedule Your Evaluation
          </a>
        </div>
      </div>
    </section>
  );
};
