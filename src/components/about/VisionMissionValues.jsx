"use client";

import React, { useRef } from "react";
import { Eye, Leaf, Gem } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMissionValues() {
  const containerRef = useRef(null);

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

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.from(".vision-card", {
        scrollTrigger: {
          trigger: ".vision-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#E30713] h-fit   py-12 md:py-24  container   flex items-center justify-center">
      <div className="pattern_bg"></div>
      <div className="  w-full ">

        {/* Header Section */}
        <div className="md:text-center mb-16">
          <h6 className="text-[#fac05e] uppercase mb-2">
            Quality & Process Certifications
          </h6>
          <h2 data-para-effect className="text-[#fac05e] uppercase">
            Vision, Mission & Values
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="vision-card group relative md:space-y-20 bg-[#fac05e] rounded-xl p-5 md:p-8 flex flex-col "
            >
              {/* Icon */}
              <div className="flex justify-between">
                <h4 data-para-effect className="text-[#c83219] w-[80%]   mb-3  transition-colors duration-300">
                  {card.title}
                </h4>
                <div className="w-14 h-14 rounded-lg bg-[#c83219] flex items-center justify-center transition-colors duration-300 mb-8">
                  <card.Icon
                    className="w-7 h-7 text-[#fac05e] transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-[#c83219] md:text-xl ">
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