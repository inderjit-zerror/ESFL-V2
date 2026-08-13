"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ManufacturingJourney() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".pillar-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.3,
      ease: "power2.out"
    });
  }, { scope: sectionRef });

  const pillars = [
    {
      id: "01",
      title: <>RESEARCH & <br /> DEVELOPMENT</>,
      description: "Food technologists engineer blends that hit every aroma, colour and taste note our chefs plan for your kitchen.",
      footer: "BLENDS DEVELOPED",
      tag: "120+"
    },
    {
      id: "02",
      title: <>QUALITY <br /> CONTROL</>,
      description: "Every batch is tested at intake, in-process and pre-dispatch against international purity benchmarks.",
      footer: "STAGE BATCH TESTING",
      tag: "3"
    },
    {
      id: "03",
      title: <>SUSTAINABILITY & <br /> SAFETY</>,
      description: "Water recycling, renewable energy and zero-waste-to-landfill practices run across all manufacturing units.",
      footer: " WASTE TO LANDFILL",
      tag: "0"
    }
  ];

  return (
    <section ref={sectionRef} className="bg-[#fcfbf9] container py-24 relative">
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h6 className="text-red mb-2 uppercase">
            The Pillars
          </h6>
          <h2 data-para-effect className="uppercase">
            Our Manufacturing <br /> Journey
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="pillar-card group relative bg-[#E30713] rounded-2xl p-5 border text-[#fac05e] border-black/5 h-80 flex flex-col justify-between"
            >
              {/* Card Content */}
              <div className="relative z-10">
                <div className=" mb-3">
                  <span className="text-xs font-semibold  px-2 py-1 bg-[#fcfbf9] text-[#E30713] rounded-full border border-[#E30713]">
                    STEP {pillar.id}
                  </span>
                </div>
                <h4 data-para-effect className="mb-5">
                  {pillar.title}
                </h4>
                <p className="">
                  {pillar.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between border-t pt-2 mt-5">
                <h4 data-para-effect>{pillar.tag}</h4>
                <p className="text-sm">
                  {pillar.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}