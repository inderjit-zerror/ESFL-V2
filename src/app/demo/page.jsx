"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function DemoPage() {
  const containerRef = useRef(null);
  
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);
  const p4Ref = useRef(null);

  useGSAP(() => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Initialize images completely off-screen
      gsap.set([p1Ref.current, p2Ref.current, p3Ref.current, p4Ref.current], { 
        x: w * 2,
        y: -h * 2,
        rotation: 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // We have 4 scroll phases, one for each flavor section.
      // The timeline will automatically map its 4-second duration to the total scroll distance.
      // Since we use 5 sections of 100vh, the scrollable distance is exactly 400vh (4 phases of 100vh).

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

      // --- Phase 4: Section 4 (Image 4 comes in AND all spread out) ---
      // Image 4 animates directly to its spread position
      tl.fromTo(p4Ref.current, 
        { x: -w, rotation: -45 }, 
        { x: 330, rotation: 0, ease: "power1.out", duration: 1 }, 3);
      tl.fromTo(p4Ref.current, 
        { y: -h }, 
        { y: 0, ease: "power2.in", duration: 1 }, 3);
      
      // Images 1, 2, 3 spread out simultaneously during Phase 4
      tl.to(p1Ref.current, { x: -330, duration: 1, ease: "power2.inOut" }, 3);
      tl.to(p2Ref.current, { x: -110, duration: 1, ease: "power2.inOut" }, 3);
      tl.to(p3Ref.current, { x: 110, duration: 1, ease: "power2.inOut" }, 3);

  }, { scope: containerRef });

  return (
    <div className="bg-zinc-50 ">
      {/* Spacer to show scrolling before the section */}
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-3xl font-light text-gray-500">Scroll down</h2>
      </div>

      <div ref={containerRef} className="relative w-full">
        
        {/* The sticky container for images (stays in viewport while sections scroll) */}
        <div className="sticky top-0 h-screen w-full pointer-events-none z-10 overflow-hidden flex items-center justify-center">
          <div className="relative flex items-center justify-center w-full max-w-5xl h-full">
            <img ref={p1Ref} src="/images/packet1.png" className="absolute w-[200px] md:w-[30rem] object-contain drop-shadow-2xl z-10" alt="Packet 1" />
            <img ref={p2Ref} src="/images/packet2.png" className="absolute w-[200px] md:w-[30rem] object-contain drop-shadow-2xl z-20" alt="Packet 2" />
            <img ref={p3Ref} src="/images/packet3.png" className="absolute w-[200px] md:w-[30rem] object-contain drop-shadow-2xl z-30" alt="Packet 3" />
            <img ref={p4Ref} src="/images/packet4.png" className="absolute w-[200px] md:w-[30rem] object-contain drop-shadow-2xl z-40" alt="Packet 4" />
          </div>
        </div>

        {/* The scrolling text content */}
        <div className="relative z-20 w-full" style={{ marginTop: '-100vh' }}>
          
          <section className="h-screen flex items-center justify-start px-8 md:px-24">
            <div className="max-w-lg p-8 rounded-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#e30713]">Chaat Masala</h2>
              <p className="text-xl text-black">
                A tangy, spicy blend that adds a burst of lip-smacking flavor to your favorite street foods, fruits, and salads.
              </p>
            </div>
          </section>

          <section className="h-screen flex items-center justify-end px-8 md:px-24">
            <div className="max-w-lg text-right p-8 rounded-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#e30713]">Garam Masala</h2>
              <p className="text-xl text-black">
                The heart of Indian cooking. Our premium blend of roasted whole spices brings deep, warm aromas to every curry.
              </p>
            </div>
          </section>

          <section className="h-screen flex items-center justify-start px-8 md:px-24">
            <div className="max-w-lg p-8 rounded-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#e30713]">Panipuri Masala</h2>
              <p className="text-xl text-black">
                Create the perfect spicy, tangy, and refreshing jaljeera water for your homemade panipuris.
              </p>
            </div>
          </section>

          <section className="h-screen flex items-center justify-end px-8 md:px-24">
            <div className="max-w-lg text-right p-8 rounded-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-[#e30713]">Kitchen King</h2>
              <p className="text-xl text-black">
                A versatile master blend that enriches any vegetarian dish with a rich, appetizing color and incredible taste.
              </p>
            </div>
          </section>

          {/* Final section where images spread out */}
          {/* Final section where images spread out */}
          <section className="h-screen flex items-end justify-center pb-24 px-8 text-center pointer-events-none">
           
          </section>

        </div>
      </div>
    </div>
  );
}