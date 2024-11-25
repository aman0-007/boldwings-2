import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="About BoldWings"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-gray-600 mb-6">
              At BoldWings, we believe in transforming dreams into reality. With our state-of-the-art facilities and industry-experienced instructors, we provide comprehensive training programs in aviation and hospitality sectors.
            </p>
            <p className="text-gray-600">
              Our commitment to excellence, coupled with practical training methodologies, ensures that our students are well-prepared for successful careers in their chosen fields. We take pride in our track record of producing industry-ready professionals who make significant contributions to their respective sectors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;