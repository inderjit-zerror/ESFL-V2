import React from 'react';
import Image from 'next/image';

// Custom stylized leaf/check icon for the list items
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

export default function QualityControl() {
  const features = [
    "In-line Quality Checks",
    "Food Safety Compliance",
    "Laboratory Testing"
  ];

  return (
    <section className="w-full bg-[#E70514] min-h-[screen] flex items-stretch p-5 sm:p-10">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 bg">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-16 lg:px-0 max-sm:px-0">
          <div className="max-w-xl">
            <h2 className="text-4xl Heading_1 md:text-5xl lg:text-6xl max-sm:text-[2rem]! max-sm:leading-[2rem]! font-extrabold text-[#F5C451] uppercase leading-tight mb-6 tracking-wide">
              Quality Control
            </h2>
            
            <p className="text-[#f8be7e] Paragraph_Medium text-base md:text-lg leading-relaxed mb-10 font-medium">
              Rigorous checks run throughout the production line so that 
              every product leaving our facility meets international safety 
              and purity benchmarks — batch after batch, year after year.
            </p>

            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center text-xl Paragraph_Medium md:text-2xl font-bold text-[#F5C451] tracking-wide"
                >
                  <CheckLeafIcon />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative w-full h-[50vh] lg:h-auto min-h-[400px] lg:min-h-[82vh] ">
          <Image
            src="/images/our-process/IGE.jpg"
            alt="Quality Control Inspector examining product"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

      </div>
    </section>
  );
}