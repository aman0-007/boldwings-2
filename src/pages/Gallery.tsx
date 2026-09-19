import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon } from 'lucide-react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1600&q=85',
    title: 'Cabin Crew Safety & Evacuation Training',
    category: 'Cabin Crew',
  },
  {
    src: 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?auto=format&fit=crop&w=1600&q=85',
    title: '5-Star Hospitality & In-flight Food Service',
    category: 'Hospitality',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=85',
    title: 'Interactive Classroom Theory & Grooming',
    category: 'Academic',
  },
  {
    src: 'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&w=1600&q=85',
    title: 'Aircraft Systems & Cockpit Familiarization',
    category: 'Aviation',
  },
  {
    src: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1600&q=85',
    title: 'Student Life & Campus Community',
    category: 'Campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77c?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77c?auto=format&fit=crop&w=1600&q=85',
    title: 'Annual Aviation Conclave & Guest Lectures',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=85',
    title: 'Group Case Studies & Airline Presentations',
    category: 'Academic',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85',
    title: 'Leadership & Soft Skills Development',
    category: 'Grooming',
  },
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=85',
    title: 'Team Building & Crew Resource Management',
    category: 'Aviation',
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=85',
    title: 'Aviation English & Accent Neutralization',
    category: 'Academic',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=85',
    title: 'Student Team Discussions & Interview Prep',
    category: 'Campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1600&q=85',
    title: 'Navi Mumbai Training Facility Infrastructure',
    category: 'Facility',
  },
  {
    src: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1600&q=85',
    title: 'Mock Flight Simulation & Cabin Experience',
    category: 'Aviation',
  },
  {
    src: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?auto=format&fit=crop&w=1600&q=85',
    title: 'Ground Staff Baggage & Ramp Training',
    category: 'Ground Staff',
  },
  {
    src: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79?auto=format&fit=crop&w=1600&q=85',
    title: 'First Aid & Passenger Emergency Care',
    category: 'Safety',
  },
  {
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=85',
    title: 'Airport Terminal Management & Gates',
    category: 'Ground Staff',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=85',
    title: 'Luxury Hospitality Protocols & Banqueting',
    category: 'Hospitality',
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=85',
    title: 'Cultural Diversity & Global Passenger Relations',
    category: 'Grooming',
  },
  {
    src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1600&q=85',
    title: 'Rapid Emergency Evacuation Protocols',
    category: 'Safety',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80',
    fullSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85',
    title: 'Aviation Software & GDS Ticketing Systems',
    category: 'Ground Staff',
  },
];

const Gallery = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const closeModal = useCallback(() => {
    setActiveIdx(null);
  }, []);

  const prevImage = useCallback(() => {
    setActiveIdx((prev) => {
      if (prev === null) return null;
      return (prev - 1 + images.length) % images.length;
    });
  }, []);

  const nextImage = useCallback(() => {
    setActiveIdx((prev) => {
      if (prev === null) return null;
      return (prev + 1) % images.length;
    });
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (activeIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIdx, closeModal, prevImage, nextImage]);

  return (
    <div className="pt-20">
      {/* Gallery Hero Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1920&q=80"
          alt="BoldWings Gallery Banner"
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
            Campus Life & Training Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-200"
          >
            A glimpse into hands-on simulations, grooming drills, airline workshops, and alumni moments.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Training Moments</h2>
            <p className="text-gray-500 text-sm">Click any photo to view in full resolution</p>
          </div>
          <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
            <ImageIcon className="w-3.5 h-3.5 mr-1.5" />
            {images.length} High-Res Photos
          </span>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.08, duration: 0.4 }}
              className="mb-4"
            >
              <div
                onClick={() => setActiveIdx(index)}
                className="relative overflow-hidden rounded-xl group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 bg-gray-900"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                />
                
                {/* Category badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-black/60 text-white backdrop-blur-sm shadow">
                    {image.category}
                  </span>
                </div>

                {/* Hover overlay with maximize icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex flex-col justify-between p-4 transition-opacity duration-300">
                  <div className="self-end">
                    <span className="p-2 bg-[#f9df54] text-gray-900 rounded-full inline-flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold drop-shadow">
                      {image.title}
                    </p>
                    <span className="text-[#f9df54] text-xs font-medium mt-0.5 block">
                      Click to expand
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>

      {/* Lightweight Photo Modal Lightbox */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            onClick={closeModal}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Controls Bar */}
              <div className="w-full flex items-center justify-between pb-3 text-white">
                <div className="flex items-center space-x-3">
                  <span className="bg-[#f9df54] text-gray-900 font-bold text-xs px-2.5 py-1 rounded">
                    {images[activeIdx].category}
                  </span>
                  <span className="text-sm font-medium text-gray-300">
                    {activeIdx + 1} / {images.length}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={closeModal}
                    className="p-2 text-gray-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close photo preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="relative w-full flex items-center justify-center bg-black/40 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={images[activeIdx].fullSrc}
                  alt={images[activeIdx].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
                  loading="eager"
                />

                {/* Left Navigation Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#f9df54] hover:text-gray-900 transition-all shadow-lg hover:scale-105"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#f9df54] hover:text-gray-900 transition-all shadow-lg hover:scale-105"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="w-full pt-3 text-center">
                <p className="text-white text-base md:text-lg font-semibold drop-shadow">
                  {images[activeIdx].title}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Use Left / Right arrow keys to navigate &bull; Esc to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;