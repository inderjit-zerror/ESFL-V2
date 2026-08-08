import React from 'react';

// --- SVG Icons ---
const BeakerIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 22.5h4.5m-4.5 0a2.25 2.25 0 01-2.25-2.25v-9l-3-3a2.25 2.25 0 01-.66-1.59V5.25A2.25 2.25 0 016.34 3h11.32a2.25 2.25 0 012.25 2.25v1.41a2.25 2.25 0 01-.66 1.59l-3 3v9a2.25 2.25 0 01-2.25 2.25m-4.5 0h4.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 10.5h9" />
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22.5c4.97-1.46 8.25-5.9 8.25-10.75V6l-8.25-3-8.25 3v5.75c0 4.85 3.28 9.29 8.25 10.75z" />
  </svg>
);

const LeafIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 11c-1.5-1.5-4-1.5-4-1.5s0 2.5 1.5 4c1.5 1.5 4 1.5 4 1.5s0-2.5-1.5-4z" />
  </svg>
);

// --- Component ---
export default function ManufacturingJourney() {
  const pillars = [
    {
      id: 1,
      title: "RESEARCH & DEVELOPMENT",
      description: "Food technologists engineer blends that hit every aroma, colour and taste note our chefs plan for your kitchen.",
      footer: "120+ BLENDS DEVELOPED",
      Icon: BeakerIcon,
    },
    {
      id: 2,
      title: "QUALITY CONTROL",
      description: "Every batch is tested at intake, in-process and pre-dispatch against international purity benchmarks.",
      footer: "3-STAGE BATCH TESTING",
      Icon: ShieldIcon,
    },
    {
      id: 3,
      title: "SUSTAINABILITY & SAFETY",
      description: "Water recycling, renewable energy and zero-waste-to-landfill practices run across all manufacturing units.",
      footer: "ZERO WASTE TO LANDFILL",
      Icon: LeafIcon,
    }
  ];

  return (
    <section className="h-fit bg-[#fcfbf9] py-20 px-4 md:px-8 lg:px-10 relative">
   

      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <p className="text-[#E70514] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            The Pillars
          </p>
          <h2 className="Heading_1 md:text-4xl font-extrabold max-sm:text-[2rem]! max-sm:leading-[2rem]! text-[black] uppercase tracking-tighter!">
            Our Manufacturing Journey
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative bg-white border border-gray-100 rounded-xl pt-14 pb-8 px-8 shadow-sm transition-all duration-300 hover:bg-[#E70514] hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between min-h-[320px] overflow-hidden"
            >
              {/* Top Right Icon Container */}
              <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-[#E70514]/40 rounded-bl-[2rem] flex items-center justify-center transition-colors duration-300 group-hover:border-[#f6bc25]">
                <pillar.Icon className="w-10 h-10 text-[#E70514] transition-colors duration-300 group-hover:text-[#f6bc25]" />
              </div>

              {/* Card Content */}
              <div>
                <h3 className=" font-bold! text-[#E70514]   Paragraph_Medium uppercase tracking-tight! mb-4 transition-colors duration-300 group-hover:text-white">
                  {pillar.id}. {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 Paragraph_Small leading-relaxed transition-colors duration-300 group-hover:text-white/95">
                  {pillar.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-8 Paragraph_Medium">
                <hr className="border-gray-200 mb-4 transition-colors duration-300 group-hover:border-white/30" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest transition-colors duration-300 group-hover:text-white/80">
                  {pillar.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}