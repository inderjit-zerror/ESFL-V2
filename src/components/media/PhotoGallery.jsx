"use client";
import React, { useState } from 'react';
import Image from 'next/image';

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
    <section className="w-full pt-20 px-4 md:px-8 lg:px-12 bg-[#fdf6ec]">
      <div className="max-w-[1600px]  ">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14">
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

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[220px] lg:auto-rows-[280px]">
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
                {/* Image with Grayscale to Color hover effect */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Text Overlay */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white z-10">
                  <div className="text-2xl md:text-3xl   mb-1 leading-none">{img.id}</div>
                  <div className="text-[10px] md:text-xs   tracking-[0.15em] uppercase text-gray-200 group-hover:text-white transition-colors">
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