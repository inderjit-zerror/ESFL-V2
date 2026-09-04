"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import BTN from "../common/BTN";
import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const content = [
  {
    id: "swad-ka-asli-jadoo",
    badge: "FEATURED CAMPAIGN",
    title: "SWAD KA ASLI JADOO — THE TASTE OF TRUE MAGIC",
    description: "Experience the authentic flavors and rich heritage of our spices that bring true magic to every meal you cook.",
    image: "/images/home/P1.png",
    type: "video",
    videoUrl: "/videos/swad-ka-asli-jadoo.mp4",
  },
  {
    id: "purity-first-reels",
    badge: "DIGITAL MEDIA",
    title: "PURITYFIRST REELS SERIES",
    description: "Watch our exclusive behind-the-scenes digital series showcasing our uncompromising commitment to 100% natural ingredients.",
    image: "/images/home/P2.png",
    type: "video",
    videoUrl: "/videos/purity-first-reels.mp4",
  },
  {
    id: "harvest-diaries",
    badge: "PRINT",
    title: "HARVEST DIARIES — FROM FARM TO YOUR PLATE",
    description: "Follow the incredible journey of our locally sourced produce, from the lush green fields straight to your dining table.",
    image: "/images/home/P5.png",
    type: "article",
    link: "#",
  },
  {
    id: "masala-mornings",
    badge: "TVC",
    title: "MASALA MORNINGS — A NEW DAILY RITUAL",
    description: "Kickstart your day with a perfect blend of spices. Discover the new daily ritual that families across the nation are embracing.",
    image: "/images/home/P4.png",
    type: "video",
    videoUrl: "/videos/masala-mornings.mp4",
  },
  {
    id: "esfl-award",
    badge: "NEWS",
    title: "ESFL wins 'Emerging Food Brand of the Year' at the National Food Summit.",
    description: "We are incredibly proud and honored to receive national recognition for our consistent quality, innovation, and rapid market growth.",
    image: "/images/home/P3.png",
    type: "article",
    link: "#",
  },
  {
    id: "sustainable-packaging",
    badge: "NEWS",
    title: "Sustainable packaging initiative launched across the Ram Bandhu brand.",
    description: "In our pledge to protect the environment, we have successfully rolled out eco-friendly, biodegradable packaging for our entire product line.",
    image: "/images/home/P4.png",
    type: "article",
    link: "#",
  },
  {
    id: "csr-farmers",
    badge: "NEWS",
    title: "CSR outreach empowers over 5,000 farmers across rural Maharashtra.",
    description: "Our dedicated agricultural training programs and fair-trade initiatives have provided sustainable livelihoods and better crop yields.",
    image: "/images/home/P5.png",
    type: "article",
    link: "#",
  },
  {
    id: "new-factory",
    badge: "NEWS",
    title: "New state-of-the-art manufacturing facility opens in Pune.",
    description: "The multi-million dollar facility is equipped with automated hygiene lines to double our production capacity and meet rising global demand.",
    image: "/images/home/P1.png",
    type: "article",
    link: "#",
  },
  {
    id: "export-growth",
    badge: "NEWS",
    title: "Export volumes cross 15 countries as international demand grows.",
    description: "Our authentic Indian flavors have successfully expanded their footprint, reaching new homes and supermarkets across the globe.",
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
    <section className="container   py-12 md:py-24 ">
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
          <button aria-label="Previous slide" onClick={() => swiperInstance?.slidePrev()} disabled={isBeginning} className="w-10 h-10 rounded-full  bg-[#F5C451] flex items-center justify-center  hover:bg-[#D52E12] text-[#D52E12] hover:text-white hover:border-[#D52E12] transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none"><RiArrowLeftLine className="size-4" /></button>
          <button aria-label="Next slide" onClick={() => swiperInstance?.slideNext()} disabled={isEnd} className="w-10 h-10 rounded-full  bg-[#F5C451] flex items-center justify-center  hover:bg-[#D52E12] text-[#D52E12] hover:text-white hover:border-[#D52E12] transition-colors duration-300 disabled:opacity-30 disabled:pointer-events-none"> <RiArrowRightLine className="size-4" /> </button>
        </div>
        {/* Combined Campaigns & News */}
        <div className="max-sm:mt-10">
          <Swiper
            spaceBetween={10}
            speed={800}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              768: { slidesPerView: 3, spaceBetween: 16 },
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
              <SwiperSlide key={item.id} className="h-auto!">
                <div className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col h-full">
                  <div
                    className={`relative w-full h-56 sm:h-64 overflow-hidden ${item.type === "video" ? "cursor-pointer" : ""
                      }`}
                    onClick={() => {
                      if (item.type === "video") setActiveVideo(item);
                    }}
                  >
                    <Image
                      fill
                      src={item.image}
                      alt={item.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/35 transition-colors">
                        <span className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                          <PlayIcon />
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col grow ">
                    <h5 className="uppercase mb-4 line-clamp-2">
                      {item.title}
                    </h5>
                    <p className="opacity-70  mb-8  grow">
                      {item.description}
                    </p>

                    {item.type === "video" ? (
                      <button
                        type="button"
                        onClick={() => setActiveVideo(item)}
                        className="text-sm text-[#E30713] uppercase flex items-center gap-2 hover:opacity-80 group-hover:gap-4 transition-all duration-300 text-left"
                      >
                        Know More <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#E30713] uppercase flex items-center gap-2 hover:opacity-80 group-hover:gap-4 transition-all duration-300"
                      >
                        Know More <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                      </a>
                    )}
                  </div>
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