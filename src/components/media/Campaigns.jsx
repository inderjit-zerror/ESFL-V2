"use client";

import React, { useState } from "react";
import { ArrowRight, MoveLeft, MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";

const content = [
  {
    id: 1,
    category: "PRESS",
    title: "Empire Spices expands distribution to North America, bringing authentic Indian flavours to global markets.",
    image: "/images/journey/journey_2014.png",
    link: "#",
  },
  {
    id: 2,
    category: "AWARDS",
    title: "Ram Bandhu named 'Most Trusted Spice Brand' at the India Food Excellence Awards.",
    image: "/images/journey/journey_2018.png",
    link: "#",
  },
  {
    id: 3,
    category: "CAMPAIGNS",
    title: "Ram Bandhu launches '#DilSeDesi' festive campaign celebrating India's rich culinary heritage.",
    image: "/images/journey/journey_1990.png",
    link: "#",
  },
  {
    id: 4,
    category: "CSR",
    title: "ESFL inaugurates 5 new primary schools in Nashik rural belt under the Vidya Vikas initiative.",
    image: "/images/csr/csr_project_education_1786541334666.png",
    link: "#",
  },
  {
    id: 5,
    category: "PRESS",
    title: "CEO shares insights on the future of sustainable spice farming in an exclusive interview.",
    image: "/images/journey/journey_2024.png",
    link: "#",
  },
  {
    id: 6,
    category: "CSR",
    title: "Direct farmer outreach program empowers over 5,000 spice farmers across rural Maharashtra.",
    image: "/images/journey/journey_2023.png",
    link: "#",
  },
];

const categories = ["ALL", "PRESS", "AWARDS", "CAMPAIGNS", "CSR"];

const Campaigns = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const filteredContent =
    activeCategory === "ALL"
      ? content
      : content.filter((item) => item.category === activeCategory);

  return (
    <section className=" container pt-24 md:pt-32   py-12 md:py-24  relative">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 data-para-effect className="uppercase">
              MEDIA COVERAGE 
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
            <button
              aria-label="Previous slide"
              onClick={() => swiperInstance?.slidePrev()}
              disabled={isBeginning}
              className="w-10 h-10 rounded-full border border-black/30 hover:border-[#E30713] flex items-center justify-center hover:bg-[#E30713] hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <MoveLeft className="w-4 h-4" />
            </button>
            <button
              aria-label="Next slide"
              onClick={() => swiperInstance?.slideNext()}
              disabled={isEnd}
              className="w-10 h-10 rounded-full border border-black/30 hover:border-[#E30713] flex items-center justify-center hover:bg-[#E30713] hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Single Scrollable Row of Tiles */}
        <div className="w-full">
          <Swiper
            spaceBetween={16}
            speed={800}
            grabCursor={true}
            breakpoints={{
              0: { slidesPerView: 1.15, spaceBetween: 12 },
              640: { slidesPerView: 2.2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="w-full"
          >
            {filteredContent.map((item) => (
              <SwiperSlide key={item.id} className="h-auto!">
                <div className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col h-full">
                  <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                    <Image fill
                      src={item.image}
                      alt={item.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 flex flex-col grow">
                    <h5 className="uppercase mb-8 line-clamp-2 grow">
                      {item.title}
                    </h5>

                    <a
                      href={item.link}
                      className="text-sm text-[#E30713] uppercase flex items-center gap-2 hover:opacity-80 group-hover:gap-4 transition-all duration-300"
                    >
                      READ MORE <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Campaigns;