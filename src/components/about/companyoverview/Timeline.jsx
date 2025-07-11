import React from 'react';

const Timeline = () => {
  const milestones = [
    {
      year: '2012',
      title: 'PropDoon Founded',
      description:
        'Started in Dehradun with a mission to simplify real‑estate transactions.',
    },
    {
      year: '2014',
      title: '100+ Deals Closed',
      description:
        'Achieved our first century of successful property transactions.',
    },
    {
      year: '2017',
      title: 'Service Expansion',
      description:
        'Added legal support & investment advisory to our core consultancy.',
    },
    {
      year: '2020',
      title: 'Tech‑Enabled Platform',
      description:
        'Launched our data‑driven property intelligence portal for clients.',
    },
    {
      year: '2023',
      title: '1,000+ Happy Clients',
      description:
        'Built a strong pan‑Uttarakhand network with a growing client community.',
    },
    {
      year: '2025',
      title: 'Regional Leader',
      description:
        'Recognised as Uttarakhand’s leading real‑estate consultancy.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#E62F35] mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Key milestones that have shaped PropDoon’s growth and success
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* gradient center line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#64C0ED] to-[#E62F35]" />

          <div className="space-y-14">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row ${
                  idx % 2 ? 'lg:flex-row-reverse' : ''
                } items-center lg:space-x-10`}
              >
                {/* card */}
                <div
                  className={`w-full lg:w-1/2 ${
                    idx % 2
                      ? 'lg:text-left lg:pl-10'
                      : 'lg:text-right lg:pr-10'
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border-l-4 border-[#64C0ED]">
                    <div className="text-2xl font-bold text-[#64C0ED] mb-1">
                      {m.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[#E62F35] mb-2">
                      {m.title}
                    </h3>
                    <p className="text-gray-600">{m.description}</p>
                  </div>
                </div>

                {/* dot */}
                <div className="relative hidden lg:flex items-center justify-center">
                  <span className="w-5 h-5 bg-[#E62F35] rounded-full border-4 border-white shadow-xl animate-pulse" />
                </div>

                {/* spacer */}
                <div className="w-full lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
