"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
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

  const filteredContent =
    activeCategory === "ALL"
      ? content
      : content.filter((item) => item.category === activeCategory);

  return (
    <section className=" container pt-24 md:pt-32   py-12 md:py-24  relative">
      <div className="w-full">
        {/* Header */}
        <div className="md:text-center mb-8 md:mb-16">
          {/* <h6 className="text-[#E30713] uppercase mb-2">
            ON AIR NOW
          </h6> */}
          <h2 data-para-effect className="uppercase mb-4">
            LATEST CAMPAIGNS <br className="max-sm:hidden" /> &amp; NEWS
          </h2>
          <p className="opacity-70 mx-auto max-w-2xl mb-8">
            Latest campaigns, media coverage and company updates.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap md:items-center md:justify-center gap-1 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors ${activeCategory === cat
                  ? "bg-[#E30713] text-white"
                  : "bg-[#f4c96b] text-white hover:bg-[#e0b455]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid - Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-10">
          {filteredContent.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] rounded-md overflow-hidden relative mb-5">
                <Image fill
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h5 className="mb-4 group-hover:text-[#E30713] transition-colors line-clamp-2 md:min-h-[3rem]">
                {item.title}
              </h5>

              <a
                href={item.link}
                className="mt-auto text-xs font-semibold tracking-wider text-[#E30713] uppercase flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                READ MORE <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Campaigns;