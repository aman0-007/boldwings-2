import React from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b',
    title: 'Cabin Crew Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4',
    title: 'Hospitality Service',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902',
    title: 'Classroom Sessions',
  },
  {
    src: 'https://images.unsplash.com/photo-1587019158091-1a103c5dd17f',
    title: 'Practical Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d',
    title: 'Student Life',
  },
  {
    src: 'https://images.unsplash.com/photo-1559599076-9c61d8e1b77c',
    title: 'Campus Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    title: 'Group Activities',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644',
    title: 'Leadership Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
    title: 'Team Building',
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    title: 'Aviation Workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    title: 'Student Collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
    title: 'Campus Life',
  },
  {
    src: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2',
    title: 'Flight Simulation',
  },
  {
    src: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e',
    title: 'Ground Staff Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1570126618953-d437176e8c79',
    title: 'Safety Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18',
    title: 'Airport Operations',
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    title: 'Hospitality Excellence',
  },
  {
    src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
    title: 'Cultural Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b',
    title: 'Emergency Response',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    title: 'Technology Integration',
  },
];

const Gallery = () => {
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Our Gallery</h1>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="mb-4"
            >
              <div className="relative overflow-hidden rounded-lg group">
                <motion.img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300"
                >
                  <p className="text-white text-lg font-semibold px-4 text-center">
                    {image.title}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </motion.div>
    </div>
  );
};

export default Gallery;