"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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
      IMG: `/images/our-process/T1.jpg`,
    },
    {
      title: "CLEAN ENERGY",
      description: "Solar-led restructuring powers our manufacturing hubs.",
      Icon: SunIcon,
      titleColor: "text-[#4a4a4a]",
      IMG: `/images/our-process/T2.jpg`,
    },
    {
      title: "SAFE MANUFACTURING",
      description: "Rigorous protocols and enforcement protecting our workforce.",
      Icon: FactoryIcon,
      titleColor: "text-[#d73921]", // Red text to match the design
      IMG: `/images/our-process/T3.jpg`,
    },
    {
      title: "WASTE MANAGEMENT",
      description: "Zero waste to landfill strategy with full segregation.",
      Icon: RecycleIcon,
      titleColor: "text-[#4a4a4a]",
      IMG: `/images/our-process/T4.jpg`,
    }
  ];

  return (
    <section className=" border-b border-black/50 py-12 md:py-24  container relative">

      <div className="  ">

        {/* Header Section */}
        <div className="md:text-center mb-8 md:mb-16 ">
          <h6 className="text-[#E30713] mb-2 uppercase">
            Responsibility
          </h6>
          <h2 data-para-effect className="uppercase mb-2">
            Sustainability & Safety
          </h2>
          <p className=" text-black mx-auto max-w-3xl  ">
            Resource conservation, worker safety and responsible sourcing are built into how we manufacture —
            not added on afterwards.
          </p>
        </div>

        {/* Grid Section - Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-x-5 gap-y-8">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">

              {/* Image Container with Icon */}
              <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-6">
                <Image
                  src={card.IMG}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>

              {/* Card Text Content */}
              <div>
                <h5 className={`text-black uppercase mb-2 ${card.titleColor}`}>
                  {card.title}
                </h5>
                <p className="text-black/70">
                  {card.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="block md:hidden h-fit! w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1.1}
            className="w-full h-fit!"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col">

                  {/* Image Container with Icon */}
                  <div className="relative w-full aspect-square rounded-md overflow-hidden mb-4">
                    <Image
                      src={card.IMG}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>

                  {/* Card Text Content */}
                  <div>
                    <h5 className={`text-black uppercase mb-2 ${card.titleColor}`}>
                      {card.title}
                    </h5>
                    <p className="text-black/70">
                      {card.description}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}