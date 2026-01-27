import React from 'react';
import { Activity, Car, Briefcase, Heart, Phone, Mail } from 'lucide-react';

interface ServicesProps {
  id?: string;
}

const services = [
  {
    icon: Car,
    title: 'Auto Accident Rehabilitation',
    description: 'Comprehensive treatment for injuries sustained in motor vehicle accidents. We help you recover from whiplash, back injuries, and other trauma.',
    color: 'blue',
  },
  {
    icon: Briefcase,
    title: 'Work Injury Recovery',
    description: 'Specialized care for workplace injuries. We work with you and your employer to get you back to work safely and efficiently.',
    color: 'green',
  },
  {
    icon: Activity,
    title: 'Orthopedic Rehabilitation',
    description: 'Expert treatment for musculoskeletal conditions including back pain, neck pain, shoulder injuries, knee problems, and post-surgical recovery.',
    color: 'purple',
  },
  {
    icon: Heart,
    title: 'General Physical Therapy',
    description: 'Personalized treatment plans for a wide range of conditions. Whether recovering from surgery or managing chronic pain, we are here to help.',
    color: 'red',
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case 'blue':
      return { bg: 'bg-blue-100', text: 'text-blue-600' };
    case 'green':
      return { bg: 'bg-green-100', text: 'text-green-600' };
    case 'purple':
      return { bg: 'bg-purple-100', text: 'text-purple-600' };
    case 'red':
      return { bg: 'bg-red-100', text: 'text-red-600' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-600' };
  }
};

export const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive physical therapy services tailored to your specific needs and recovery goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg mb-4 ${colors.bg}`}>
                  <Icon className={`h-8 w-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Payment Options */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Options</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Attorney Lien / Letter of Protection</h4>
              <p className="text-gray-600">
                If you have been injured due to someone else's negligence, we accept attorney liens.
                This means you pay nothing upfront — your treatment is covered through your legal case settlement.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Private Pay</h4>
              <p className="text-gray-600">
                We offer competitive self-pay rates with transparent pricing. No insurance headaches,
                no surprise bills. Just quality care at fair prices.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Recovery?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Contact us today to schedule an appointment or learn more about how we can help with your rehabilitation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:956-476-5310"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (956) 476-5310
            </a>
            <a
              href="mailto:buckeyephysicaltherapy@gmail.com"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
