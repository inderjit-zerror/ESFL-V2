import React from 'react';
import Image from 'next/image';

const Philosophy = () => {
  return (
    <section className="w-full pt-12 md:pt-24 container">
      <div className=" grid grid-cols-1 md:grid-cols-2">
        {/* Left: Image */}
        <div className="relative w-full aspect-square md:aspect-video overflow-hidden">
          <Image
            src="/images/csr/philosophy.png"
            alt="CSR Philosophy - Farmers"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className=" md:pl-12  ">
          <h2  data-para-effect className=" uppercase  mb-8">
            OUR CSR<br />PHILOSOPHY
          </h2>

          <div className="space-y-6">
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