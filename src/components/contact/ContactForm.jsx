import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const ContactForm = () => {
  /* ---------------- state ---------------- */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  /* ---------------- static data ---------------- */
  const services = [
    'Construction',
    'Architecture',
    'Interior Design',
    'Vastu Consultation',

  ];

  const contactInfo = [
    {
      title: 'Visit Our Office',
      details: [
        ' 2nd Floor, Abhishek Tower,  Subhash Road, opposite ST.JOSEPH SCHOOL, Irrigation Colony, Karanpur, Dehradun, Uttarakhand 248001'
      ],
      icon: <FaMapMarkerAlt className="text-white text-lg" />,
      color: '#64C0ED',
    },
    {
      title: 'Call Us',
      details: ['+91‑7900309090'],
      icon: <FaPhoneAlt className="text-white text-lg" />,
      color: '#E62F35',
    },
    {
      title: 'Email Us',
      details: ['info@propdoon.com'],
      icon: <FaEnvelope className="text-white text-lg" />,
      color: '#64C0ED',
    },
  ];

  /* ---------------- jsx ---------------- */
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ============ FORM ============ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we&rsquo;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* name + email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#64C0ED] outline-none"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#64C0ED] outline-none"
                />
              </div>

              {/* phone + service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#64C0ED] outline-none"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#64C0ED] outline-none"
                >
                  <option value="">Looking for Properties</option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* message */}
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#64C0ED] outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#E62F35] hover:bg-[#c92b2f] text-white rounded-lg py-4 text-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ============ INFO ============ */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8">
              Reach out through any channel below — we&rsquo;re happy to help.
            </p>

            <div className="space-y-8">
              {contactInfo.map(({ title, details, icon, color }, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: color }}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    {details.map((d, idx) => (
                      <p key={idx} className="text-gray-600">
                        {d}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* socials */}
            <h3 className="text-lg font-semibold mt-12 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition"
                  style={{ background: '#64C0ED' }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
