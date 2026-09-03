"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const originalImages = [
  "/images/culture/culture_collaboration.png",
  "/images/culture/culture_breakout.png",
  "/images/culture/culture_discussion.png",
  "/images/culture/culture_walking.png",
  "/images/culture/culture_working.png",
  "/images/culture/culture_brainstorm.png",
  "/images/culture/culture_coffee.png",
];

const InfiniteScroller = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const [dimensions, setDimensions] = useState({ width: 300, height: 400, gap: 40 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: 200, height: 260, gap: 20 });
      } else {
        setDimensions({ width: 300, height: 400, gap: 40 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const CARD_WIDTH = dimensions.width;
  const CARD_HEIGHT = dimensions.height;
  const GAP = dimensions.gap;
  const TOTAL_CARDS = originalImages.length;

  // Duplicate images for seamless infinite scrolling
  const images = [...originalImages, ...originalImages, ...originalImages];

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let isDown = false;
    let startX = 0;
    let scrollOffset = 0;
    let targetOffset = 0;
    let velocity = 0;
    let lastX = 0;
    let lastTime = 0;
    let rafId;

    // Total width of one set of images
    const setWidth = TOTAL_CARDS * (CARD_WIDTH + GAP);

    const onPointerDown = (e) => {
      isDown = true;
      startX = e.clientX || e.touches?.[0]?.clientX || 0;
      lastX = startX;
      lastTime = Date.now();
      velocity = 0;
      container.style.cursor = "grabbing";
    };

    const onPointerMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.clientX || e.touches?.[0]?.clientX || 0;
      const now = Date.now();
      const dt = now - lastTime;
      const dx = x - lastX;

      if (dt > 0) {
        velocity = dx / dt;
      }

      targetOffset += dx;
      lastX = x;
      lastTime = now;
    };

    const onPointerUp = () => {
      if (!isDown) return;
      isDown = false;
      container.style.cursor = "grab";

      // Apply momentum
      targetOffset += velocity * 150;
    };

    // Auto-scroll
    let autoScrollSpeed = -0.5; // pixels per frame

    const render = () => {
      if (!isDown) {
        targetOffset += autoScrollSpeed;
      }

      // Smooth lerp
      scrollOffset += (targetOffset - scrollOffset) * 0.08;

      // Wrap the offset to keep it within one set range
      // This ensures seamless infinite looping
      let wrappedOffset = scrollOffset % setWidth;
      if (wrappedOffset > 0) wrappedOffset -= setWidth;

      const cards = track.children;
      const containerWidth = container.offsetWidth;
      const containerCenter = containerWidth / 2;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        // Position each card
        const baseX = i * (CARD_WIDTH + GAP);
        let x = baseX + wrappedOffset;

        // Wrap cards that go too far off-screen
        const totalWidth = images.length * (CARD_WIDTH + GAP);
        while (x < -CARD_WIDTH - 200) x += totalWidth;
        while (x > containerWidth + 200) x -= totalWidth;

        // Distance from center of container
        const cardCenter = x + CARD_WIDTH / 2;
        const distFromCenter = cardCenter - containerCenter;
        const maxDist = containerWidth / 2 + CARD_WIDTH;
        const normalizedDist = Math.max(-1, Math.min(1, distFromCenter / maxDist));

        // Concave curve: center cards push INTO screen (negative Z), edge cards come OUT (0 or positive Z)
        // Creates the concave "bowl" shape from the reference image
        const absDist = Math.abs(normalizedDist);
        const curveDepth = 200;
        const translateZ = (1 - absDist) * curveDepth; // center = -200, edges = 0

        // Y offset: center images pushed slightly DOWN, edge images slightly UP (arc shape)
        const yOffset = (1 - absDist) * 40; // center +40, edges 0

        // Rotation: cards at edges rotate outward strongly, center cards face straight
        const rotateY = -normalizedDist * 45;

        // Scale: center cards slightly smaller (further away), edge cards slightly bigger (closer)
        const scale = 0.92 + absDist * 0.08;

        // Opacity: fade edges slightly
        const opacity = 1 - Math.abs(normalizedDist) * 0.15;

        gsap.set(card, {
          x: x,
          y: yOffset,
          rotateY: rotateY,
          z: translateZ,
          scale: scale,
          opacity: opacity,
          force3D: true,
        });
      }

      rafId = requestAnimationFrame(render);
    };

    // Events
    container.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    container.addEventListener("touchstart", onPointerDown, { passive: false });
    container.addEventListener("touchmove", onPointerMove, { passive: false });
    container.addEventListener("touchend", onPointerUp);

    render();

    return () => {
      cancelAnimationFrame(rafId);
      container.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      container.removeEventListener("touchstart", onPointerDown);
      container.removeEventListener("touchmove", onPointerMove);
      container.removeEventListener("touchend", onPointerUp);
    };
  }, [CARD_WIDTH, CARD_HEIGHT, GAP]);

  return (
    <section className="w-full  overflow-hidden relative   py-12 md:py-24   bg-[#E30713]">
                  <div className="pattern_bg"></div>

      {/* Header */}
      <div className=" px-4 md:text-center mb-10 relative z-10">
        {/* <h6 className="  text-[#fcb62d] uppercase">
          Culture
        </h6> */}
        <h2 data-para-effect className="  text-[#ffffff] uppercase">
          Life at ESFL
        </h2>
      </div>

      {/* Curved Scroller */}
      <div
        ref={containerRef}
        className="w-full relative cursor-grab select-none overflow-hidden"
        style={{
          height: `${CARD_HEIGHT + 50}px`,
          perspective: "1200px",
          perspectiveOrigin: "center center",
        }}
      >
        <div
          ref={trackRef}
          className="relative w-full"
          style={{
            height: `${CARD_HEIGHT}px`,
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="absolute top-0 left-0 will-change-transform"
              style={{
                width: `${CARD_WIDTH}px`,
                height: `${CARD_HEIGHT}px`,
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                fill
                src={src}
                alt={`Life at ESFL ${(index % TOTAL_CARDS) + 1}`}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScroller;