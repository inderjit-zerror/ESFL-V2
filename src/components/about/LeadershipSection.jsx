"use client";
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const teamMembers = [
  {
    id: 1,
    name: 'WATER NAME SURNAME',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque in aliquet et vulputate. Auctor ut.',
    imageUrl: '/images/about/1.jpg', // Replace with your actual image paths
    highlightName: false,
    bgColor: `#68594C`
  },
  {
    id: 2,
    name: 'NAME SURNAME',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque in aliquet et vulputate. Auctor ut.',
    imageUrl: '/images/about/2.jpg',
    highlightName: false,
    bgColor: `#C3A48F`
  },
  {
    id: 3,
    name: 'NAME SURNAME',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque in aliquet et vulputate. Auctor ut.',
    imageUrl: '/images/about/3.jpg',
    highlightName: true,
    bgColor: `#DDC0A4` // Matches the reddish text in the 3rd card
  },
  {
    id: 4,
    name: 'NAME SURNAME',
    description: 'Lorem ipsum dolor sit amet consectetur. Neque in aliquet et vulputate. Auctor ut.',
    imageUrl: '/images/about/4.jpg',
    highlightName: false,
    bgColor: `#D1C8B9`
  },
];

export default function LeadershipSection() {
  return (
    <section className=" border-b border-black/50   py-12 md:py-24  container ">
      <div className="  ">

        {/* Header Section */}
        <div className="md:text-center mb-12 ">
          {/* <h6 className="text-red uppercase mb-2">
            Leadership
          </h6> */}
          <h2 data-para-effect className="uppercase">
            The People Behind <br /> The Flavour
          </h2>
        </div>

        {/* Team Grid - Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 gap-y-6 md:gap-y-8 md:gap-5">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col text-left group cursor-pointer">

              {/* Image Container */}
              <div style={{ backgroundColor: member.bgColor || 'transparent' }} className={`relative w-full aspect-4/5  rounded-md  overflow-hidden `}>
                <Image fill
                  src={member.imageUrl}
                  alt={member.name}
                  className="h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Container */}
              <div className=" pt-2">
                <h5
                  className={`uppercase`}
                >
                  {member.name}
                </h5>
                <p className="text-sm mt-2">
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