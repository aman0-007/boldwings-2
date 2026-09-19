import React from 'react';
import { motion } from 'framer-motion';
import { airlineLogos } from './AirlineLogos';

// Duplicate the array for seamless infinite scroll
const duplicatedCompanies = [...airlineLogos, ...airlineLogos];

const CompanyLogos = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Our Students Work At</h2>
          <p className="text-gray-600">Leading airlines trust BoldWings graduates</p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden w-full py-4">
        {/* Subtle edge fade overlays */}
        <div className="pointer-events-none absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        {/* Hardware-accelerated CSS marquee */}
        <div className="animate-marquee items-center space-x-12">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center h-24 w-52 px-4 py-2 bg-gray-50/80 rounded-xl border border-gray-100/80 shadow-sm filter grayscale hover:grayscale-0 hover:bg-white hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              title={company.name}
            >
              {company.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;