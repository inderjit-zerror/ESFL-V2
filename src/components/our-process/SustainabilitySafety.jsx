import React from 'react';
import Image from 'next/image';

// --- SVG Icons ---
const DropIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.484 3.734-7.5 9.07-7.5 12.75a7.5 7.5 0 0015 0c0-3.68-5.016-9.016-7.5-12.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.875 18a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
  </svg>
);

const SunIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-2.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const FactoryIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

const RecycleIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
  </svg>
);

// --- Component ---
export default function SustainabilitySafety() {
  const cards = [
    {
      title: "WATER CONSERVATION",
      description: "Closed-loop recycling and optimised usage on every line.",
      Icon: DropIcon,
      titleColor: "text-[#4a4a4a]",
      IMG:`/images/our-process/T1.jpg`,
    },
    {
      title: "CLEAN ENERGY",
      description: "Solar-led restructuring powers our manufacturing hubs.",
      Icon: SunIcon,
      titleColor: "text-[#4a4a4a]",
      IMG:`/images/our-process/T2.jpg`,
    },
    {
      title: "SAFE MANUFACTURING",
      description: "Rigorous protocols and enforcement protecting our workforce.",
      Icon: FactoryIcon,
      titleColor: "text-[#d73921]", // Red text to match the design
      IMG:`/images/our-process/T3.jpg`,
    },
    {
      title: "WASTE MANAGEMENT",
      description: "Zero waste to landfill strategy with full segregation.",
      Icon: RecycleIcon,
      titleColor: "text-[#4a4a4a]",
      IMG:`/images/our-process/T4.jpg`,
    }
  ];

  return (
    <section className="bg-[#fcfaf7] min-h-screen py-20 px-4 md:px-8 lg:px-16 relative">

      <div className=" mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#E70514] text-lg font-medium mb-3">
            03 <span className="font-semibold ml-1">Responsibility</span>
          </p>
          <h2 className="text-4xl md:text-5xl Heading_1 max-sm:text-[2rem]! max-sm:leading-[2rem]! font-black  text-black uppercase tracking-wide mb-4">
            Sustainability & Safety
          </h2>
          <p className=" text-black Patagraph_Medium text-sm md:text-base max-w-3xl mx-auto">
            Resource conservation, worker safety and responsible sourcing are built into how we manufacture — 
            not added on afterwards.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              
              {/* Image Container with Icon */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-6">
                <Image
                  src={card.IMG}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Red Icon Box */}
                <div className="absolute bottom-0 left-0 bg-[#E70514] w-14 h-14 md:w-16 md:h-16 rounded-tr-xl flex items-center justify-center shadow-lg">
                  <card.Icon className="w-7 h-7 md:w-8 md:h-8 text-[#f6bc25]" />
                </div>
              </div>

              {/* Card Text Content */}
              <div>
                <h3 className={`text-base md:text-lg font-bold  text-black tracking-tighter uppercase mb-2 ${card.titleColor}`}>
                  {card.title}
                </h3>
                <p className=" text-black/70 text-sm Paragraph_Medium font-medium">
                  {card.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}