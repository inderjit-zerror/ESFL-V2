"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function ArrowIcon({ direction = "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 sm:w-5 sm:h-5"
      style={{ transform: direction === "left" ? "rotate(180deg)" : "none" }}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function CategoryPopup({
  logo,
  categories = [],
  accentColor = "#E70514",
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const isAnimating = useRef(false);
  const dirRef = useRef(1); // 1 = next, -1 = prev

  // Ref for swipe gestures
  const touchStartX = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.7, ease: "power2.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goTo = (nextIndex, direction) => {
    if (isAnimating.current || nextIndex === activeIndex) return;
    isAnimating.current = true;
    dirRef.current = direction;

    const outX = direction === 1 ? -30 : 30;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    if (titleRef.current) {
      tl.to(
        titleRef.current,
        { y: -10, opacity: 0, duration: 0.2, ease: "power2.in" },
        0
      );
    }

    tl.to(
      imageRef.current,
      {
        x: outX,
        opacity: 0,
        scale: 1.04,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveIndex(nextIndex);
        },
      },
      0
    );
  };

  const handlePrev = () => {
    const nextIndex = (activeIndex - 1 + categories.length) % categories.length;
    goTo(nextIndex, -1);
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % categories.length;
    goTo(nextIndex, 1);
  };

  // Swipe logic for touch devices
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    // Threshold of 50px for a swipe
    if (diffX > 50) {
      handleNext();
    } else if (diffX < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  useEffect(() => {
    const inX = dirRef.current === 1 ? 30 : -30;

    gsap.fromTo(
      imageRef.current,
      { x: inX, opacity: 0, scale: 1.04 },
      { x: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );

    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out", delay: 0.08 }
      );
    }
  }, [activeIndex]);

  if (!activeCategory) return null;

  return (
    <section
      ref={sectionRef}
      // "relative" is crucial here to contain absolute buttons
      className="relative flex items-center justify-center w-full max-w-[95vw] sm:max-w-max   rounded-xl"
    >
      {/* Prev */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous category"
        // left-2 handles mobile (inside image), sm:-left-12 pushes it out on desktop
        className="absolute z-20 left-2 sm:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform active:scale-90"
        style={{ color: accentColor }}
      >
        <ArrowIcon direction="left" />
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next category"
        // right-2 handles mobile (inside image), sm:-right-12 pushes it out on desktop
        className="absolute z-20 right-2 sm:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-transform active:scale-90"
        style={{ color: accentColor }}
      >
        <ArrowIcon direction="right" />
      </button>

      {/* Image Container */}
      <div
        className="relative w-full sm:w-auto bg-white overflow-hidden rounded-xl shadow-md"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          ref={imageRef}
          src={activeCategory.image}
          alt={activeCategory.name}
          className="block w-full sm:w-auto h-auto max-h-[60vh] object-contain select-none"
          draggable="false" // Prevents native drag issues during swipe
        />

        {/* Dots */}
        <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-10">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
              aria-label={`Go to category ${i + 1}`}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === activeIndex ? "22px" : "8px",
                backgroundColor: i === activeIndex ? "#fff" : "rgba(255,255,255,0.45)",
                boxShadow: "0px 1px 3px rgba(0,0,0,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}