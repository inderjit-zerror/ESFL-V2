"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import BTN from './BTN';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const PageHero = ({ title, description, videoSrc, video, imageSrc, buttonText, buttonVariant = "B2" }) => {
    const containerRef = useRef(null);
    const mediaVideo = videoSrc || video;

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        });
        tl.to(".hero-media",
            { y: 150, filter: "brightness(0.1)", ease: "none" }
        );

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full h-[80vh] overflow-hidden relative flex items-end justify-center">
            {mediaVideo ? (
                <video src={mediaVideo} loop muted playsInline autoPlay className='hero-media absolute inset-0 w-full h-full object-cover brightness-75'></video>
            ) : imageSrc ? (
                <img src={imageSrc} alt={typeof title === "string" ? title : "Hero Image"} className='hero-media absolute inset-0 w-full h-full object-cover brightness-75' />
            ) : null}

            <div className="text-center absolute pb-16  px-4 text-white z-10 flex flex-col items-center">
                {title && (
                    <h1 className="mb-3 md:mb-4 uppercase">
                        {title}
                    </h1>
                )}
                {description && (
                    <p className="max-w-xl text-base">
                        {description}
                    </p>
                )}
                {buttonText && (
                    <div className="mt-8">
                        <BTN txt={buttonText} variant={buttonVariant} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PageHero;