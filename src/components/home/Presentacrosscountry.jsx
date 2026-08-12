"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: "sku", value: 300, suffix: "+", label: "STOCK KEEPING UNITS" },
  { id: "units", value: 32, suffix: "", label: "Years Legacy" },
  { id: "depots", value: 20, suffix: "", label: "Countries Presence   " },
  { id: "employees", value: 2, suffix: "L+", label: " Retailers Supplied" },
];

export default function PresentAcrossCountry() {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  const bottleRef = useRef(null);
  const packRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const stat = stats[i];
        const counter = { val: 0 };

        gsap.to(counter, {
          val: stat.value,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.floor(counter.val)}${stat.suffix}`;
          },
        });
      });

      // headline + stats fade-in
      gsap.fromTo(
        ".psac-fade",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Continuous premium float — respects reduced motion
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!prefersReducedMotion) {
        gsap.to(bottleRef.current, {
          y: -50,
          rotate: 6,
          duration: 2,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          transformOrigin: "center center",
        });

        gsap.to(packRef.current, {
          y: -50,
          rotate: -6,
          duration: 2.4,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          delay: 0.5,
          transformOrigin: "center center",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] lg:h-[85vh] overflow-hidden bg-[#E70514] px-0 py-16 sm:pb-20 sm:pt-10 flex  "
    >
     

      {/* <img src="/images/home/FLOWER.png" alt="IMG" className="w-[15%] aspect-square absolute rotate-z-180  right-[2%] bottom-[2%] z-99" /> */}
      <img src="/images/home/PP.png" alt="IMG" className=" h-[30vh] sm:w-full object-cover  absolute bottom-0 left-0 rotate-180" />

      <div className="relative px-0 mx-auto  max-sm:h-fit  w-full grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-5 sm:gap-10 items-center">
        {/* Left: headline + products */}
        <div className="relative max-sm:pb-10 ">
          {/* Product images flanking the headline */}
          {/* <div className="psac-fade absolute -left-4 top-6 w-14 sm:w-16">
            <img
              ref={bottleRef}
              src="/images/home/BT1.png"
              alt="Product bottle"
              className="w-full h-auto will-change-transform"
            />
          </div> */}

          {/* <div className="psac-fade absolute right-4 sm:right-20  top-40 w-20 sm:w-24">
            <img
              ref={packRef}
              src="/images/home/YellowPack.png"
              alt="Product packet"
              className="w-full h-auto will-change-transform"
            />
          </div> */}

          <h2 className="psac-fade pl-4 sm:pl-6 lg:pl-12 text-[#f5c451] Heading_1 font-extrabold uppercase sm:leading-[4.35rem]! text-[2.25rem]! leading-[2.35rem]! sm:text-[2.75rem]! md:text-[3.5rem]! lg:text-[4rem]! tracking-tight">
            Present
            
            Across the
            
            Country to
            
            Serve You
            
            Incessantly
          </h2>

          <p className="psac-fade pl-4 sm:pl-6 lg:pl-12 Paragraph_Medium MNR_FONT mt-6  text-xs sm:text-sm font-semibold text-white/90 leading-relaxed max-w-[90%] sm:max-w-none">
            ESFL&apos;s Network Spans Manufacturing Units, Agri Sites And
            Depots Across Delhi, Noida, Himachal Pradesh, Assam And Tripura.
          </p>
        </div>

        {/* Right: stats grid */}
        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-8  sm:gap-y-10 Heading_1 mt-auto px-6 lg:px-0 pb-10 sm:pb-14 lg:pb-[22vh] mx-auto">
          {stats.map((stat, i) => (
            <div key={stat.id} className="psac-fade">
              <p
                ref={(el) => (numberRefs.current[i] = el)}
                className="text-[#f5c451] font-extrabold text-[2.5rem]! sm:text-[3rem]! md:text-[3.5rem]! lg:text-[4rem]! leading-none"
              >
                0{stat.suffix}
              </p>
              <p className="mt-2 text-xs font-medium uppercase text-white/90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}