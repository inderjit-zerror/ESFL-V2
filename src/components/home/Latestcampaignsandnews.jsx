"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Carousel from "./Carousel";
import BTN from "../common/BTN";

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

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="bg-[#fdf6ec] py-8 px-4 sm:px-6">
      <div className=" mx-auto px-2 sm:px-6 md:px-10 pt-10">
        {/* Header */}
        <div ref={headerRef} className="text-center  mx-auto mb-10">
          <h1 className=" Heading_1 HNM_FONT text-neutral-900 leading-tight">
            LATEST CAMPAIGNS

            &amp; NEWS
          </h1>
          <p className="my-4  Paragraph_Medium text-neutral-600">
            Latest campaigns, media coverage and company updates.
          </p>

          <BTN txt={"VIEW ALL"} variant={"B1"} />
        </div>

        {/* Combined Campaigns & News */}
        <div className="mb-10">
          <Carousel
            items={content}
            slidesPerView={{ base: 1, sm: 1.3, md: 2.3, lg: 3 }}
            gap={20}
            renderItem={(item) => (
              <div className="flex flex-col group">
                <div
                  className={`aspect-[4/3] rounded-xl overflow-hidden relative ${
                    item.type === "video" ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    if (item.type === "video") setActiveVideo(item);
                  }}
                >
                  <img
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
                  <p className="mt-4 Paragraph_Small MNM_FONT text-[#c8102e] font-semibold!">
                    {item.badge}
                  </p>
                )}

                <p className="mt-2 Paragraph_Medium MNM_FONT text-neutral-800 ">
                  {item.title}
                </p>

                {item.type === "video" ? (
                  <button
                    type="button"
                    onClick={() => setActiveVideo(item)}
                    className="mt-2 text-sm Paragraph_Small MNM_FONT font-semibold! text-[#c8102e] underline cursor-pointer underline-offset-2 hover:text-[#a80d26] text-left"
                  >
                    Know More
                  </button>
                ) : (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-sm Paragraph_Small MNM_FONT font-semibold! text-[#c8102e] underline cursor-pointer underline-offset-2 hover:text-[#a80d26]"
                  >
                    Know More
                  </a>
                )}
              </div>
            )}
          />
        </div>
      </div>

      <VideoModal item={activeVideo} onClose={() => setActiveVideo(null)} />
    </section>
  );
}