import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Capt. Rajesh Sharma',
    designation: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&h=500&q=80',
    intro: 'Former Senior Airline Commander with over 20 years of commercial aviation & academy leadership.',
  },
  {
    name: 'Sarah Johnson',
    designation: 'Head of Cabin Crew Training',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&h=500&q=80',
    intro: 'Former International Cabin Crew In-Charge with leading Gulf carriers, specializing in safety & grooming.',
  },
  {
    name: 'Michael Chen',
    designation: 'Head of Hospitality Services',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&h=500&q=80',
    intro: 'Experienced luxury hotelier with over 15 years directing customer service operations at 5-star chains.',
  },
  {
    name: 'Emma Williams',
    designation: 'Director of Career Placements',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&h=500&q=80',
    intro: 'Aviation recruiter dedicated to organizing campus recruitment drives with global airlines.',
  },
];

const Team = () => {
  return (
    <div className="pt-20">
      {/* Banner with Proper Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80"
          alt="BoldWings Faculty and Leadership Team"
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
            Our Mentors & Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-200"
          >
            Learn directly from seasoned airline captains, senior cabin managers, and hospitality directors.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-semibold text-sm mb-3">{member.designation}</p>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">{member.intro}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;