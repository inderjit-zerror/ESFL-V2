"use client";
import React, { useEffect, useRef, useState } from "react";
import BrandSection from "./BrandSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiArrowLeftLine, RiArrowRightLine, RiCloseLine } from "@remixicon/react";
gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const RAMBANDHU_POPUP = {
  logo: "/images/home/RamBandhuLogo.png",
  accentColor: "#E30713",
  categories: [
    {
      id: "ground-spices",
      name: "GROUND SPICES",
      image: "/images/home/NewRM.png",
    },
    {
      id: "blended-spices",
      name: "BLENDED SPICES",
      image: "/images/home/NewRM.png",
    },
    {
      id: "signature-products",
      name: "SIGNATURE PRODUCTS",
      image: "/images/home/NewRM.png",
    },
    { id: "pickles", name: "PICKLES", image: "/images/home/NewRM.png" },
    { id: "papads", name: "PAPADS", image: "/images/home/NewRM.png" },
    { id: "jams", name: "JAMS", image: "/images/home/NewRM.png" },
    {
      id: "beverage-mixes",
      name: "BEVERAGE MIXES",
      image: "/images/home/NewRM.png",
    },
    { id: "spice-mixes", name: "SPICE MIXES", image: "/images/home/NewRM.png" },
    { id: "snacks", name: "SNACKS", image: "/images/home/NewRM.png" },
  ],
};

const TEMPTIN_POPUP = {
  logo: "/images/home/TemptinLogo.png",
  accentColor: "#E30713",
  categories: [
    { id: "ketchup", name: "KETCHUP", image: "/images/home/NEWTEM.png" },
    { id: "sauces", name: "SAUCES", image: "/images/home/NEWTEM.png" },
    { id: "dips", name: "DIPS", image: "/images/home/NEWTEM.png" },
    { id: "chutneys", name: "CHUTNEYS", image: "/images/home/NEWTEM.png" },
    {
      id: "chinese-spices",
      name: "CHINESE SPICES",
      image: "/images/home/NEWTEM.png",
    },
  ],
};

const RBM_POPUP = {
  logo: "/images/home/RBMLogo.png",
  accentColor: "#B32727",
  categories: [
    {
      id: "meat-masala",
      name: "MEAT MASALA",
      image: "/images/home/NewRBM.png",
    },
    {
      id: "chicken-masala",
      name: "CHICKEN MASALA",
      image: "/images/home/NewRBM.png",
    },
    {
      id: "mutton-biryani-mix",
      name: "MUTTON BIRYANI MIX",
      image: "/images/home/NewRBM.png",
    },
    {
      id: "chicken-gravy",
      name: "CHICKEN GRAVY",
      image: "/images/home/NewRBM.png",
    },
  ],
};

