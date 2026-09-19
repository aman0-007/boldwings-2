import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Our Mission"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower individuals with the knowledge, skills, and confidence needed to excel in the aviation and hospitality industries, creating pathways to successful careers and personal growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?auto=format&fit=crop&w=800&q=80"
                alt="Our Vision"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading institution in aviation and hospitality education, recognized globally for excellence in training, innovation, and student success, while fostering a community of skilled professionals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;