import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    title: "BoldWings",
    subtitle: "Where Dreams Come True"
  },
  {
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    title: "Give Your Future",
    subtitle: "Bold Wings in Aviation"
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    title: "Give Your Skills",
    subtitle: "Bold Wings in Hospitality"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5 }}
            className="absolute inset-0 bg-cover bg-center transform"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="text-white">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl md:text-3xl"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;