import React from 'react';
import {
  FaSwimmingPool,
  FaDumbbell,
  FaTree,
  FaCarAlt,
  FaShieldAlt,
  FaGamepad,
} from 'react-icons/fa';

const amenities = [
  {
    title: 'Swimming Pool',
    icon: <FaSwimmingPool className="text-white w-6 h-6" />,
    description:
      'Resort-style swimming pools with separate areas for adults and children.',
    bgColor: 'bg-[#64C0ED]',
  },
  {
    title: 'Fitness Center',
    icon: <FaDumbbell className="text-white w-6 h-6" />,
    description:
      'Fully equipped gymnasium with modern equipment and personal training.',
    bgColor: 'bg-[#E62F35]',
  },
  {
    title: 'Landscaped Gardens',
    icon: <FaTree className="text-white w-6 h-6" />,
    description:
      'Beautiful gardens and green spaces for relaxation and recreation.',
    bgColor: 'bg-[#64C0ED]',
  },
  {
    title: 'Covered Parking',
    icon: <FaCarAlt className="text-white w-6 h-6" />,
    description:
      'Secure covered parking spaces for residents and visitors.',
    bgColor: 'bg-[#E62F35]',
  },
  {
    title: '24/7 Security',
    icon: <FaShieldAlt className="text-white w-6 h-6" />,
    description:
      'Round-the-clock security with CCTV surveillance and trained guards.',
    bgColor: 'bg-[#64C0ED]',
  },
  {
    title: 'Recreation Areas',
    icon: <FaGamepad className="text-white w-6 h-6" />,
    description:
      "Children's play areas, community halls, and recreational facilities.",
    bgColor: 'bg-[#E62F35]',
  },
];

const AmenitiesSection = () => {
  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Blur Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#64C0ED] rounded-full blur-3xl opacity-10 -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E62F35] rounded-full blur-3xl opacity-10 -z-10" />

      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Premium <span className="text-[#64C0ED]">Amenities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern amenities and features that enhance your living experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 ${amenity.bgColor}`}
              >
                {amenity.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {amenity.title}
              </h3>
              <p className="text-gray-600 text-sm">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
