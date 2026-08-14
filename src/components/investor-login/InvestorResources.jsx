"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Component ---
export default function InvestorResources() {
  const containerRef = useRef(null);

  const resources = [
    {
      id: "01",
      title: <>ANNUAL <br /> REPORTS</>,
      description: "Download latest fiscal year statements, balance sheets and ESG disclosures.",
      footer: "VIEW REPORTS",
      tag: "PDF"
    },
    {
      id: "02",
      title: <>MEETING <br /> SCHEDULES</>,
      description: "Schedule for upcoming AGMs, notices, resolutions and past meeting transcripts.",
      footer: "SEE SCHEDULE",
      tag: "AGM"
    },
    {
      id: "03",
      title: <>EQUITY <br /> TRACKING</>,
      description: "Live tracking, historical data and dividend history for Empire Spices equity.",
      footer: "TRACK EQUITY",
      tag: "LIVE"
    }
  ];

  useGSAP(() => {
    gsap.from('.resource-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="container   py-12 md:py-24  border-b border-black/50 relative">
      <div className="relative z-10">

        {/* Header Section */}
        <div className="md:text-center mb-8 md:mb-16">
          <h6 className="text-red mb-2 uppercase">
            Disclosures
          </h6>
          <h2 data-para-effect className="uppercase mb-2">
            Investor Resources
          </h2>
          <p className="opacity-70 mx-auto max-w-2xl">
            Everything a shareholder needs — filings, meeting notices and market performance, kept current and public.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resources.map((card) => (
            <div
              key={card.id}
              className="resource-card pillar-card group relative bg-[#E30713] text-[#fac05e] rounded-2xl p-5 border border-black/5 h-80 flex flex-col justify-between"
            >
              {/* Card Content */}
              <div className="relative z-10">
                <div className="mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-[#fcfbf9] text-[#E30713] rounded-full border border-[#E30713]">
                    RESOURCE {card.id}
                  </span>
                </div>
                <h4 data-para-effect className="mb-5">
                  {card.title}
                </h4>
                <p className="">
                  {card.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between border-t pt-2 mt-5">
                <h4 data-para-effect>{card.tag}</h4>
                <p className="text-sm">
                  {card.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}