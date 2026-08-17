"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const initialImages = [
  { id: '01', title: 'OFFICE', src: '/gallery/01_office.png' },
  { id: '02', title: 'TEAM', src: '/gallery/02_team.png', highlight: true },
  { id: '03', title: 'EVENTS', src: '/gallery/03_events.png' },
  { id: '04', title: 'FACTORY', src: '/gallery/04_factory.png' },
  { id: '05', title: 'CELEBRATIONS', src: '/gallery/05_celebrations.png' },
  { id: '06', title: 'INNOVATE', src: '/gallery/06_innovate.png' }
];

const layouts = [
  // Layout 0
  [
    'md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-1',
    'md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-1',
    'md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-1',
    'md:col-start-2 md:row-start-1 md:col-span-1 md:row-span-2',
    'md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1',
    'md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-2'
  ],
  // Layout 1
  [
    'md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-1',
    'md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-1',
    'md:col-start-1 md:row-start-2 md:col-span-1 md:row-span-2',
    'md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-2',
    'md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-1',
    'md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-1'
  ],
  // Layout 2
  [
    'md:col-start-1 md:row-start-1 md:col-span-1 md:row-span-2',
    'md:col-start-2 md:row-start-1 md:col-span-2 md:row-span-1',
    'md:col-start-2 md:row-start-2 md:col-span-1 md:row-span-1',
    'md:col-start-3 md:row-start-2 md:col-span-1 md:row-span-2',
    'md:col-start-1 md:row-start-3 md:col-span-1 md:row-span-1',
    'md:col-start-2 md:row-start-3 md:col-span-1 md:row-span-1'
  ]
];

const PhotoGallery = () => {
  const [images, setImages] = useState(initialImages);
  const [layoutIndex, setLayoutIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const shuffleGrid = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      const shuffled = [...images];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setImages(shuffled);
      setLayoutIndex((prev) => (prev + 1) % layouts.length);
      setIsAnimating(false);
    }, 1100);
  };

  return (
    <section className="w-full container   pt-12 md:pt-24 ">
      <div className="">
        {/* Header */}
        <div className="flex  justify-between  items-end mb-8 md:mb-14">
          <div>
            <h6 className="uppercase text-red">
              Insight
            </h6>
            <h2 data-para-effect className="uppercase ">
              PHOTO GALLERY
            </h2>
          </div>
          <button
            onClick={shuffleGrid}
            className="mt-6 md:mt-0 flex items-center gap-2 text-sm   text-[#f05a28] hover:text-[#d04a1f] transition-colors uppercase tracking-widest group"
          >
            Next
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Masonry Grid - Desktop / Simple Grid - Mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[280px]">
          {images.map((img, index) => {
            const currentClass = layouts[layoutIndex][index];
            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${currentClass} ${currentClass.includes('row-span') ? '' : 'h-full'}`}
                style={{
                  clipPath: isAnimating ? 'inset(0 0 100% 0)' : 'inset(0 0 0 0)',
                  transition: 'clip-path 0.6s cubic-bezier(0.65, 0, 0.35, 1)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="cover"
                    sizes="33vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Text Overlay */}
                <div className="absolute p-3 md:p-5 bottom-0 text-white z-10">
                  <div className="uppercase leading-none text-gray-200 group-hover:text-white transition-colors">
                    {img.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;