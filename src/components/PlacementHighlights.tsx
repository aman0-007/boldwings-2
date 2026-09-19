import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, MapPin, CheckCircle2, Plane } from 'lucide-react';

export type Placement = {
  id: string;
  name: string;
  photo: string;
  airline: string;
  role: string;
  category: 'Cabin Crew' | 'Ground Staff' | 'Hospitality';
  batch: string;
  location: string;
  badgeColor: string;
  quote?: string;
};

const placementsData: Placement[] = [
  {
    id: '1',
    name: 'Ananya Deshmukh',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80',
    airline: 'Emirates',
    role: 'International Cabin Crew',
    category: 'Cabin Crew',
    batch: 'Batch of 2024',
    location: 'Dubai, UAE (DXB)',
    badgeColor: 'bg-red-600 text-white',
    quote: 'Selected in direct open campus interview at Mumbai.',
  },
  {
    id: '2',
    name: 'Rohan Salunkhe',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80',
    airline: 'Air India',
    role: 'Customer Service & Boarding Gate Officer',
    category: 'Ground Staff',
    batch: 'Batch of 2024',
    location: 'Mumbai (BOM)',
    badgeColor: 'bg-orange-600 text-white',
    quote: 'Trained on modern Amadeus airport departure control.',
  },
  {
    id: '3',
    name: 'Simran Kaur',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
    airline: 'Qatar Airways',
    role: 'Flight Attendant (Boeing 777 fleet)',
    category: 'Cabin Crew',
    batch: 'Batch of 2023',
    location: 'Doha, Qatar (DOH)',
    badgeColor: 'bg-[#5C0632] text-white',
    quote: 'Achieved my global dream within 8 months of joining.',
  },
  {
    id: '4',
    name: 'Vikramaditya Nair',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80',
    airline: 'IndiGo',
    role: 'Ramp Operations & Baggage Handling Executive',
    category: 'Ground Staff',
    batch: 'Batch of 2024',
    location: 'Delhi (DEL)',
    badgeColor: 'bg-blue-700 text-white',
    quote: 'Rigorous safety drill practice made selections effortless.',
  },
  {
    id: '5',
    name: 'Sneha Fernandez',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&h=400&q=80',
    airline: 'Taj Hotels & Resorts',
    role: 'Guest Experience & Front Office Executive',
    category: 'Hospitality',
    batch: 'Batch of 2024',
    location: 'Goa & Mumbai',
    badgeColor: 'bg-amber-800 text-white',
    quote: '5-star luxury grooming & conversational etiquette mastery.',
  },
  {
    id: '6',
    name: 'Aditya Kulkarni',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
    airline: 'Vistara (Air India Group)',
    role: 'Cabin Crew Executive (Domestic & Regional)',
    category: 'Cabin Crew',
    batch: 'Batch of 2023',
    location: 'Mumbai (BOM)',
    badgeColor: 'bg-purple-900 text-white',
    quote: 'Mock aircraft cabin sessions built total confidence.',
  },
  {
    id: '7',
    name: 'Pooja Iyer',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80',
    airline: 'Etihad Airways',
    role: 'Airport Premium Lounge Ambassador',
    category: 'Hospitality',
    batch: 'Batch of 2023',
    location: 'Abu Dhabi (AUH)',
    badgeColor: 'bg-amber-600 text-white',
    quote: 'Proud BoldWings alumna serving international VIP guests.',
  },
  {
    id: '8',
    name: 'Faizan Sheikh',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80',
    airline: 'SpiceJet',
    role: 'Airside Operations & Security Coordinator',
    category: 'Ground Staff',
    batch: 'Batch of 2024',
    location: 'Navi Mumbai & Pune',
    badgeColor: 'bg-red-500 text-white',
    quote: 'Hands-on ground equipment handling gave me the edge.',
  },
];

const categories = ['All Placements', 'Cabin Crew', 'Ground Staff', 'Hospitality'] as const;

const PlacementHighlights: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Placements');

  const filteredPlacements = selectedCategory === 'All Placements'
    ? placementsData
    : placementsData.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-50/70 border-t border-b border-gray-200/60 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f9df54]/25 border border-[#f9df54] text-gray-900 font-semibold text-xs tracking-wide uppercase mb-3">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Verified Alumni Success</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Student Placement Highlights
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our comprehensive aviation grooming and direct airline campus drives deliver industry-leading placement records.
          </p>

          {/* Placement Metric Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
              100% Placement Assistance
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-sm">
              <Plane className="w-3.5 h-3.5 text-[#f9df54] mr-1.5" />
              Domestic & Global Carriers
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-md bg-white border border-gray-200 text-xs font-semibold text-gray-800 shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-amber-500 mr-1.5" />
              Highest Package: 18+ LPA (International)
            </span>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-gray-200/70 rounded-xl space-x-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#f9df54] text-gray-900 shadow-sm'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Placement Cards Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredPlacements.map((student) => (
              <motion.div
                layout
                key={student.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Photo & Company Banner */}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={student.photo}
                    alt={student.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Airline Badge Tag */}
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold shadow-md ${student.badgeColor}`}>
                      {student.airline}
                    </span>
                  </div>

                  {/* Batch Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-black/65 text-white backdrop-blur-sm">
                      {student.batch}
                    </span>
                  </div>

                  {/* Category Pill at bottom of image */}
                  <div className="absolute bottom-2 left-3">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#f9df54] text-gray-900 font-bold text-[11px] shadow-sm">
                      {student.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors">
                      {student.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" title="Verified Placement" />
                  </div>

                  <p className="text-amber-700 font-semibold text-xs mb-2">
                    {student.role}
                  </p>

                  <div className="flex items-center text-xs text-gray-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-gray-400 flex-shrink-0" />
                    <span>{student.location}</span>
                  </div>

                  {student.quote && (
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <p className="text-gray-600 italic text-xs leading-relaxed">
                        "{student.quote}"
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementHighlights;
