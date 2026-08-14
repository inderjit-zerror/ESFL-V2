"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Certifications() {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".cert-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.out"
    });
  }, { scope: sectionRef });

  // Data for the top row of certification cards
  const certs = [
    {
      id: 'bis',
      title: 'BIS',
      subtitle: 'Bureau of Indian Standards',
      iconText: '/images/our-process/O1.png', // Placeholder for actual logo
      iconBg: 'bg-blue-600',
    },
    {
      id: 'agmark',
      title: 'AGMARK',
      subtitle: 'Graded agricultural produce',
      iconText: '/images/our-process/O2.png',
      iconBg: 'bg-yellow-500',
    },
    {
      id: 'fssai',
      title: 'FSSAI',
      subtitle: 'Licensed food safety',
      iconText: '/images/our-process/O3.png',
      iconBg: 'bg-[#f6bc25]',
    },
    {
      id: 'iso',
      title: 'ISO 22000',
      subtitle: 'Food safety management',
      iconText: '/images/our-process/O4.png',
      iconBg: 'bg-blue-500',
    },
    {
      id: 'haccp',
      title: 'HACCP',
      subtitle: 'Hazard control system',
      iconText: '/images/our-process/O5.png',
      iconBg: 'bg-blue-400',
    },
  ];

  // Data for the bottom row of statistic cards
  const stats = [
    {
      id: 'tested',
      value: '100%',
      label: 'Batches lab-tested before dispatch',
    },
    {
      id: 'countries',
      value: '15+',
      label: 'Countries served under export norms',
    },
    {
      id: 'years',
      value: '30 yrs',
      label: 'Of audited manufacturing practice',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#E30713] container py-24 text-white">
      <div className="  ">

        {/* Header Section */}
        <div className="max-w-xl mb-12">
          <h6 className="text-[#F5C451] uppercase mb-2">
            Accredited & Audited
          </h6>
          <h2 data-para-effect className="text-[#F5C451] uppercase mb-2">
            Quality & Process <br /> Certifications
          </h2>
          <p className="">
            Independent bodies verify our plants, processes and paperwork year after year — so every pack carries the same guarantee, wherever it travels.
          </p>
        </div>

        {/* Certifications Grid (Top Row) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="cert-card group flex flex-col bg-[#f51d2c] p-5  rounded-xl cursor-pointer transition-colors duration-300 h-52 hover:bg-[#F5C451]"
            >
              {/* Icon Placeholder (Replace with actual Next/Image or SVG) */}
              <div className={``}>
                <img src={cert.iconText} alt="IMG" className=' size-24 object-contain' />
              </div>

              <div className="mt-auto">
                <p className="text-sm   opacity-90 transition-colors duration-300 group-hover:text-[#E30713]">
                  {cert.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Grid (Bottom Row) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="cert-card group bg-[#f51d2c] p-5 h-52 flex flex-col justify-between rounded-xl cursor-pointer transition-colors duration-300 hover:bg-[#F5C451]"
            >
              <h3 data-para-effect className="text-3xl md:text-4xl    mb-3 transition-colors duration-300 group-hover:text-[#E30713]">
                {stat.value}
              </h3>
              <p className="text-sm  opacity-90 transition-colors duration-300 group-hover:text-[#E30713]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}