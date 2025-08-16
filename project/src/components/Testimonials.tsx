import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  condition: string;
  rating: number;
  text: string;
  timeframe: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    condition: "Lower Back Pain",
    rating: 5,
    text: "Dr. Lemmo's virtual consultation was incredibly thorough. He helped me understand exactly how to use PTBot's recommendations and gave me the confidence to progress my recovery safely. My back pain has improved significantly!",
    timeframe: "3 months ago"
  },
  {
    name: "Michael R.",
    condition: "Shoulder Injury",
    rating: 5,
    text: "The custom recovery plan was exactly what I needed. The exercise videos were perfectly tailored to my injury, and the follow-up support kept me on track. Worth every penny.",
    timeframe: "2 months ago"  
  },
  {
    name: "Jennifer L.",
    condition: "Pediatric Development",
    rating: 5,
    text: "As a parent, I was worried about my son's gross motor delays. Dr. Lemmo provided clear guidance and exercises that we could do at home. We've seen remarkable progress in just a few weeks.",
    timeframe: "1 month ago"
  },
  {
    name: "David K.",
    condition: "Knee Pain",
    rating: 5,
    text: "The 3-month guided program transformed my recovery. Having Dr. Lemmo available for questions and adjustments made all the difference. I'm now pain-free and stronger than before my injury.",
    timeframe: "4 months ago"
  },
  {
    name: "Lisa T.",
    condition: "Hip Pain",
    rating: 5,
    text: "Working with Dr. Lemmo remotely was seamless. His expertise in combining PTBot's AI recommendations with personalized care gave me the best of both worlds. Highly recommend!",
    timeframe: "2 months ago"
  },
  {
    name: "Mark S.",
    condition: "Multiple Concerns",
    rating: 5,
    text: "Dr. Lemmo addressed both my shoulder and back issues comprehensively. His virtual approach saved me time and money while delivering professional-grade physical therapy care.",
    timeframe: "6 weeks ago"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
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
          <a
            href="#services"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Choose Your Package
          </a>
        </div>
      </div>
    </section>
  );
};