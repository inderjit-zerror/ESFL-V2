"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

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
      className="relative h-140   pt-12 md:pt-24  overflow-hidden bg-red    "
    >
      <div className="pattern_bg"></div>
      <div className="w-full h-full relative">
        {/* <img src="/images/home/FLOWER.png" alt="IMG" className="w-[15%] aspect-square absolute rotate-z-180  right-[2%] top-[2%] z-99" /> */}
        <Image height={1080} width={1920} src="/images/home/PP.png" alt="IMG" className=" sm:w-full object-cover  absolute bottom-0! left-0 rotate-180" />

        <div className="relative container  w-full max-sm:space-y-10  md:grid md:grid-cols-2 items-start">
          {/* Left: headline + products */}
          <div className="relative max-w-2xl space-y-2 ">

            <h2 data-para-effect className="  text-[#f5c451]    uppercase ">
              Present

              Across the

              Country to

              Serve You

              Incessantly
            </h2>

            <p className=" text-white">
              ESFL&apos;s Network Spans Manufacturing Units, Agri Sites And
              Depots Across Delhi, Noida, Himachal Pradesh, Assam And Tripura.
            </p>
          </div>

          {/* Right: stats grid */}
          <div className="grid md:pl-24  space-y-10 grid-cols-2  ">
            {stats.map((stat, i) => (
              <div key={stat.id} className=" ">
                <h2
                  ref={(el) => (numberRefs.current[i] = el)}
                  className="text-[#f5c451] "
                >
                  0{stat.suffix}
                </h2>
                <p className="mt-2  text-sm   uppercase text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}