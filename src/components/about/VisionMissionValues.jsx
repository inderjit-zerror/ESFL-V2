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
      <div className=" mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <p className="text-[#fac05e] font-semibold tracking-widest text-xs sm:text-sm uppercase mb-3">
            Quality & Process Certifications
          </p>
          <h2 className="text-[#fac05e] Heading_1 text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            Vision, Mission & Values
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden bg-[#fac15e49] hover:bg-[#fac05e] transition-all duration-300 ease-in-out rounded-2xl p-8 pt-32 cursor-pointer flex flex-col min-h-[320px]"
            >
              {/* Decorative Icon Circle - Positioned Top Right */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#e17237] rounded-full flex items-center justify-center pt-4 pr-4 transition-colors duration-300">
                <card.Icon
                  className="w-10 h-10 text-[#b52a12] opacity-80"
                  strokeWidth={1.5}
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-[#fac05e] group-hover:text-[#c83219] text-xl font-bold mb-4 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-white/95 Paragraph_Medium group-hover:text-[#c83219] text-[15px] leading-relaxed transition-colors duration-300 font-medium">
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