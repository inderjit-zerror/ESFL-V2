"use client";

import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import AutoPlayVideo from '../common/AutoPlayVideo'

gsap.registerPlugin(ScrollTrigger);

const Factory = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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
    });
  }, { scope: containerRef });

  return (
    <>
      <div className='uppercase  pt-12 pb-4 md:hidden container flex items-center  '>
        <h2 data-para-effect>
          A look inside our factories and offices hygiene, precision and consistency at every stage.
        </h2>
      </div>
      <div ref={containerRef} className='w-full aspect-video overflow-hidden bg-red  relative'>
        <AutoPlayVideo
          ref={videoRef}
          src={`/videos/Factory.mp4`}
          className='absolute top-[-20%] left-0 w-full h-[140%] object-cover object-center brightness-75'
        />
        <div className='uppercase w-full max-sm:hidden absolute! h-full flex items-center  text-white '>
          <div className="container h-fit!">
          <h2 data-para-effect className='max-w-4xl!'>
            A look inside our factories and offices hygiene, precision and consistency at every stage.
          </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Factory
