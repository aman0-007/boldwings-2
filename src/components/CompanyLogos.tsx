import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Emirates', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg' },
  { name: 'Air India', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Air_India_Logo.svg' },
  { name: 'Vistara', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Vistara_Logo.svg' },
  { name: 'IndiGo', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/IndiGo_Airlines_logo.svg' },
  { name: 'SpiceJet', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/SpiceJet_Logo.svg' },
  { name: 'Qatar Airways', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Qatar_Airways_Logo.svg' },
  { name: 'Etihad Airways', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Etihad_Airways_logo_2014.svg' },
  { name: 'Singapore Airlines', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Singapore_Airlines_Logo_2.svg' },
];

// Duplicate the array for seamless infinite scroll
const duplicatedCompanies = [...companies, ...companies];

const CompanyLogos = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Our Students Work At</h2>
          <p className="text-gray-600">Leading airlines trust BoldWings graduates</p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -50 + '%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex items-center space-x-12 whitespace-nowrap"
        >
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center justify-center h-20 w-40"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyLogos;