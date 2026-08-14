
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BTN from "../common/BTN";

gsap.registerPlugin(ScrollTrigger);

export default function Building() {
  const sectionRef = useRef(null);

  const spiceImages = [
    { src: "/images/home/aboutSection/spice1.png", className: "absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 " },
    { src: "/images/home/aboutSection/spice2.png", className: "absolute bottom-20 left-[20%] w-32 h-32 sm:w-40 sm:h-40 " },
    { src: "/images/home/aboutSection/spice3.png", className: "absolute top-20 right-[25%] w-28 h-28 sm:w-36 sm:h-36 " },
    { src: "/images/home/aboutSection/spice4.png", className: "absolute bottom-10 right-10 w-36 h-36 sm:w-48 sm:h-48 " },
    { src: "/images/home/aboutSection/spice5.png", className: "absolute top-[40%] left-4 w-20 h-20 sm:w-28 sm:h-28 " },
    { src: "/images/home/aboutSection/spice6.png", className: "absolute top-[35%] right-10 w-24 h-24 sm:w-32 sm:h-32 " },
    { src: "/images/home/aboutSection/spice7.png", className: "absolute -bottom-10 left-1/2 w-40 h-40 sm:w-56 sm:h-56  -translate-x-1/2" },
  ];

  const { contextSafe } = useGSAP(() => {
    // Scroll-triggered entrance animation
    gsap.from('.spice-img-container', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%", // Triggers when top of section hits 75% down the viewport
      },
      opacity: 0,
      scale: 0.8,
      y: 40,
      duration: 1,
      stagger: 0.15, // Appears one by one
      ease: "back.out(1.2)",
    });
  }, { scope: sectionRef });

  const handleMouseMove = contextSafe((e) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    // Normalize mouse position between -1 and 1
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    gsap.utils.toArray('.spice-img-container').forEach((el, i) => {
      const depth = (i % 3) + 1; // Creates different layers of depth for parallax effect
      gsap.to(el, {
        x: x * -15 * depth, // Move opposite to the mouse
        y: y * -15 * depth,
        duration: 1.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  });

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex py-44 bg w-full items-center justify-center overflow-hidden"
    >
      {/* Wrapped in a stable div to prevent React removeChild errors during next-view-transitions */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {spiceImages.map((img, i) => (
          <div key={i} className={`${img.className} spice-img-container`}>
            <img
              src={img.src}
              alt="Indian Masala Spice"
              className="spice-img w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex w-full h-fit flex-col pointer-events-none items-center text-center">
        <div className="mb-4 flex items-center gap-3 px-4">
          <h6 className=" uppercase mb-2 text-red">
            Winning the hearts of our consumers since 1994
          </h6>
        </div>

        <h1 data-para-effect className=" uppercase ">
          Building India's <br className="hidden sm:inline" /> Trusted Food <br className="hidden sm:inline" /> Brands.
        </h1>

        <p className="max-w-3xl mt-5">
          Pioneering purity and uncompromising quality in every household.
          Our legacy is built on authentic flavour and world-class
          manufacturing standards.
        </p>

        <div className="mt-10 flex gap-5 w-fit pointer-events-auto sm:max-w-none sm:w-auto max-sm:flex-col">
          <BTN txt={`Know More`} variant="B1" href="/about" />
          <BTN txt={`Become Channel Partner`} variant="B2" href="/become-a-partner" />
        </div>
      </div>
    </section>
  );
}