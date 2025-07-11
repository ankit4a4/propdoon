import React from 'react';
import { motion } from 'framer-motion';
import { FaRegComments, FaRulerCombined, FaPalette, FaDraftingCompass, FaCogs, FaStar } from 'react-icons/fa';

const InteDesignProcess = () => {
  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understanding your lifestyle, preferences, and design goals',
      icon: <FaRegComments className="w-5 h-5" />,
      color: 'from-[#E62F35] to-[#f98c87]',
    },
    {
      step: '02',
      title: 'Space Assessment',
      description: 'Detailed analysis of the space, measurements, and existing conditions',
      icon: <FaRulerCombined className="w-5 h-5" />,
      color: 'from-[#64C0ED] to-[#a5d8f5]',
    },
    {
      step: '03',
      title: 'Design Concept',
      description: 'Creating mood boards, color palettes, and initial design concepts',
      icon: <FaPalette className="w-5 h-5" />,
      color: 'from-[#E62F35] to-[#f98c87]',
    },
    {
      step: '04',
      title: 'Design Development',
      description: 'Detailed plans, 3D visualizations, and material selections',
      icon: <FaDraftingCompass className="w-5 h-5" />,
      color: 'from-[#64C0ED] to-[#a5d8f5]',
    },
    {
      step: '05',
      title: 'Implementation',
      description: 'Project management, procurement, and installation coordination',
      icon: <FaCogs className="w-5 h-5" />,
      color: 'from-[#E62F35] to-[#f98c87]',
    },
    {
      step: '06',
      title: 'Final Styling',
      description: 'Finishing touches, accessories, and final styling details',
      icon: <FaStar className="w-5 h-5" />,
      color: 'from-[#64C0ED] to-[#a5d8f5]',
    },
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
        damping: 10,
        duration: 0.5
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider text-[#E62F35] uppercase mb-3">
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interior <span className="text-[#64C0ED]">Design Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic journey from concept to creation, tailored to your unique lifestyle
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {process.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 group-hover:border-blue-100 relative overflow-hidden">
                {/* Step Number Label */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-r ${step.color} text-white font-bold text-lg flex items-center justify-center rounded-bl-xl`}>
                  {step.step}
                </div>
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 bg-gradient-to-r ${step.color} shadow-md`}>
                  {step.icon}
                </div>
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteDesignProcess;
