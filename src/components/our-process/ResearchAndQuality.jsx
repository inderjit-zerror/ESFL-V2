"use client";

import React from 'react';
import Image from 'next/image';
import { Lightbulb, Beaker, Users, Activity, ShieldCheck, Microscope } from 'lucide-react';

export default function ResearchAndQuality() {
  const rdList = [
    { text: "Product Innovation", icon: Lightbulb },
    { text: "Ingredient Research", icon: Beaker },
    { text: "Consumer Testing", icon: Users }
  ];

  const qcList = [
    { text: "In-line Quality Checks", icon: Activity },
    { text: "Food Safety Compliance", icon: ShieldCheck },
    { text: "Laboratory Testing", icon: Microscope }
  ];

  return (
    <div className='relative'>
      {/* Research & Development Section */}
      <section className="md:sticky! bg-beige top-0 -z-10 container w-full  md:h-svh overflow-hidden  ">
            {/* <div className="pattern_bg"></div> */}

        <div className="grid h-fit w-full py-5 max-sm:pt-12 gap-8 md:gap-0 grid-cols-1 md:grid-cols-2">
          {/* Left Content */}
          <div className="flex items-center md:pr-32 ">
            <div className="w-full">
              <h2 data-para-effect className="text-black uppercase">
                Research & <br /> Development
              </h2>
              <p className="mt-6 md:mt-14">
                Our scientists and food technologists work to create products
                that exceed market expectations — focusing on nutrient
                density, functional benefits and the authentic taste Indian
                kitchens expect.
              </p>
              <ul className="space-y-4 mt-8">
                {rdList.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center text-lg">
                      <Icon className="w-5 h-5 mr-4 text-[#4a4a4a] flex-shrink-0" />
                      {item.text}
                    </li>
                  );
                })}
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

        <div className="grid h-fit w-full py-5 max-sm:pt-12 gap-8 md:gap-0 grid-cols-1 md:grid-cols-2 md:[&>*:first-child]:order-2">
          {/* Right Content (Order 2) */}
          <div className="flex items-center md:pl-32">
            <div className="w-full">
              <h2 data-para-effect className="text-[#ffffff] uppercase">
                Quality Control
              </h2>
              <p className="mt-6 md:mt-14 text-[#ffffff]">
                Rigorous checks run throughout the production line so that
                every product leaving our facility meets international safety
                and purity benchmarks — batch after batch, year after year.
              </p>
              <ul className="space-y-5 mt-8">
                {qcList.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center text-lg text-[#ffffff] ">
                      <Icon className="w-6 h-6 mr-3 text-[#ffffff] flex-shrink-0" />
                      {item.text}
                    </li>
                  );
                })}
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
