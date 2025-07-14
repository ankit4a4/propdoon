import React from 'react';
import { motion } from 'framer-motion';
import {
  RiBuildingLine,
  RiSearchEyeLine,
  RiFilePaper2Line,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';

const RoiInvestmentProcess = () => {
  const steps = [
    {
      step: '01',
      title: 'Property Selection',
      description:
        'Choose from our curated portfolio of high‑ROI investment properties.',
      Icon: RiBuildingLine,
    },
    {
      step: '02',
      title: 'Due Diligence',
      description:
        'Comprehensive analysis and site visit to understand the investment potential.',
      Icon: RiSearchEyeLine,
    },
    {
      step: '03',
      title: 'Documentation',
      description:
        'Complete legal documentation and registration process with transparency.',
      Icon: RiFilePaper2Line,
    },
    {
      step: '04',
      title: 'Income Generation',
      description:
        'Start receiving regular rental income and track your investment performance.',
      Icon: RiMoneyDollarCircleLine,
    },
  ];

  /*  Animation presets  */
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10, duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/*  Blur gradient decorations  */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#E62F35] rounded-full blur-3xl opacity-20 mix-blend-multiply" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#64C0ED] rounded-full blur-3xl opacity-20 mix-blend-multiply" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 max-w-7xl">
        {/*  Heading  */}
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
            Investment <span className="text-[#64C0ED]">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple and transparent process to start your real‑estate investment journey
          </p>
        </motion.div>

        {/*  Steps Grid  */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map(({ step, title, description, Icon }, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
              className="group"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 group-hover:border-[#64C0ED]/20 relative overflow-hidden">
                {/*  Step badge  */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#E62F35] text-white font-bold text-lg flex items-center justify-center rounded-bl-xl">
                  {step}
                </div>

                {/*  Icon  */}
                <div className="w-16 h-16 bg-[#64C0ED]/10 rounded-full flex items-center justify-center text-3xl mb-6 text-[#64C0ED] group-hover:bg-[#64C0ED]/20 transition-colors duration-300">
                  <Icon />
                </div>

                {/*  Content  */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 flex-grow">{description}</p>

                {/*  Connector line (hidden on last)  */}
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-1 bg-gray-200 group-hover:bg-[#64C0ED] transition-colors duration-300">
                    <div className="absolute right-0 w-4 h-1 bg-[#64C0ED] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoiInvestmentProcess;
