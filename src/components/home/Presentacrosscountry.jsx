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
            toggleActions:"play none none reverse"
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
      className="relative   pt-12 md:pt-24  overflow-hidden     "
    >
      <div className="w-full h-full pb-24 md:pb-70 relative">
        {/* <img src="/images/home/FLOWER.png" alt="IMG" className="w-[15%] aspect-square absolute rotate-z-180  right-[2%] top-[2%] z-99" /> */}
        <Image height={1080} width={1920} src="/images/home/PP.png" alt="IMG" className=" sm:w-full object-cover  absolute bottom-0! left-0 rotate-180" />

        <div className="relative container w-full flex flex-col items-center justify-center space-y-12 md:space-y-20 z-10">
          {/* Top: headline + description */}
          <div className="relative md:max-w-4xl mx-auto space-y-6 md:text-center psac-fade">
            <h2 data-para-effect className=" uppercase">
              Present Across the Country to Serve You Incessantly
            </h2>

            <p className="md:max-w-3xl mt-5">
              ESFL&apos;s Network Spans Manufacturing Units, Agri Sites And
              Depots Across Delhi, Noida, Himachal Pradesh, Assam And Tripura.
            </p>
          </div>

          {/* Bottom: stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 w-full">
            {stats.map((stat, i) => (
              <div key={stat.id} className=" md:text-center">
                <p
                  ref={(el) => (numberRefs.current[i] = el)}
                  className=" text-5xl md:text-6xl border-b  pb-3 mb-3 relative z-10 font-semibold "
                >
                  0{stat.suffix}
                </p>

                <p className=" uppercase relative z-10 opacity-80 font-medium">
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