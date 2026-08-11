import React from 'react';
import Image from 'next/image';

// Custom 8-pointed asterisk icon for the list items
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

export default function ResearchDevelopment() {
  const listItems = [
    "Product Innovation",
    "Ingredient Research",
    "Consumer Testing"
  ];

  return (
    <section className="bg-[#fcfaf7] min-h-screen max-sm:w-full  py-10 px-4 md:px-8 lg:px-0 relative overflow-hidden flex items-center">
      
      
      <div className=" mx-auto w-full sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <div className="relative w-full h-[82vh] lg:aspect-square  rounded-sm overflow-hidden">
            {/* Make sure to place your image in the public folder and adjust the src if using next/image */}
            <Image
              src="/images/our-process/IMGOUS.jpg"
              alt="Scientists evaluating spices in a lab"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col pr-4 lg:pr-16 max-sm:px-0  ">
            <h2 className="text-4xl md:text-5xl Heading_1 max-sm:text-[2rem]! max-sm:leading-[2rem]! lg:text-6xl font-black text-[black] uppercase leading-[1.1] mb-6 tracking-tight">
              Research & <br /> Development
            </h2>
            
            <p className="text-[#595959] Parahraph_Medium text-base md:text-lg leading-relaxed mb-10 font-medium max-w-lg">
              Our scientists and food technologists work to create products 
              that exceed market expectations — focusing on nutrient 
              density, functional benefits and the authentic taste Indian 
              kitchens expect.
            </p>

            <ul className="space-y-4">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-center text-lg md:text-xl font-bold text-[#4a4a4a]">
                  <BulletIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}