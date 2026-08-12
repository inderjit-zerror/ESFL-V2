import React from 'react';
import Image from 'next/image';

const Philosophy = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 px-6 sm:px-10">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Image */}
        <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/4] overflow-hidden">
          <Image
            src="/images/csr/philosophy.png"
            alt="CSR Philosophy - Farmers"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center max-w-2xl">
          <h2 className="Heading_1 text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight mb-8">
            OUR CSR<br/>PHILOSOPHY
          </h2>
          
          <div className="space-y-6 text-[#555] font-medium leading-relaxed text-sm sm:text-base">
            <p>
              Empire Spices &amp; Foods Ltd. believes that true corporate
              success is measured not just by financial metrics, but by the
              positive impact we leave on the communities we serve. Our
              commitment to social equity and environmental stewardship
              is woven into the very fabric of our business operations.
            </p>
            <p>
              We focus on sustainable growth that empowers marginalised
              populations, particularly in rural sectors where our raw
              materials are sourced. By fostering long-term partnerships
              with farmers and local labour, we ensure that our value chain
              supports human dignity and ecological balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;