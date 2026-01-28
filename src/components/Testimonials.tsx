import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  condition: string;
  rating: number;
  text: string;
}

interface TestimonialsProps {
  id?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    condition: "Auto Accident Recovery",
    rating: 5,
    text: "After my car accident, I was in constant pain. Dr. Lemmo created a personalized treatment plan that got me back to normal. His expertise and dedication made all the difference.",
  },
  {
    name: "Michael R.",
    condition: "Work Injury",
    rating: 5,
    text: "I injured my shoulder at work and needed to get back on the job quickly. Dr. Lemmo's treatment was thorough and effective. I was back to work sooner than expected.",
  },
  {
    name: "Jennifer L.",
    condition: "Lower Back Pain",
    rating: 5,
    text: "Years of chronic back pain and Dr. Lemmo finally helped me find relief. His approach is hands-on and he genuinely cares about your progress.",
  },
  {
    name: "David K.",
    condition: "Knee Rehabilitation",
    rating: 5,
    text: "Post-surgery rehabilitation with Dr. Lemmo was excellent. He took the time to explain every exercise and adjusted my program as I progressed.",
  },
  {
    name: "Lisa T.",
    condition: "Personal Injury Case",
    rating: 5,
    text: "My attorney recommended Buckeye Physical Therapy. Dr. Lemmo provided excellent care and thorough documentation for my case.",
  },
  {
    name: "Mark S.",
    condition: "Neck & Shoulder Pain",
    rating: 5,
    text: "Dr. Lemmo addressed both my neck and shoulder issues comprehensively. His treatment approach saved me time and delivered results.",
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  return (
    <section id={id} className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Real results from real patients. See how we've helped others recover.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <Quote className="h-8 w-8 text-scarlet/30" aria-hidden="true" />
                <div className="flex" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.condition}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to start your recovery journey?</p>
          <a href="tel:9564765310" className="btn-primary-lg">
            Book Your Evaluation
          </a>
        </div>
      </div>
    </section>
  );
};
