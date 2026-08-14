"use client";
import React, { useEffect, useRef, useState } from "react";
import BrandSection from "./BrandSection";
import CategoryPopup from "@/components/home/Categorypopup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


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
  const timelineRef = useRef(null); // keeps track of the currently running popup timeline


  // Animate the popup in/out whenever activePopup changes
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

  // Pick the right data set for whichever popup is currently open
  const popupData =
    activePopup === "RAMBANDHU"
      ? RAMBANDHU_POPUP
      : activePopup === "TEMPTIN"
        ? TEMPTIN_POPUP
        : activePopup === "RBM"
          ? RBM_POPUP
          : null;

  return (
    <div className="w-full h-auto md:h-[300svh] relative StickeyHeroContMAin1">
      <div className="w-full md:sticky top-0 z-[10]">
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

      <div className="w-full md:sticky top-0 z-[20]">
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

      <div className="w-full md:sticky top-0 z-[30]">
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
        className="fixed inset-0 z-[999] bg-black/60 items-center justify-center p-3 sm:p-4"
        style={{ display: "none" }}
        onClick={(e) => {
          if (e.target === overlayRef.current) closePopup();
        }}
      >
        <div
          ref={panelRef}
          className="relative rounded-2xl w-fit max-w-[95vw] sm:max-w-[90vw] md:max-w-6xl max-h-[90svh"
        >
          {/* Close button now renders together with the content, so it
              actually unmounts (instead of just fading) once the popup
              is closed — no more lingering X after close. */}
          {popupData && (
            <>
              <button
                type="button"
                onClick={closePopup}
                className="absolute top-3 right-3 sm:top-4 sm:right-5 z-10 w-10 h-10 rounded-full bg-white/80 text-[#E30713]   flex items-center justify-center hover:bg-white"
                aria-label="Close"
              >
                ✕
              </button>

              <CategoryPopup
                logo={popupData.logo}
                categories={popupData.categories}
                accentColor={popupData.accentColor}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sticker;
