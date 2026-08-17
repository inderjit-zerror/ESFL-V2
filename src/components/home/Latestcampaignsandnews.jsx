"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BTN from "../common/BTN";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

// Combined campaigns + news content.
// type: "video"   -> tile opens a popup player (set `videoUrl`)
// type: "article" -> tile opens the news/PR link in a new tab (set `link`)
const content = [
  {
    id: "swad-ka-asli-jadoo",
    badge: "FEATURED CAMPAIGN",
    title: "SWAD KA ASLI JADOO — THE TASTE OF TRUE MAGIC",
    image: "/images/home/P1.png",
    type: "video",
    videoUrl: "/videos/swad-ka-asli-jadoo.mp4",
  },
  {
    id: "purity-first-reels",
    badge: "DIGITAL MEDIA",
    title: "#PURITYFIRST REELS SERIES",
    image: "/images/home/P2.png",
    type: "video",
    videoUrl: "/videos/purity-first-reels.mp4",
  },
  {
    id: "harvest-diaries",
    badge: "PRINT",
    title: "HARVEST DIARIES — FROM FARM TO YOUR PLATE",
    image: "/images/home/P5.png",
    type: "article",
    link: "#",
  },
  {
    id: "masala-mornings",
    badge: "TVC",
    title: "MASALA MORNINGS — A NEW DAILY RITUAL",
    image: "/images/home/P4.png",
    type: "video",
    videoUrl: "/videos/masala-mornings.mp4",
  },
  {
    id: "esfl-award",
    badge: "NEWS",
    title: "ESFL wins 'Emerging Food Brand of the Year' at the National Food Summit.",
    image: "/images/home/P3.png",
    type: "article",
    link: "#",
  },
  {
    id: "sustainable-packaging",
    badge: "NEWS",
    title: "Sustainable packaging initiative launched across the Ram Bandhu brand.",
    image: "/images/home/P4.png",
    type: "article",
    link: "#",
  },
  {
    id: "csr-farmers",
    badge: "NEWS",
    title: "CSR outreach empowers over 5,000 farmers across rural Maharashtra.",
    image: "/images/home/P5.png",
    type: "article",
    link: "#",
  },
  {
    id: "new-factory",
    badge: "NEWS",
    title: "New state-of-the-art manufacturing facility opens in Pune.",
    image: "/images/home/P1.png",
    type: "article",
    link: "#",
  },
  {
    id: "export-growth",
    badge: "NEWS",
    title: "Export volumes cross 15 countries as international demand grows.",
    image: "/images/home/P2.png",
    type: "article",
    link: "#",
  },
];

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl aspect-video bg-black rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-neutral-900 hover:bg-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <video
          src={item.videoUrl}
          className="w-full h-full"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}

export default function LatestCampaignsAndNews() {
  const headerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="container   py-12 md:py-24  border-b border-black/50">
      <div className="">
        {/* Header */}
        <div ref={headerRef} className="md:text-center">
          <h2 data-para-effect className="">
            LATEST CAMPAIGNS
            &amp; NEWS
          </h2>
          <p className="my-2">
            Latest campaigns, media coverage and company updates.
          </p>
        </div>

        <div className="flex max-sm:hidden w-full mb-5 md:justify-end gap-x-2">
          <button onClick={() => swiperInstance?.slidePrev()} disabled={isBeginning} className="w-10 h-10 rounded-full  bg-[#F5C451] flex items-center justify-center  hover:bg-[#D52E12] text-[#D52E12] hover:text-white hover:border-[#D52E12] transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none"><RiArrowLeftLine className="size-4" /></button>
          <button onClick={() => swiperInstance?.slideNext()} disabled={isEnd} className="w-10 h-10 rounded-full  bg-[#F5C451] flex items-center justify-center  hover:bg-[#D52E12] text-[#D52E12] hover:text-white hover:border-[#D52E12] transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none"> <RiArrowRightLine className="size-4" /> </button>
        </div>
        {/* Combined Campaigns & News */}
        <div className="max-sm:mt-10">
          <Swiper
            spaceBetween={10}
            speed={800}
            breakpoints={{
              0: { slidesPerView: 1.1},
              768: { slidesPerView: 3, spaceBetween:20 },
            }}
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
          >
            {content.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col group h-full">
                  <div
                    className={`aspect-[4/3] rounded-lg overflow-hidden relative ${item.type === "video" ? "cursor-pointer" : ""
                      }`}
                    onClick={() => {
                      if (item.type === "video") setActiveVideo(item);
                    }}
                  >
                    <Image
                      fill
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
                        <span className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                          <PlayIcon />
                        </span>
                      </div>
                    )}
                  </div>

                  {item.badge && (
                    <h6 className="mt-2     text-[#E30713] ">
                      {item.badge}
                    </h6>
                  )}

                  <p className="  md:mt-2">
                    {item.title}
                  </p>

                  {item.type === "video" ? (
                    <button
                      type="button"
                      onClick={() => setActiveVideo(item)}
                      className="mt-2 text-sm      ! text-[#E30713] underline cursor-pointer underline-offset-2 hover:text-[#a80d26] text-left"
                    >
                      Know More
                    </button>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 text-sm      ! text-[#E30713] underline cursor-pointer underline-offset-2 hover:text-[#a80d26]"
                    >
                      Know More
                    </a>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full center mt-3 md:mt-5">
          <BTN txt={"view all"} variant={"B1"} />
        </div>
      </div>

      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}