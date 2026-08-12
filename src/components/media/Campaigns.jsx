"use client";

import React, { useState } from "react";

const content = [
  {
    id: 1,
    category: "AWARDS",
    title: "ESFL wins 'Emerging Food Brand of the Year' at the National Food Summit.",
    image: "/images/home/P3.png", // using placeholder from LatestCampaignsAndNews
    link: "#",
  },
  {
    id: 2,
    category: "CAMPAIGNS",
    title: "Sustainable packaging initiative launched across the Ram Bandhu brand.",
    image: "/images/home/P4.png",
    link: "#",
  },
  {
    id: 3,
    category: "CSR",
    title: "CSR outreach empowers over 5,000 farmers across rural Maharashtra.",
    image: "/images/home/P5.png",
    link: "#",
  },
  {
    id: 4,
    category: "AWARDS",
    title: "ESFL wins 'Emerging Food Brand of the Year' at the National Food Summit.",
    image: "/images/home/P3.png",
    link: "#",
  },
  {
    id: 5,
    category: "CAMPAIGNS",
    title: "Sustainable packaging initiative launched across the Ram Bandhu brand.",
    image: "/images/home/P4.png",
    link: "#",
  },
  {
    id: 6,
    category: "CSR",
    title: "CSR outreach empowers over 5,000 farmers across rural Maharashtra.",
    image: "/images/home/P5.png",
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
    <section className="bg-[#fdf6ec] py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mx-auto mb-10">
          <p className="text-[#E70514] font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3">
            ON AIR NOW
          </p>
          <h1 className="Heading_1 HNM_FONT text-neutral-900 leading-tight mb-4">
            LATEST CAMPAIGNS <br className="hidden sm:block" /> &amp; NEWS
          </h1>
          <p className="Paragraph_Medium text-neutral-600 mb-8">
            Latest campaigns, media coverage and company updates.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-colors ${
                  activeCategory === cat
                    ? "bg-[#E70514] text-white"
                    : "bg-[#f4c96b] text-white hover:bg-[#e0b455]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-5">
          {filteredContent.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <p className="Paragraph_Medium MNM_FONT text-neutral-800 line-clamp-2 min-h-[3rem]">
                {item.title}
              </p>

              <a
                href={item.link}
                className="mt-3 text-sm Paragraph_Small MNM_FONT font-semibold! text-[#E70514] underline underline-offset-2 hover:text-[#a80d26]"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;