"use client";
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  const containerRef = useRef(null)
  const videoRef = useRef(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(videoRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        }
      });
    });

  }, { scope: containerRef })

  return (
    <div ref={containerRef} data-page-load-hero className='w-full aspect-3/4 md:aspect-video md:h-screen overflow-hidden'>
      <video ref={videoRef} data-page-load-media muted loop autoPlay playsInline src={`/videos/HH1.mp4`} className='cover'></video>
    </div>
  )
}

export default Hero
