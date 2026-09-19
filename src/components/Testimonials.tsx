import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Cabin Crew, Emirates',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80',
    quote: 'BoldWings transformed my dream of becoming a cabin crew member into reality. The practical training and industry exposure were invaluable.',
  },
  {
    name: 'Rahul Patel',
    role: 'Ground Staff, Air India',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
    quote: 'The comprehensive training program at BoldWings gave me the confidence to excel in my role.',
  },
  {
    name: 'Sarah Khan',
    role: 'Aviation Manager, Vistara',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80',
    quote: 'BoldWings provides not just education, but a complete transformation. Their focus on practical skills is exceptional.',
  },
  {
    name: 'Amit Singh',
    role: 'Flight Operations, IndiGo',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
    quote: 'The hands-on experience and industry connections at BoldWings helped me secure my dream job.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Hospitality Manager, Taj Hotels',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=160&h=160&q=80',
    quote: 'The hospitality training at BoldWings is world-class. They truly prepare you for the industry.',
  },
  {
    name: 'Mohammed Ali',
    role: 'Airport Operations, Qatar Airways',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80',
    quote: 'BoldWings gave me the confidence and skills to excel in international aviation operations.',
  },
  {
    name: 'Anjali Desai',
    role: 'Customer Service, Etihad Airways',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
    quote: 'The practical exposure and personality development programs at BoldWings are unmatched.',
  },
];

// Duplicate for infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-600">Hear from our successful alumni about their journey with BoldWings</p>
        </motion.div>

        <div className="relative overflow-hidden w-full py-4">
          <div className="pointer-events-none absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          <div className="animate-marquee-slow space-x-6 items-center">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="flex-none w-[380px] md:w-[420px] bg-white rounded-xl p-6 shadow-md border border-gray-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-[#f9df54]/30" />
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    width="64"
                    height="64"
                    loading="lazy"
                    decoding="async"
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#f9df54]/40"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                    <p className="text-amber-600 font-medium text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic text-sm leading-relaxed">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;