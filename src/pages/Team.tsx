import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'John Smith',
    designation: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
    intro: 'With over 15 years of experience in aviation training and management.',
  },
  {
    name: 'Sarah Johnson',
    designation: 'Head of Aviation Training',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    intro: 'Former commercial pilot with extensive training experience.',
  },
  {
    name: 'Michael Chen',
    designation: 'Head of Hospitality',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    intro: 'Expert in hospitality management and customer service training.',
  },
  {
    name: 'Emma Williams',
    designation: 'Student Relations Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    intro: 'Dedicated to ensuring the best experience for our students.',
  },
];

const Team = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-[#f9df54] font-medium mb-3">{member.designation}</p>
                <p className="text-gray-600">{member.intro}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;