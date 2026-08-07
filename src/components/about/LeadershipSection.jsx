import React from 'react';


const teamMembers = [
  {
    id: 1,
    name: 'WATER NAME SURNAME',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque in aliquet et vulputate. Auctor ut.',
    imageUrl: '/images/about/1.jpg', // Replace with your actual image paths
    highlightName: false,
    bgColor:`#68594C`
  },
  {
    id: 2,
    name: 'NAME SURNAME',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque in aliquet et vulputate. Auctor ut.',
    imageUrl: '/images/about/2.jpg',
    highlightName: false,
    bgColor:`#C3A48F`
  },
  {
    id: 3,
    name: 'NAME SURNAME',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque in aliquet et vulputate. Auctor ut.',
    imageUrl: '/images/about/3.jpg',
    highlightName: true,
    bgColor:`#DDC0A4` // Matches the reddish text in the 3rd card
  },
  {
    id: 4,
    name: 'NAME SURNAME',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque in aliquet et vulputate. Auctor ut.',
    imageUrl: '/images/about/4.jpg',
    highlightName: false,
    bgColor:`#D1C8B9`
  },
];

export default function LeadershipSection() {
  return (
    <section className="bg-[#fcfaf5] py-16 px-10 font-sans">
      <div className=" mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 flex flex-col items-center">
          <span className="text-[#E70514] font-bold tracking-wide uppercase text-sm mb-2">
            Leadership
          </span>
          <h2 className="text-[#3a3a3a] Heading_1 font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight">
            The People Behind The Flavour
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col text-left group cursor-pointer">
              
              {/* Image Container */}
              <div style={{ backgroundColor: member.bgColor || 'transparent' }} className={`relative w-full aspect-[5/4] mb-5 rounded-2xl flex justify-center items-center overflow-hidden `}>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Container */}
              <div className="px-1 p-4 transition-colors duration-300  rounded-xl">
                <h3 
                  className={` text-sm tracking-widest Paragraph_Medium font-bold! tracking-tighter uppercase mb-2 group-hover:text-[#E70514] `}
                >
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm! leading-sm! Paragraph_Medium pr-2">
                  {member.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}