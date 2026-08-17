"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiVolumeMuteFill, RiVolumeUpFill } from "@remixicon/react";
import AutoPlayVideo from "../common/AutoPlayVideo";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const cursorRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    // Parallax effect using ScrollTrigger
    // We animate from y: -200 to y: 200 to get a total movement of 400px over the scroll span
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        video,
        { y: -200 },
        {
          y: 200,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // Auto-mute when section leaves the screen
    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onLeave: () => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      },
      onLeaveBack: () => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
        }
      },
    });

  }, []);

  const handleMouseMove = (e) => {
    // Center the custom cursor on the mouse
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      xPercent: -50,
      yPercent: -50,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="relative w-full">
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[100] flex items-center justify-center w-14 h-14 rounded-full bg-white/20 backdrop-blur-md text-white   tracking-widest text-xs uppercase shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/30 transition-opacity duration-300 ${isHovering ? "opacity-100" : "opacity-0"
          }`}
      >
        {isMuted ? <RiVolumeMuteFill size={16} /> : <RiVolumeUpFill size={16} />}
      </div>

      {/* Video Container */}
      <div
        ref={sectionRef}
        className="w-full aspect-video relative overflow-hidden cursor-none"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={toggleMute}
      >
        {/* Video element with extra height to prevent background bleeding during parallax */}
        <AutoPlayVideo
          ref={videoRef}
          src="/videos/HB.mp4"
          className="absolute inset-0 cover"
        />
      </div>
    </div>
  );
};

export default VideoSection;