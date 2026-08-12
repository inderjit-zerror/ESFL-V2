"use client";
import React from 'react';
import { Beaker, ShieldCheck, Leaf } from 'lucide-react';

const cards = [
    {
        num: "01",
        title: "ETHICAL SOURCING",
        desc: "Prioritising fair trade practices and transparency across our entire supply chain to protect farmers' rights.",
        footer: "120+ BLENDS DEVELOPED",
        icon: <Beaker className="w-5 h-5" />,
        rotation: "-rotate-2"
    },
    {
        num: "02",
        title: "RURAL DEVELOPMENT",
        desc: "Investing in infrastructure, education and vocational training within rural clusters to drive self-sufficiency.",
        footer: "3-STAGE BATCH TESTING",
        icon: <ShieldCheck className="w-5 h-5" />,
        rotation: "rotate-0"
    },
    {
        num: "03",
        title: "WATER NEUTRALITY",
        desc: "Advanced water conservation and harvesting techniques that minimise our industrial water footprint.",
        footer: "ZERO WASTE TO LANDFILL",
        icon: <Leaf className="w-5 h-5" />,
        rotation: "rotate-2"
    }
];

const CsrVision = () => {
    return (
        <section className="w-full relative bg-[#D42E12] py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
            <img src="/images/csr/crd_bg_2.svg" className='absolute w-[25%] z-5 top-0 left-0' alt="" />
            <img src="/images/csr/crd_bg.svg" className='absolute w-[25%] z-5 bottom-0 right-0' alt="" />
            <div className="max-w-[1400px] mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="text-center max-w-3xl mb-16 md:mb-24">
                    <p className="text-white/90 font-bold tracking-[0.25em] text-[10px] sm:text-xs uppercase mb-4">
                        JOIN US
                    </p>
                    <h2 className="Heading_1 text-4xl sm:text-5xl lg:text-[56px] font-black uppercase text-[#FFC55C] tracking-tight mb-6 leading-none">
                        VISION, MISSION & VALUES
                    </h2>
                    <p className="text-white/90 text-sm sm:text-base leading-relaxed px-4">
                        From the first trial blend to the sealed pack, three disciplines shape everything that leaves our facility — research that chases flavour, control that refuses compromise, and practice that respects the land we source from.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 w-full max-w-5xl">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group relative bg-[#FAF8F5] transition-all duration-300 hover:bg-[#FFC55C] p-8 sm:p-10 flex flex-col h-full min-h-[380px] shadow-xl ${card.rotation} hover:rotate-0 hover:-translate-y-2 cursor-pointer`}
                        >
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-10 h-10 border border-[#D42E12]/30 text-[#D42E12] group-hover:border-[#D42E12]/40 flex items-center justify-center transition-colors">
                                    {card.icon}
                                </div>
                                <span className="text-[#e2d5c4] group-hover:text-[#dfab50] text-3xl font-light transition-colors">
                                    {card.num}
                                </span>
                            </div>

                            <h3 className="text-lg sm:text-xl font-black text-[#D42E12] uppercase tracking-wide mb-4 transition-colors">
                                {card.title}
                            </h3>

                            <p className="text-sm text-[#6b6b6b] group-hover:text-[#916521] leading-relaxed mb-8 flex-grow transition-colors font-medium">
                                {card.desc}
                            </p>

                            <div className="pt-6 border-t border-gray-200 group-hover:border-[#e4a434] transition-colors">
                                <p className="text-[10px] font-bold tracking-[0.15em] text-[#a9a9a9] group-hover:text-[#916521] uppercase transition-colors">
                                    {card.footer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CsrVision;