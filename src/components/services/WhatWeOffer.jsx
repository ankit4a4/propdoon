import React from 'react';
import { motion } from 'framer-motion';
import { GiBrickWall, GiPencilRuler, GiPaintBrush } from 'react-icons/gi';
import { MdExplore } from 'react-icons/md';

const WhatWeOffer = () => {
  const services = [
    {
      id: 'construction',
      title: 'Construction',
      icon: <GiBrickWall className="w-8 h-8" />,
      description: 'Professional construction services for residential and commercial projects',
      color: 'bg-[#E62F35]'
    },
    {
      id: 'architecture',
      title: 'Architecture',
      icon: <GiPencilRuler className="w-8 h-8" />,
      description: 'Innovative architectural designs that blend aesthetics with functionality',
      color: 'bg-[#64C0ED]'
    },
    {
      id: 'interior',
      title: 'Interior Design',
      icon: <GiPaintBrush className="w-8 h-8" />,
      description: 'Transform your spaces with beautiful and functional interior designs',
      color: 'bg-[#E62F35]'
    },
    {
      id: 'vastu',
      title: 'Vastushastra',
      icon: <MdExplore className="w-8 h-8" />,
      description: 'Traditional Vastu consultation for harmonious and prosperous living',
      color: 'bg-[#64C0ED]'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative md:py-20 py-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider text-[#E62F35] uppercase mb-3">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-[#E62F35]">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to completion, we provide end-to-end services to bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center border border-gray-100 group-hover:border-[#E62F35]/20 relative overflow-hidden">
                {/* Hover effect background */}
                <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon container */}
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;