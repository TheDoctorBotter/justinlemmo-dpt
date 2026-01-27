import React from 'react';
import { Award, Shield, MapPin, Phone, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-[#BB0000] text-white px-4 py-2 rounded-full mb-6">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="font-medium">Coming Soon to Edinburg, TX</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Buckeye Physical Therapy
            <span className="block text-[#BB0000] text-3xl md:text-4xl mt-2">Quality Care. Real Results.</span>
          </h2>

          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
            Led by <strong>Justin Lemmo, PT, DPT</strong> — a licensed Doctor of Physical Therapy with over
            15 years of experience in orthopedics and rehabilitation.
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We specialize in <strong>personal injury rehabilitation</strong>, <strong>attorney lien cases</strong>,
            and <strong>private pay physical therapy</strong> services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:956-476-5310"
              className="inline-flex items-center justify-center bg-[#BB0000] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#990000] transition-colors text-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (956) 476-5310
            </a>
            <a
              href="mailto:buckeyephysicaltherapy@gmail.com"
              className="inline-flex items-center justify-center bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="bg-[#BB0000] p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Personal Injury Specialists</h3>
              <p className="text-gray-600 text-center">Expert rehabilitation for auto accidents, work injuries, and personal injury cases</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="bg-gray-700 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Attorney Lien Accepted</h3>
              <p className="text-gray-600 text-center">We work directly with attorneys on lien-based cases — no upfront cost to patients</p>
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <div className="bg-gray-900 p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Private Pay Welcome</h3>
              <p className="text-gray-600 text-center">Affordable rates with transparent pricing — no insurance hassles or hidden fees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
