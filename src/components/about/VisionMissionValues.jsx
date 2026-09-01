"use client";

import React, { useRef } from "react";
import { Eye, Leaf, Gem, Target, Handshake } from "lucide-react";
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
        "Empire Spices & Foods Ltd. aims to be ‘The Company’ to provide convenience and taste enhancement for making Food enjoyable and palatable.",
      Icon: Eye,
    },
    {
      id: 2,
      title: "MISSION",
      description:
        "To grow together and delight our customers, employees, shareholders, suppliers and well-wishers by developing value-for-money products.",
      Icon: Target,
    },
    {
      id: 3,
      title: "VALUE STATEMENT",
      description:
        "We want our organizational structure and culture to promote employee involvement, open communication, teamwork and professionalism in every aspect of work.",
      Icon: Handshake,
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

    mm.add("(max-width: 767px)", () => {
      const cards = gsap.utils.toArray(".vision-card");
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#E30713] h-fit   py-12 md:py-24  container   flex items-center justify-center">
      <div className="pattern_bg"></div>
      <div className="  w-full ">

        {/* Header Section */}
        <div className="md:text-center mb-16">
          {/* <h6 className="text-[#fac05e] uppercase mb-2">
            Quality & Process Certifications
          </h6> */}
          <h2 data-para-effect className="text-[#fac05e] uppercase">
            Vision, Mission & Values
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="vision-card group relative md:space-y-8 bg-[#ffffff] rounded-xl p-5 md:p-8 flex flex-col "
            >
              {/* Icon */}
              <div className="flex justify-between">
                <h4 data-para-effect className="text-[#E30713] w-[80%]   mb-3  transition-colors duration-300">
                  {card.title}
                </h4>
                <div className="w-14 h-14 rounded-lg bg-[#E30713] flex items-center justify-center transition-colors duration-300 mb-8">
                  <card.Icon
                    className="w-7 h-7 text-[#ffffff] transition-colors duration-300"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-[#E30713] md:text-xl ">
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