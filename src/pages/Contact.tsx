import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

const locations = [
  {
    name: 'Vashi',
    address: 'J-203, Tower 5, VRSCCL, Infotech International Park',
  },
  {
    name: 'Panvel',
    address: 'Shop 8-11, 1st Floor, Omkar Arcade',
  },
];

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-12"
      >
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  {...register('name', { required: true })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f9df54]"
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f9df54]"
                />
                {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Mobile</label>
                <input
                  {...register('mobile', { required: true, pattern: /^[0-9]{10}$/ })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f9df54]"
                />
                {errors.mobile && <span className="text-red-500 text-sm">Valid mobile number is required</span>}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#f9df54]"
                />
                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#f9df54] text-gray-900 py-2 rounded-lg hover:bg-[#f8f260] transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-6">Our Locations</h2>
              <div className="space-y-4">
                {locations.map((location) => (
                  <div key={location.name} className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#f9df54] mt-1" />
                    <div>
                      <h3 className="font-semibold">{location.name}</h3>
                      <p className="text-gray-600">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold mb-6">Contact Details</h2>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f9df54]" />
                <div>
                  <a href="tel:+918655620541" className="hover:text-[#f9df54]">+91 8655620541</a>
                  <span className="mx-2">/</span>
                  <a href="tel:+918655620546" className="hover:text-[#f9df54]">8655620546</a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f9df54]" />
                <a href="mailto:info@boldwings.in" className="hover:text-[#f9df54]">
                  info@boldwings.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;