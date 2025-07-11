import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRegBuilding,
  FaFileAlt,
  FaTruck,
  FaHardHat,
  FaCheckCircle,
  FaHome
} from 'react-icons/fa';

const ConstructionProcess = () => {
  const process = [
    {
      step: '01',
      title: 'Planning & Design',
      description: 'Detailed project planning, site analysis, and architectural design development',
      icon: <FaRegBuilding className="w-5 h-5" />,
      color: 'from-[#64C0ED] to-[#64C0ED]'
    },
    {
      step: '02',
      title: 'Permits & Approvals',
      description: 'Obtaining all necessary permits, approvals, and regulatory clearances',
      icon: <FaFileAlt className="w-5 h-5" />,
      color: 'from-[#E62F35] to-[#E62F35]'
    },
    {
      step: '03',
      title: 'Site Preparation',
      description: 'Site clearing, excavation, and foundation preparation work',
      icon: <FaTruck className="w-5 h-5" />,
      color: 'from-[#64C0ED] to-[#64C0ED]'
    },
    {
      step: '04',
      title: 'Construction Phase',
      description: 'Systematic construction following approved plans with quality monitoring',
      icon: <FaHardHat className="w-5 h-5" />,
      color: 'from-[#E62F35] to-[#E62F35]'
    },
    {
      step: '05',
      title: 'Quality Control',
      description: 'Regular inspections and quality checks at every stage of construction',
      icon: <FaCheckCircle className="w-5 h-5" />,
      color: 'from-[#64C0ED] to-[#64C0ED]'
    },
    {
      step: '06',
      title: 'Final Handover',
      description: 'Project completion, final inspection, and handover to the client',
      icon: <FaHome className="w-5 h-5" />,
      color: 'from-[#E62F35] to-[#E62F35]'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#64C0ED] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E62F35] rounded-full filter blur-3xl opacity-20 mix-blend-multiply"></div>
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
            Our Methodology
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Construction <span className="text-[#64C0ED]">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach ensuring quality, efficiency, and timely completion
          </p>
        </motion.div>

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
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-r ${step.color} text-white font-bold text-lg flex items-center justify-center rounded-bl-xl`}>
                  {step.step}
                </div>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-6 bg-gradient-to-r ${step.color} shadow-md`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionProcess;
