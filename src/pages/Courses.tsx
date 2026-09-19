import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    title: 'Aviation Management',
    subtitle: 'Comprehensive training in airline operations, airport logistics, and air traffic systems.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    duration: '12 Months',
    eligibility: '10+2 / Graduate',
  },
  {
    title: 'Cabin Crew Training',
    subtitle: 'Professional flight attendant certification covering inflight safety, grooming, and first aid.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=800&q=80',
    duration: '6 Months',
    eligibility: '10+2 Pass',
  },
  {
    title: 'Hospitality Management',
    subtitle: 'Expert training in 5-star hospitality services, customer relations, and luxury guest service.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    duration: '10 Months',
    eligibility: '10+2 / Graduate',
  },
  {
    title: 'Ground Staff Training',
    subtitle: 'Complete airport operations, check-in terminal management, boarding gates, and ticketing.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    duration: '6 Months',
    eligibility: '10+2 Pass',
  },
  {
    title: 'Airport Security & Ramp Operations',
    subtitle: 'Specialized training in baggage handling, apron safety, and airside ground control protocols.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    duration: '6 Months',
    eligibility: '10+2 Pass',
  },
  {
    title: 'Aviation English & Personality Grooming',
    subtitle: 'Intensive communication mastery, accent neutralisation, interview skills, and airline etiquette.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    duration: '3 Months',
    eligibility: 'All Enrolled Students',
  },
];

const Courses = () => {
  return (
    <div className="pt-20">
      {/* Hero Banner with Proper Image */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1920&q=80"
          alt="Aviation Courses Banner"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/75 to-gray-900/60" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Professional Aviation Courses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200"
          >
            Industry-certified training programs engineered to kickstart your career with premier international airlines.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 bg-[#f9df54] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                  {course.duration}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                  {course.subtitle}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1 text-[#f9df54]" />
                    {course.duration}
                  </span>
                  <span className="flex items-center">
                    <Award className="w-3.5 h-3.5 mr-1 text-[#f9df54]" />
                    {course.eligibility}
                  </span>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-gray-50 group-hover:bg-[#f9df54] text-gray-800 font-semibold rounded-lg text-sm transition-colors duration-200"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;