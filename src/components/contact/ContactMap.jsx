import React from 'react';

const ContactMap = () => {
  return (
    <section className="section-padding bg-[#f9f9f9] relative">
      {/* Decorative blur circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#64C0ED] rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E62F35] rounded-full blur-3xl opacity-10 -z-10" />

      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#64C0ED]">Find</span>{' '}
            <span className="text-[#E62F35]">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our office in Dehradun for in-person consultations
          </p>
        </div>

        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d440794.5767017074!2d78.05225!3d30.330833000000002!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE5JzUxLjAiTiA3OMKwMDMnMDguMSJF!5e0!3m2!1sen!2sus!4v1752478913408!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PropDoon Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;


