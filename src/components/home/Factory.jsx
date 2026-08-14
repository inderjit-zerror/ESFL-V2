"use client";

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const Factory = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(videoRef.current, {
      y: -150
    }, {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className='w-full aspect-video overflow-hidden  relative'>
      <video
        ref={videoRef}
        muted
        loop
        autoPlay
        playsInline
        src={`/videos/Factory.mp4`}
        className='absolute top-[-20%] left-0 w-full h-[140%] object-cover object-center brightness-75'
      ></video>
      <div className='uppercase absolute! container flex items-center max-w-4xl! text-white '>
        <h2 data-para-effect>
          A look inside our factories and offices hygiene, precision and consistency at every stage.
        </h2>
      </div>
    </div>
  )
}

export default Factory
