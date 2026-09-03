"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger)

const ScrollPackets = () => {

    const containerRef = useRef(null);

    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const p3Ref = useRef(null);
    const p4Ref = useRef(null);

    useGSAP(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const isMobile = w < 768;
        const m = isMobile ? 0.25 : 1; // spread multiplier for mobile

        // Initialize images completely off-screen
        gsap.set([p1Ref.current, p2Ref.current, p3Ref.current, p4Ref.current], {
            x: w * 2,
            y: -h * 2,
            rotation: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        // --- Phase 1: Section 1 (Image 1 comes from top right to center) ---
        tl.fromTo(p1Ref.current,
            { x: w, rotation: 45 },
            { x: 0, rotation: 0, ease: "power1.out", duration: 1 }, 0);
        tl.fromTo(p1Ref.current,
            { y: -h },
            { y: 0, ease: "power2.in", duration: 1 }, 0);

        // --- Phase 2: Section 2 (Image 2 comes from top left to center) ---
        tl.fromTo(p2Ref.current,
            { x: -w, rotation: -45 },
            { x: 0, rotation: 0, ease: "power1.out", duration: 1 }, 1);
        tl.fromTo(p2Ref.current,
            { y: -h },
            { y: 0, ease: "power2.in", duration: 1 }, 1);

        // --- Phase 3: Section 3 (Image 3 comes from top right to center) ---
        tl.fromTo(p3Ref.current,
            { x: w, rotation: 45 },
            { x: 0, rotation: 0, ease: "power1.out", duration: 1 }, 2);
        tl.fromTo(p3Ref.current,
            { y: -h },
            { y: 0, ease: "power2.in", duration: 1 }, 2);

        tl.fromTo(p4Ref.current,
            { x: -w, rotation: -45 },
            { x: 0, rotation: 0, ease: "power1.out", duration: 1 }, 3);
        tl.fromTo(p4Ref.current,
            { y: -h },
            { y: 0, ease: "power2.in", duration: 1 }, 3);

        // Images 1, 2, 3, 4 spread out horizontally during Phase 5 (with card spread on mobile)
        tl.to(p1Ref.current, { transform:  isMobile ? "translateX(-8rem)": "translateX(-28.5rem)", y: isMobile ? 20 : 0, rotation: isMobile ? -10 : 0, duration: 1, ease: "power2.inOut" }, 4);
        tl.to(p2Ref.current, { transform:  isMobile ? "translateX(-3rem)":"translateX(-9.5rem)", y: isMobile ? 5 : 0, rotation: isMobile ? -5 : 0, duration: 1, ease: "power2.inOut" }, 4);
        tl.to(p3Ref.current, { transform:  isMobile ? "translateX(3rem)":"translateX(9.5rem)", y: isMobile ? 5 : 0, rotation: isMobile ? 5 : 0, duration: 1, ease: "power2.inOut" }, 4);
        tl.to(p4Ref.current, { transform:  isMobile ? "translateX(8rem)":"translateX(28.5rem)", y: isMobile ? 20 : 0, rotation: isMobile ? 10 : 0, duration: 1, ease: "power2.inOut" }, 4);

    }, { scope: containerRef });


    return (
        <>
            <div ref={containerRef} className="relative w-full">

                {/* The sticky container for images (stays in viewport while sections scroll) */}
                <div className="sticky top-0 h-screen w-full pointer-events-none z-10 overflow-hidden flex items-center justify-center">
                    <div className="relative flex items-center justify-center w-full h-full">
                        <Image width={800} height={800} ref={p1Ref} src="/images/home/packet_scroll/packet1.png" className="absolute w-[18rem] md:w-[30rem] object-contain z-10" alt="Packet 1" />
                        <Image width={800} height={800} ref={p2Ref} src="/images/home/packet_scroll/packet2.png" className="absolute w-[18rem] md:w-[30rem] object-contain z-20" alt="Packet 2" />
                        <Image width={800} height={800} ref={p3Ref} src="/images/home/packet_scroll/packet3.png" className="absolute w-[18rem] md:w-[30rem] object-contain z-30" alt="Packet 3" />
                        <Image width={800} height={800} ref={p4Ref} src="/images/home/packet_scroll/packet4.png" className="absolute w-[18rem] md:w-[30rem] object-contain z-40" alt="Packet 4" />
                    </div>
                </div>

                {/* The scrolling text content */}
                <div className="relative z-20 overflow-hidden w-full" style={{ marginTop: '-100vh' }}>

                    <section className="md:h-[50vh]! max-sm:mt-12 flex items-end pb-8 md:pb-0 md:items-center justify-center md:justify-start container">
                        <div className="md:max-w-lg p-6 md:p-8 bg-red relative text-left md:text-left text-white rounded-2xl  w-full z-20">
                            <div className="pattern_bg"></div>
                            <h3 data-para-effect className="text-[#FFBE55] uppercase text-2xl md:text-3xl">Shahi Paneer</h3>
                            <p className="pt-3 md:pt-5 text-sm md:text-base">
                                A rich, aromatic blend of spices that brings the authentic, creamy, and royal flavors of Mughal kitchens straight to your paneer dishes.
                            </p>
                        </div>
                    </section>

                    <section className="md:h-[50vh]! flex items-end pb-8 md:pb-0 md:items-center justify-center md:justify-end container">
                        <div className="md:max-w-lg text-left p-6 md:p-8 bg-red relative text-white rounded-2xl  w-full z-20">
                            <div className="pattern_bg"></div>
                            <h3 data-para-effect className="text-[#FFBE55] uppercase text-2xl md:text-3xl">Sambhar Masala</h3>
                            <p className="pt-3 md:pt-5 text-sm md:text-base">
                                An authentic and flavorful mix of roasted lentils and aromatic spices, crafted to give you the perfect South Indian Sambhar experience.
                            </p>
                        </div>
                    </section>

                    <section className="md:h-[50vh]! flex items-end pb-8 md:pb-0 md:items-center justify-center md:justify-start container">
                        <div className="md:max-w-lg p-6 md:p-8 bg-red relative text-left md:text-left text-white rounded-2xl  w-full z-20">
                            <div className="pattern_bg"></div>
                            <h3 data-para-effect className="text-[#FFBE55] uppercase text-2xl md:text-3xl">Panipuri Masala</h3>
                            <p className="pt-3 md:pt-5 text-sm md:text-base">
                                Create the perfect spicy, tangy, and refreshing jaljeera water for your homemade panipuris.
                            </p>
                        </div>
                    </section>

                    <section className="md:h-[50vh]! flex items-end pb-8 md:pb-0 md:items-center justify-center md:justify-end container">
                        <div className="md:max-w-lg text-left p-6 md:p-8 bg-red relative text-white rounded-2xl  w-full z-20">
                            <div className="pattern_bg"></div>
                            <h3 data-para-effect className="text-[#FFBE55] uppercase text-2xl md:text-3xl">Kitchen King</h3>
                            <p className="pt-3 md:pt-5 text-sm md:text-base">
                                A versatile master blend that enriches any vegetarian dish with a rich, appetizing color and incredible taste.
                            </p>
                        </div>
                    </section>

                    <section className="h-screen  pointer-events-none">

                    </section>

                </div>
            </div>
        </>
    )
}

export default ScrollPackets