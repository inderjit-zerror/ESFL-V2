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
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} data-page-load-hero className='w-full aspect-square sm:h-svh overflow-hidden flex bg-black relative'>
      <video ref={videoRef} data-page-load-media muted loop autoPlay playsInline src={`/videos/HH1.mp4`} className='absolute top-[-20%] left-0 w-full h-[120%] object-cover object-center'></video>
    </div>
  )
}

export default Hero
