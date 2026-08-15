"use client";

import React from 'react';
import Image from 'next/image';

const BulletIcon = () => (
  <svg
    className="w-5 h-5 mr-4 text-[#4a4a4a] flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v18m9-9H3m15.364-6.364l-12.728 12.728m12.728 0L5.636 5.636"
    />
  </svg>
);

const CheckLeafIcon = () => (
  <svg
    className="w-6 h-6 mr-3 text-[#F5C451] flex-shrink-0"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" />
    <path d="M16.5 5.5A4.5 4.5 0 0012 10a4.5 4.5 0 00-4.5-4.5A4.5 4.5 0 003 10c0 3.5 4 6.5 9 11 5-4.5 9-7.5 9-11a4.5 4.5 0 00-4.5-4.5z" opacity="0.3" />
  </svg>
);

export default function ResearchAndQuality() {
  const rdList = [
    "Product Innovation",
    "Ingredient Research",
    "Consumer Testing"
  ];

  const qcList = [
    "In-line Quality Checks",
    "Food Safety Compliance",
    "Laboratory Testing"
  ];

  return (
    <div className='relative'>
      {/* Research & Development Section */}
      <section className="md:sticky! bg-beige top-0 -z-10 container w-full  md:h-svh overflow-hidden  ">
            {/* <div className="pattern_bg"></div> */}

        <div className="grid h-fit w-full py-5 gap-8 md:gap-0 grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex items-center md:pr-32 ">
            <div className="w-full">
              <h2 data-para-effect className="text-black uppercase">
                Research & <br /> Development
              </h2>
              <p className="mt-6 md:mt-14  opacity-70">
                Our scientists and food technologists work to create products
                that exceed market expectations — focusing on nutrient
                density, functional benefits and the authentic taste Indian
                kitchens expect.
              </p>
              <ul className="space-y-4 mt-8">
                {rdList.map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <BulletIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative w-full max-sm:aspect-square md:h-[75vh] group overflow-hidden">
            <Image
              src="/images/our-process/IMGOUS.jpg"
              alt="Scientists evaluating spices in a lab"
              fill
              className="object-cover transition-all duration-300 ease-in group-hover:scale-[1.05]"
            />
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="relative z-10 bg-[#E30713] container w-full  md:h-svh overflow-hidden  text-white">
            <div className="pattern_bg"></div>

        <div className="grid h-fit w-full py-5 gap-8 md:gap-0 grid-cols-1 md:grid-cols-2 md:[&>*:first-child]:order-2">
          {/* Right Content (Order 2) */}
          <div className="flex items-center md:pl-32">
            <div className="w-full">
              <h2 data-para-effect className="text-[#F5C451] uppercase">
                Quality Control
              </h2>
              <p className="mt-6 md:mt-14 text-[#f8be7e]">
                Rigorous checks run throughout the production line so that
                every product leaving our facility meets international safety
                and purity benchmarks — batch after batch, year after year.
              </p>
              <ul className="space-y-5 mt-8">
                {qcList.map((feature, index) => (
                  <li key={index} className="flex items-center text-lg text-[#F5C451] ">
                    <CheckLeafIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Left Image (Order 1) */}
          <div className="relative w-full max-sm:aspect-square md:h-[75vh] group overflow-hidden mt-0 md:mt-[10vh]">
            <Image
              src="/images/our-process/IGE.jpg"
              alt="Quality Control Inspector examining product"
              fill
              className="object-cover transition-all duration-300 ease-in group-hover:scale-[1.05]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
