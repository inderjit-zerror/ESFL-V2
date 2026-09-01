
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BTN from "../common/BTN";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Building() {
  const sectionRef = useRef(null);

  const spiceImages = [
    { src: "/images/home/aboutSection/spice1.png", className: "absolute max-sm:hidden -top-10 md:top-[30%] -left-24 w-44 h-44 sm:w-72 sm:h-72 " },
    { src: "/images/home/aboutSection/spice7.png", className: "absolute  max-sm:hidden top-28 md:top-20 right-[-15%] md:right-[5%] w-44 h-44 sm:w-62 sm:h-62 " },
    { src: "/images/home/aboutSection/spice4.png", className: "absolute -bottom-20 -right-14 w-50 h-50 sm:w-60 sm:h-60 " },
    { src: "/images/home/aboutSection/spice3.png", className: "absolute  -bottom-10 left-0 md:left-[40%] w-40 h-40 sm:w-56 sm:h-56 " },
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
      className="relative container flex py-32 max-sm:pt-12 md:py-44 md:pt-24 bg w-full items-center justify-center overflow-hidden"
    >
      {/* Wrapped in a stable div to prevent React removeChild errors during next-view-transitions */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {spiceImages.map((img, i) => (
          <div key={i} className={`${img.className} spice-img-container`}>
            <Image
              src={img.src}
              alt="Indian Masala Spice"
              width={200}
              height={200}
              className="spice-img object-contain"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex w-full h-fit flex-col pointer-events-none md:items-center md:text-center">
        {/* <div className="flex md:items-center">
          <h6 className=" uppercase mb-2 text-red">
            Winning the hearts of our consumers since 1994
          </h6>
        </div> */}

        <h1 data-para-effect className=" uppercase ">
          Building India's <br className="hidden sm:inline" /> Trusted Food <br className="hidden sm:inline" /> Brands.
        </h1>

        <p className="max-w-3xl mt-5">
          Pioneering purity and uncompromising quality in every household.
          Our legacy is built on authentic flavour and world-class
          manufacturing standards.
        </p>

        <div className="mt-10 flex gap-3 md:gap-5 w-fit pointer-events-auto flex-wrap">
          <BTN txt={`Know More`} variant="B1" href="/about" />
        </div>
      </div>
    </section>
  );
}