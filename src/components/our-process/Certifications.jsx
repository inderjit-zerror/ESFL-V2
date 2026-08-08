import React from 'react';

export default function Certifications() {
  // Data for the top row of certification cards
  const certs = [
    {
      id: 'bis',
      title: 'BIS',
      subtitle: 'Bureau of Indian Standards',
      iconText: '/images/our-process/O1.png', // Placeholder for actual logo
      iconBg: 'bg-blue-600',
    },
    {
      id: 'agmark',
      title: 'AGMARK',
      subtitle: 'Graded agricultural produce',
      iconText: '/images/our-process/O2.png',
      iconBg: 'bg-yellow-500',
    },
    {
      id: 'fssai',
      title: 'FSSAI',
      subtitle: 'Licensed food safety',
      iconText: '/images/our-process/O3.png',
      iconBg: 'bg-[#f6bc25]',
    },
    {
      id: 'iso',
      title: 'ISO 22000',
      subtitle: 'Food safety management',
      iconText: '/images/our-process/O4.png',
      iconBg: 'bg-blue-500',
    },
    {
      id: 'haccp',
      title: 'HACCP',
      subtitle: 'Hazard control system',
      iconText: '/images/our-process/O5.png',
      iconBg: 'bg-blue-400',
    },
  ];

  // Data for the bottom row of statistic cards
  const stats = [
    {
      id: 'tested',
      value: '100%',
      label: 'BATCHES LAB-TESTED BEFORE DISPATCH',
    },
    {
      id: 'countries',
      value: '15+',
      label: 'COUNTRIES SERVED UNDER EXPORT NORMS',
    },
    {
      id: 'years',
      value: '30 yrs',
      label: 'OF AUDITED MANUFACTURING PRACTICE',
    },
  ];

  return (
    <section className="bg-[#E70514] min-h-screen py-16 px-6 md:px-12 lg:px-10 font-sans text-white">
      <div className=" mx-auto">
        
        {/* Header Section */}
        <div className="max-w-2xl mb-12">
          <p className="text-[#F5C451] text-sm  font-bold tracking-[0.15em] uppercase mb-2">
            Accredited & Audited
          </p>
          <h2 className="text-[#F5C451] Heading_1 max-sm:text-[2rem]! max-sm:leading-[2rem]! text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[1.1] mb-6">
            Quality & Process <br /> Certifications
          </h2>
          <p className="text-[#fde8e5] Paragraph_Medium text-lg md:text-xl leading-relaxed opacity-90">
            Independent bodies verify our plants, processes and paperwork year after year — so every pack carries the same guarantee, wherever it travels.
          </p>
        </div>

        {/* Certifications Grid (Top Row) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col bg-[#f51d2c] p-6 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-[#F5C451]"
            >
              {/* Icon Placeholder (Replace with actual Next/Image or SVG) */}
              <div className={`w-14 h-14 bg-[#F5C451] rounded-md flex items-center justify-center text-[10px] font-bold text-white mb-8 shadow-sm`}>
                <img src={cert.iconText} alt="IMG" className='w-full  object-cover object-center' />
              </div>
              
              <div className="mt-auto">
                <h3 className="text-lg font-bold mb-1 transition-colors duration-300 group-hover:text-[#E70514]">
                  {cert.title}
                </h3>
                <p className="text-sm text-[#fde8e5] opacity-90 transition-colors duration-300 group-hover:text-[#E70514]">
                  {cert.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Grid (Bottom Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-[#f51d2c] p-8 rounded-xl cursor-pointer transition-colors duration-300 hover:bg-[#F5C451]"
            >
              <h3 className="text-3xl md:text-4xl text-[#F5C451] font-semibold mb-3 transition-colors duration-300 group-hover:text-[#E70514]">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm text-[#fde8e5] font-semibold tracking-wider uppercase opacity-90 transition-colors duration-300 group-hover:text-[#E70514]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}