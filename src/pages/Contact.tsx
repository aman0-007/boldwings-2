import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

const locations = [
  {
    name: 'Vashi Campus',
    address: 'J-203, Tower 5, VRSCCL, Infotech International Park, Vashi, Navi Mumbai',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    tag: 'Main Academic Campus',
  },
  {
    name: 'Panvel Center',
    address: 'Shop 8-11, 1st Floor, Omkar Arcade, Opp. Railway Station, Panvel',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    tag: 'Practical Training Hub',
  },
];

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form submission:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20">
      {/* Banner with Proper Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
          alt="Contact BoldWings Admissions"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/75 to-gray-900/60" />
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-200"
          >
            Connect with our admissions counsellors and take your first step into aviation.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Send an Inquiry</h2>
            <p className="text-gray-600 text-sm mb-6">Our academic advisers typically respond within 24 hours.</p>
            
            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center text-emerald-800 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0" />
                <span>Thank you! Your message has been received. Our team will contact you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  {...register('name', { required: true })}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f9df54] focus:outline-none"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block">Name is required</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  placeholder="e.g. rahul@example.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f9df54] focus:outline-none"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block">Valid email is required</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  {...register('mobile', { required: true, pattern: /^[0-9]{10}$/ })}
                  placeholder="10-digit mobile number"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f9df54] focus:outline-none"
                />
                {errors.mobile && <span className="text-red-500 text-xs mt-1 block">Valid 10-digit mobile number is required</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Query / Course Interest</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  placeholder="Tell us about your background or the course you are interested in..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f9df54] focus:outline-none"
                />
                {errors.message && <span className="text-red-500 text-xs mt-1 block">Message is required</span>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#f9df54] text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors shadow-sm"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
          
          {/* Campuses & Contact Details with Photos */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Training Campuses</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {locations.map((location) => (
                  <div key={location.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={location.image}
                        alt={location.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 bg-gray-900/80 text-[#f9df54] text-[11px] font-semibold px-2 py-0.5 rounded">
                        {location.tag}
                      </span>
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm mb-1">{location.name}</h3>
                          <p className="text-gray-600 text-xs leading-relaxed">{location.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200/80 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Direct Contact & Helpline</h2>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div className="text-sm">
                  <span className="text-gray-500 block text-xs">Call Admissions Desk:</span>
                  <a href="tel:+918655620541" className="font-semibold text-gray-800 hover:text-amber-600 transition-colors mr-2">
                    +91 8655620541
                  </a>
                  <span className="text-gray-400">/</span>
                  <a href="tel:+918655620546" className="font-semibold text-gray-800 hover:text-amber-600 transition-colors ml-2">
                    +91 8655620546
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <div className="text-sm">
                  <span className="text-gray-500 block text-xs">Email Enquiries:</span>
                  <a href="mailto:info@boldwings.in" className="font-semibold text-gray-800 hover:text-amber-600 transition-colors">
                    info@boldwings.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;