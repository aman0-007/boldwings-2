import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const lifeContent = [
  {
    type: 'image',
    content: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&h=650&q=80',
    caption: 'Creating Future Leaders in Aviation & Hospitality',
  },
  {
    type: 'quote',
    content: 'Life at BoldWings is not just about textbook learning; it is about building industry confidence, poise, and transforming dreams into an international career.',
    author: 'Pooja Verma',
    role: 'Cabin Crew Alumna, Emirates',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    type: 'image',
    content: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&h=650&q=80',
    caption: 'Hands-on In-Flight Safety & Emergency Protocol Drills',
  },
  {
    type: 'image',
    content: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&h=650&q=80',
    caption: 'Interactive Classroom Workshops and Grooming Sessions',
  },
  {
    type: 'quote',
    content: 'The practical exposure, airline-mock aircraft cabins, and real interview grooming at BoldWings prepared us for every stage of airline selections.',
    author: 'Rohan Mehta',
    role: 'Customer Service Officer, Air India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    type: 'image',
    content: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&h=650&q=80',
    caption: 'Collaborative Team Building & Airport Operations Simulations',
  },
];

const Life = () => {
  return (
    <div className="pt-20">
      {/* Top Banner with Proper Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1920&q=80"
          alt="Life at BoldWings"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/75 to-gray-900/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            Life at BoldWings
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-200"
          >
            Experience dynamic training, real-world simulations, vibrant campus culture, and lifelong friendships.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-12 max-w-4xl mx-auto">
          {lifeContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="w-full"
            >
              {item.type === 'image' && (
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-white group">
                  <div className="relative h-72 md:h-96 overflow-hidden">
                    <img
                      src={item.content}
                      alt={item.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-base md:text-lg font-semibold text-gray-800">{item.caption}</p>
                  </div>
                </div>
              )}

              {item.type === 'quote' && (
                <div className="p-8 bg-gradient-to-r from-amber-50 to-yellow-50/70 border border-yellow-200/60 rounded-xl shadow-sm relative flex flex-col md:flex-row items-center gap-6">
                  <Quote className="absolute top-4 right-4 h-10 w-10 text-[#f9df54]/30" />
                  <img
                    src={item.avatar}
                    alt={item.author}
                    width="80"
                    height="80"
                    loading="lazy"
                    decoding="async"
                    className="w-20 h-20 rounded-full object-cover border-2 border-[#f9df54] flex-shrink-0 shadow-sm"
                  />
                  <div className="text-center md:text-left">
                    <p className="text-lg md:text-xl italic text-gray-800 mb-3 leading-relaxed">
                      "{item.content}"
                    </p>
                    <p className="text-gray-900 font-bold">{item.author}</p>
                    <p className="text-amber-700 text-sm font-medium">{item.role}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Life;