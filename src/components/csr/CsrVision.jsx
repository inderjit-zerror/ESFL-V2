"use client";
import React, { useRef } from 'react';
import { FileText, Users, FolderKanban, ArrowUpRight } from 'lucide-react';
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
        title: "CSR POLICY",
        desc: "Our comprehensive Corporate Social Responsibility policy guiding community engagement, sustainability, and ethical commitments.",
        href: "https://esfl.co.in/wp-content/uploads/2026/08/CSR-POLICY.pdf",
        icon: <FileText className="w-5 h-5" />,
        rotation: "md:-rotate-2"
    },
    {
        num: "02",
        title: "COMPOSITION OF COMMITTEES RELATED TO CSR",
        desc: "Detailed structure and composition of our governing CSR committee overseeing strategic execution and accountability.",
        href: "https://esfl.co.in/wp-content/uploads/2026/08/CSR-COMMITTEE.pdf",
        icon: <Users className="w-5 h-5" />,
        rotation: "md:rotate-0"
    },
    {
        num: "03",
        title: "CSR PROJECTS",
        desc: "Overview of ongoing and approved community welfare, rural development, and environmental sustainability initiatives.",
        href: "https://esfl.co.in/wp-content/uploads/2026/08/CSR-PROJECTS-25-26.pdf",
        icon: <FolderKanban className="w-5 h-5" />,
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
            const cardsArr = gsap.utils.toArray('.csr-card');
            cardsArr.forEach((card) => {
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
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
                    {cards.map((card, index) => (
                        <a 
                            key={index}
                            href={card.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="csr-card opacity-0 block h-full text-left no-underline"
                        >
                            <div
                                className={`group relative bg-[#ffffff] transition-[colors_transform] duration-300 hover:bg-[#FFC55C] p-5 flex flex-col h-full md:min-h-95 rounded-xl  hover:rotate-0 hover:-translate-y-2 cursor-pointer border border-transparent`}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="pattern_bg"></div>
                                </div>
                                <div className="flex justify-between items-start mb-8 relative z-10">
                                    <div className="w-10 h-10 border border-[#D42E12]/30 rounded text-red group-hover:border-[#D42E12]/40 flex items-center justify-center transition-colors">
                                        {card.icon}
                                    </div>
                                    <span className="text-[#e2d5c4] group-hover:text-[#dfab50] text-3xl transition-colors">
                                        {card.num}
                                    </span>
                                </div>

                                <h5 data-para-effect className="text-red uppercase mb-2 md:mb-4 transition-colors relative z-10">
                                    {card.title}
                                </h5>

                                <p className="text-sm opacity-70 leading-relaxed mb-8 flex-grow transition-colors relative z-10 text-black">
                                    {card.desc}
                                </p>

                                <div className="pt-4 border-t border-gray-200 group-hover:border-[#e4a434] transition-colors relative z-10 flex items-center justify-between">
                                    <span className="text-xs group-hover:underline uppercase  text-red flex items-center gap-1">
                                        View Document <ArrowUpRight className="size-4" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CsrVision;