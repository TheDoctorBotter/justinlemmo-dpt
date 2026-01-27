import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  condition: string;
  rating: number;
  text: string;
  timeframe: string;
}

interface TestimonialsProps {
  id?: string;
}
const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    condition: "Auto Accident Recovery",
    rating: 5,
    text: "After my car accident, I was in constant pain. Dr. Lemmo created a personalized treatment plan that got me back to normal. His expertise and dedication to my recovery made all the difference.",
    timeframe: "3 months ago"
  },
  {
    name: "Michael R.",
    condition: "Work Injury",
    rating: 5,
    text: "I injured my shoulder at work and needed to get back on the job quickly. Dr. Lemmo's treatment plan was thorough and effective. I was back to work sooner than expected with full range of motion.",
    timeframe: "2 months ago"
  },
  {
    name: "Jennifer L.",
    condition: "Lower Back Pain",
    rating: 5,
    text: "Years of chronic back pain and Dr. Lemmo finally helped me find relief. His approach is hands-on and he genuinely cares about your progress. I recommend Buckeye Physical Therapy to everyone.",
    timeframe: "1 month ago"
  },
  {
    name: "David K.",
    condition: "Knee Rehabilitation",
    rating: 5,
    text: "Post-surgery rehabilitation with Dr. Lemmo was excellent. He took the time to explain every exercise and adjusted my program as I progressed. I'm now stronger than before my injury.",
    timeframe: "4 months ago"
  },
  {
    name: "Lisa T.",
    condition: "Personal Injury Case",
    rating: 5,
    text: "My attorney recommended Buckeye Physical Therapy for my injury case. Dr. Lemmo provided excellent care and thorough documentation. The staff was professional and accommodating with scheduling.",
    timeframe: "2 months ago"
  },
  {
    name: "Mark S.",
    condition: "Neck and Shoulder Pain",
    rating: 5,
    text: "Dr. Lemmo addressed both my neck and shoulder issues comprehensively. His treatment approach saved me time and delivered results. Professional care at its finest.",
    timeframe: "6 weeks ago"
  }
];

export const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how virtual physical therapy has helped patients achieve their recovery goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-500 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.condition}</p>
                  </div>
                  <p className="text-sm text-gray-500">{testimonial.timeframe}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your recovery journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:956-476-5310"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Call (956) 476-5310
            </a>
            <a
              href="#contact"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};