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
      yTo(e.clientY - 120);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full   py-12 md:py-24   bg-[#FDF6EC] container">
      {/* Header */}
      <div className="">
        <h6 className="text-red mb-2 uppercase">
          PARTNERSHIP
        </h6>
        <h2 data-para-effect className="uppercase">
          Why Partner <br /> with ESFL?
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
              <p
                className={`text-[4rem] leading-none font-semibold uppercase transition-all duration-300 cursor-pointer ${isHovered ? "text-[#C4321B]" : "text-[#E6DFD3]"
                  }`}
              >
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Floating Card */}
      <div
        ref={cardRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 w-[260px] h-[260px] md:w-[280px] md:h-[280px] rounded-xl bg-[#C4321B] text-white shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden transition-all duration-300 ease-out origin-top-left ${hoveredIndex !== null ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
      >
        {hoveredIndex !== null && (
          <>
            {/* Background Number */}
            <div className="absolute -top-10  text-[10rem] font-semibold   text-white/10 leading-none select-none">
              {(hoveredIndex + 1).toString().padStart(2, "0")}
            </div>

            {/* Content */}
            <p className="relative z-10  text-center">
              {items[hoveredIndex].desc}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default WhyPartner;