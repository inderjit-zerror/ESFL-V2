"use client";
import React, { useRef } from 'react';
import { Beaker, ShieldCheck, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const cards = [
    {
        num: "01",
        title: "ETHICAL SOURCING",
        desc: "Prioritising fair trade practices and transparency across our entire supply chain to protect farmers' rights.",
        footer: "120+ BLENDS DEVELOPED",
        icon: <Beaker className="w-5 h-5" />,
        rotation: "md:-rotate-2"
    },
    {
        num: "02",
        title: "RURAL DEVELOPMENT",
        desc: "Investing in infrastructure, education and vocational training within rural clusters to drive self-sufficiency.",
        footer: "3-STAGE BATCH TESTING",
        icon: <ShieldCheck className="w-5 h-5" />,
        rotation: "md:rotate-0"
    },
    {
        num: "03",
        title: "WATER NEUTRALITY",
        desc: "Advanced water conservation and harvesting techniques that minimise our industrial water footprint.",
        footer: "ZERO WASTE TO LANDFILL",
        icon: <Leaf className="w-5 h-5" />,
        rotation: "md:rotate-2"
    }
];

const CsrVision = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            gsap.to('.csr-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 50%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
            });
        });

        mm.add("(max-width: 767px)", () => {
            const cards = gsap.utils.toArray('.csr-card');
            cards.forEach((card) => {
                gsap.to(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom',
                        toggleActions: 'play none none reverse',
                    },
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                });
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="bg-[#D42E12] container   py-12 md:py-24  relative overflow-hidden">
            <div className="pattern_bg"></div>

            <Image height={500} width={500} src="/images/csr/crd_bg_2.svg" className='absolute max-sm:hidden md:w-[25%] z-0 top-0 left-0' alt="" />
            <Image height={500} width={500} src="/images/csr/crd_bg.svg" className='absolute  md:w-[25%] z-0 bottom-0 right-0' alt="" />
            <div className="w-full relative z-10 flex flex-col items-center">

                {/* Header */}
                <div className="md:text-center md:max-w-3xl mb-16">
                    {/* <h6 className="text-white/90 uppercase mb-2">
                        JOIN US
                    </h6> */}
                    <h2 data-para-effect className="text-[#ffffff] uppercase mb-4">
                        VISION, MISSION & <br /> VALUES
                    </h2>
                    <p className="text-white ">
                        From the first trial blend to the sealed pack, three disciplines shape everything that leaves our facility — research that chases flavour, control that refuses compromise, and practice that respects the land we source from.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
                    {cards.map((card, index) => (
                        <div 
                            key={index}
                        className="csr-card opacity-0">
                        <div
                            className={` group relative bg-[#ffffff] transition-[colors_transform] duration-300 hover:bg-[#FFC55C] p-5 flex flex-col h-full md:min-h-95 rounded-xl ${card.rotation} hover:rotate-0 hover:-translate-y-2 cursor-pointer border border-transparent`}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-10 h-10 border border-[#D42E12]/30 rounded text-red group-hover:border-[#D42E12]/40 flex items-center justify-center transition-colors">
                                    {card.icon}
                                </div>
                                <span className="text-[#e2d5c4] group-hover:text-[#dfab50] text-3xl transition-colors">
                                    {card.num}
                                </span>
                            </div>

                            <h4 data-para-effect className="text-red uppercase mb-2 md:mb-4 transition-colors">
                                {card.title}
                            </h4>

                            <p className="text-sm opacity-70   leading-relaxed mb-8 flex-grow transition-colors">
                                {card.desc}
                            </p>

                            <div className="pt-4 border-t border-gray-200 group-hover:border-[#e4a434] transition-colors">
                                <p className="text-sm opacity-70 uppercase transition-colors">
                                    {card.footer}
                                </p>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CsrVision;