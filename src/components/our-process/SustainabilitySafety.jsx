"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MoveLeft, MoveRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SustainabilitySafety() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const swiperRef = useRef(null);
  const cards = [
    {
      title: "Water Conservation",
      description: "Closed-loop recycling and optimised usage on every line. This minimizes environmental impact and ensures sustainable water usage throughout our production processes.",
      IMG: `/images/our-process/T1.jpg`,
    },
    {
      title: "Clean Energy",
      description: "Solar-led restructuring powers our manufacturing hubs. By transitioning to renewable energy, we drastically reduce our carbon footprint and promote a cleaner future.",
      IMG: `/images/our-process/T2.jpg`,
    },
    {
      title: "Safe Manufacturing",
      description: "Rigorous protocols and enforcement protecting our workforce. We maintain a zero-tolerance policy for safety violations, ensuring every employee returns home safely.",
      IMG: `/images/our-process/T3.jpg`,
    },
    {
      title: "Waste Management",
      description: "Zero waste to landfill strategy with full segregation. We continuously innovate our material life cycles to repurpose waste streams into usable by-products.",
      IMG: `/images/our-process/T4.jpg`,
    },
    {
      title: "Carbon Neutrality",
      description: "Comprehensive emission reduction initiatives across facilities. We are committed to achieving net-zero operations by modernizing machinery and optimizing our logistics.",
      IMG: `/images/our-process/T5.jpg`,
    },
    {
      title: "Eco Packaging",
      description: "Biodegradable materials and optimized design for minimal waste. We prioritize sustainable sourcing to ensure packaging leaves the smallest possible ecological footprint.",
      IMG: `/images/our-process/T6.jpg`,
    }
  ];

  return (
    <section className=" border-b border-black/50 py-12 md:py-24 container relative overflow-hidden">
      <div className="">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="text-left w-full md:w-2/3">
            <h2 data-para-effect className="uppercase mb-2 text-[#000]">
              Sustainability & Safety
            </h2>
            <p className="text-black max-w-3xl">
              Resource conservation, worker safety and responsible sourcing are built into how we manufacture —
              not added on afterwards.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-black/50 hover:border-[#e30713] flex items-center justify-center hover:bg-[#e30713] hover:text-white transition-colors"
              aria-label="Previous Slide"
            >
              <MoveLeft className='size-4' />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-black/50 hover:border-[#e30713] flex items-center justify-center hover:bg-[#e30713] hover:text-white transition-colors"
              aria-label="Next Slide"
            >
              <MoveRight className='size-4' />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 4 }
            }}
            spaceBetween={16}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full"
          >
            {cards.map((card, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <SwiperSlide
                  key={index}
                >
                  <div
                    onClick={() => {
                      const nextState = isExpanded ? null : index;
                      setExpandedIndex(nextState);

                    }}
                    className="relative w-full aspect-square overflow-hidden cursor-pointer rounded-xl group"
                  >
                    {/* Background Image */}
                    <Image
                      src={card.IMG}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark gradient for title readability */}
                    <div className={`absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent pointer-events-none transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}></div>

                    {/* Always visible Top-Left Title */}
                    <div className={`absolute top-4 left-4 right-4 md:top-6 md:left-6 transition-opacity duration-300 ${isExpanded ? 'opacity-0' : 'opacity-100'}`}>
                      <h5 className="text-white  uppercase ">
                        {card.title}
                      </h5>
                    </div>

                    {/* Sliding White Overlay */}
                    <div className={`absolute inset-0 bg-[#e30713] p-6 md:p-8 flex flex-col justify-center transition-transform duration-500 ease-in-out ${isExpanded ? 'translate-x-0' : 'translate-x-full'
                      }`}>
                      <p className="text-white text-sm md:text-base ">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

      </div>
    </section>
  );
}