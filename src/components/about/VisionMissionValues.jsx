"use client";

import React from "react";
import { Eye, Leaf, Gem } from "lucide-react";

export default function VisionMissionValues() {
  const cards = [
    {
      id: 1,
      title: "VISION",
      description:
        "To be the most preferred and trusted brand in the culinary world — enriching lives through healthy, authentic and high-quality food products globally.",
      Icon: Eye,
    },
    {
      id: 2,
      title: "MISSION",
      description:
        "To consistently innovate and deliver premium spices and food products while ensuring sustainable growth for all our stakeholders and partners.",
      Icon: Leaf,
    },
    {
      id: 3,
      title: "VALUE STATEMENT",
      description:
        "Purity first, people always. Integrity in sourcing, precision in manufacturing and respect for the traditions that shape Indian kitchens.",
      Icon: Gem,
    },
  ];

  return (
    <section className="bg-[#E70514] h-fit py-20 px-6 font-sans flex items-center justify-center">
      <div className="mx-auto w-full ">

        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#fac05e] font-semibold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Quality & Process Certifications
          </p>
          <h2 className="text-[#fac05e] Heading_1 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            Vision, Mission & Values
          </h2>
          <div className="w-16 h-[3px] bg-[#fac05e] mx-auto mt-6 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white/[0.09] border border-[#fac05e]/25 hover:border-[#fac05e] hover:bg-[#fac05e] transition-all duration-300 ease-out rounded-xl p-8 flex flex-col min-h-[300px]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-[#fac05e]/15 group-hover:bg-[#E70514]/15 flex items-center justify-center transition-colors duration-300 mb-8">
                <card.Icon
                  className="w-7 h-7 text-[#fac05e] group-hover:text-[#E70514] transition-colors duration-300"
                  strokeWidth={1.75}
                />
              </div>

              {/* Card Content */}
              <div className="mt-auto">
                <h3 className="text-[#fac05e] group-hover:text-[#c83219] text-lg font-bold mb-3 tracking-wide transition-colors duration-300">
                  {card.title}
                </h3>
                <div className="w-8 h-[2px] bg-[#fac05e]/60 group-hover:bg-[#c83219]/60 mb-4 transition-colors duration-300" />
                <p className="text-white/90 group-hover:text-[#c83219] Paragraph_Medium text-[15px] leading-relaxed font-medium transition-colors duration-300">
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