const Sticker = () => {
  const [activePopup, setActivePopup] = useState(null);
  const overlayRef = useRef(null);
  const panelRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const isOpen = activePopup !== null;

    // Kill any in-flight open/close animation before starting a new one.
    // Without this, rapid open->close->open clicks create overlapping
    // timelines that fight each other and can leave the panel / close
    // button stuck at a visible opacity even after "closing".
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const TTL = gsap.timeline();
    timelineRef.current = TTL;

    if (isOpen) {
      // Lock background scroll on mobile while the popup is open so the
      // page underneath doesn't scroll along with the popup content.
      document.body.style.overflow = "hidden";

      TTL.set(overlayRef.current, { display: "flex", pointerEvents: "auto" });
      TTL.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" },
        "<",
      );
      TTL.fromTo(
        panelRef.current,
        { opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.6)" },
        "<",
      );
    } else if (overlayRef.current) {
      document.body.style.overflow = "";

      // Block clicks/interaction immediately while it fades out
      TTL.set(overlayRef.current, { pointerEvents: "none" });
      TTL.to(
        panelRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        "<",
      );
      TTL.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            gsap.set(overlayRef.current, { display: "none" });
          },
        },
        "<",
      );
    }

    return () => {
      TTL.kill();
      document.body.style.overflow = "";
    };
  }, [activePopup]);

  const closePopup = () => setActivePopup(null);

  const popupData =
    activePopup === "RAMBANDHU"
      ? RAMBANDHU_POPUP
      : activePopup === "TEMPTIN"
        ? TEMPTIN_POPUP
        : activePopup === "RBM"
          ? RBM_POPUP
          : null;

  return (
    <div className="w-full h-auto md:h-[calc(300vh-15rem)]  relative StickeyHeroContMAin1">
      <div className="w-full md:sticky top-20 z-[10]">
        <BrandSection
          V={"B2"}
          className="static  DIVC-1"
          title="RAM BANDHU"
          subtitle="Ram Bandhu - Aapka Taste Partner"
          description={`Ram Bandhu has been a trusted name in Indian kitchens forover 32 years, offering a wide range of spices, pickles, papads, hing, spice mixes, and snacks.
Built on quality, trust, and continuous innovation, the brand creates products that suit the evolving tastes and lifestyles of Indian consumers. with the aim of bringing convenience to the art of cooking. `}
          highlight={``}
          buttonText="View Range"
          heroImage="/images/home/RamBandhu.jpg"
          logo="/images/home/RamBandhuLogo.png"
          onButtonClick={() => setActivePopup("RAMBANDHU")}
        />
      </div>

      <div className="w-full md:sticky top-20 z-[20]">
        <BrandSection
          V={"B1"}
          bgColor="bg-beige"
          textColor="text-[#E30713]"
          titleColor="text-[#E30713]"
          highlightColor="text-[#FFBE55]"
          buttonBg="bg-[#E30713]"
          buttonTextColor="text-[white]"
          className="static  BrandSection2"
          title="Temptin'"
          subtitle="Temptin' - Taste Mein Twist..."
          description={`The youthful brand of Temptin’ symbolises the temptation that is associated with lip smacking culinary delights. The very sight of delicious food is an enticement that fills us with the desire to relish it. 

Brand Temptin' stands for the same feeling and makes your food tempting and irresistible. The range consists of Ketchup, Sauces, Dips, Chutneys, Chinese Spices etc.`}
          highlight={``}
          buttonText="View Range"
          heroImage="/images/home/Temptin.jpg"
          logo="/images/home/TemptinLogo.png"
          onButtonClick={() => setActivePopup("TEMPTIN")}
        />
      </div>

      <div className="w-full md:sticky top-20 z-[30]">
        <BrandSection
          V={"B2"}
          bgColor="bg-[#E30713]"
          textColor="text-[white]"
          titleColor="text-[#FFC55C]"
          highlightColor="text-[white]"
          buttonBg="bg-[#FFC55C]"
          buttonTextColor="text-[#B32727]"
          className="static  BrandSection3"
          title="RBM"
          subtitle="Sarvottam Masale, RBM Masale"
          description={`Priced strategically the products under this brand targets the price conscious consumer without compromising on quality or taste.  
 Meat Masala, Chicken Masala, Mutton Biryani Mix, Chicken Gravy are some of the products in the RBM line-up.`}
          highlight={``}
          buttonText="View Range"
          heroImage="/images/home/GN.png"
          logo="/images/home/RBMLogo.png"
          onButtonClick={() => setActivePopup("RBM")}
        />

      </div>

      {/* Popup overlay — shared shell, content swaps per brand */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xs items-center justify-center p-3 sm:p-4"
        style={{ display: "none" }}
        onClick={(e) => {
          if (e.target === overlayRef.current) closePopup();
        }}
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10 w-10 h-10 cursor-pointer shrink-0 rounded-full bg-white text-[#E30713]   flex items-center justify-center hover:bg-[#E30713] hover:text-white transition-all duration-300 leading-none"
          aria-label="Close"
        >
          <RiCloseLine className="size-5" />
        </button>
        <div
          ref={panelRef}
          className="relative w-full md:w-fit md:h-[80vh] flex items-center gap-x-5 aspect-video"
        >
          <div className=" max-sm:absolute max-sm:scale-75 swiper-button-prev-custom z-10 w-10 h-10 cursor-pointer shrink-0 rounded-full bg-white text-[#E30713] flex items-center justify-center hover:bg-[#E30713] hover:text-white transition-all duration-300 leading-none">
            <RiArrowLeftLine />
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
             speed={800}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            grabCursor={true}
            className="w-full h-full cursor-grab active:cursor-grabbing rounded-xl overflow-hidden"
          >
            {popupData?.categories.map((cat, index) => (
              <SwiperSlide key={cat.id || index} className="relative">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="max-sm:absolute max-sm:scale-75 max-sm:right-0 swiper-button-next-custom z-10 w-10 h-10 cursor-pointer shrink-0 rounded-full bg-white text-[#E30713] flex items-center justify-center hover:bg-[#E30713] hover:text-white transition-all duration-300 leading-none">
            <RiArrowRightLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sticker;
