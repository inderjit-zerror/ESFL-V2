"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const items = [
  {
    title: "BRAND HERITAGE",
    desc: "Leverage decades of trust and consumer loyalty built through consistent quality and authentic flavors.",
  },
  {
    title: "WIDE PRODUCT RANGE",
    desc: "Access a comprehensive portfolio of spices, blended masalas, and ready-to-eat food solutions.",
  },
  {
    title: "MARKETING SUPPORT",
    desc: "Receive robust brand building assistance, POS materials, and national-level advertising support.",
  },
  {
    title: "SUPPLY CHAIN EXCELLENCE",
    desc: "Benefit from our optimized logistics network ensuring timely delivery and minimal stock-outs.",
  },
  {
    title: "GROWING MARKET",
    desc: "Be part of the rapidly expanding food industry with a partner that stays ahead of consumer trends.",
  },
  {
    title: "QUALITY ASSURANCE",
    desc: "Our state-of-the-art labs and manufacturing units guarantee the highest food safety standards.",
  },
];

const WhyPartner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Use GSAP quickTo for highly performant mouse tracking
    const xTo = gsap.quickTo(cardRef.current, "x", {
      duration: 0.4,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cardRef.current, "y", {
      duration: 0.4,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      // Offset by 20px so the cursor doesn't obscure the card
      xTo(e.clientX + 20);
      yTo(e.clientY -120);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full py-24 min-h-[90vh] bg-[#FDF6EC] px-6 sm:px-10">
      {/* Header */}
      <div className="">
        <p className="text-[#E70514] font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3">
          PARTNERSHIP
        </p>
        <h2 className="Heading_1 uppercase font-extrabold text-[#2b2b2b] tracking-tight">
          Why Partner with ESFL?
        </h2>
      </div>

      {/* Center List */}
      <div className="flex flex-col items-center justify-center w-full z-10 space-y-3 md:space-y-4 px-4 mt-20 ">
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="group relative w-full text-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3
                className={`text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black uppercase tracking-tight transition-all duration-300 cursor-pointer ${
                  isHovered ? "text-[#C4321B]" : "text-[#E6DFD3]"
                }`}
              >
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* Floating Card */}
      <div
        ref={cardRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 w-[260px] h-[260px] md:w-[280px] md:h-[280px] rounded-xl bg-[#C4321B] text-white shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden transition-all duration-300 ease-out origin-top-left ${
          hoveredIndex !== null ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        {hoveredIndex !== null && (
          <>
            {/* Background Number */}
            <div className="absolute -top-10  text-[180px] font-black text-white/10 leading-none select-none">
              {(hoveredIndex + 1).toString().padStart(2, "0")}
            </div>
            
            {/* Content */}
            <p className="relative z-10 text-sm md:text-[15px] font-medium leading-relaxed text-center">
              {items[hoveredIndex].desc}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default WhyPartner;