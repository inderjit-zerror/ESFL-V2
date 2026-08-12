"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TrendingUp, GraduationCap, Lightbulb, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// -----------------------------------------------------------------------
// Content — edit this array to change copy, icons, or ordering.
// `side` controls whether the red circle sits left or right of the text,
// matching the alternating layout in the design.
// -----------------------------------------------------------------------
const ITEMS = [
  {
    number: "01",
    title: "Career Growth",
    body: "Vertical and lateral opportunities across plants, brands and markets to advance your professional journey within our network.",
    icon: TrendingUp,
    side: "left",
  },
  {
    number: "02",
    title: "Learning",
    body: "Continuous training programs, industry certifications and leadership development workshops through every stage of your role.",
    icon: GraduationCap,
    side: "right",
  },
  {
    number: "03",
    title: "Innovation",
    body: "Work with cutting-edge manufacturing technology and help redefine how authentic Indian food is produced at scale.",
    icon: Lightbulb,
    side: "left",
  },
  {
    number: "04",
    title: "Create Culture",
    body: "A diverse, inclusive environment built on transparency, safety and mutual respect — from the shop floor upwards.",
    icon: Users,
    side: "right",
  },
];

// The winding connector path. Coordinates live inside a 760 x 900 viewBox
// that lines up with the row positions below (each row ≈ 210px tall,
// starting at y = 40). Tweak the control points if you change row heights.
const LINE_PATH = `
  M 110 0
  L 110 90
  C 110 170 150 210 230 210
  L 610 210
  C 690 210 730 250 730 320
  L 730 350
  C 730 420 690 460 610 460
  L 210 460
  C 130 460 90 500 90 570
  L 90 590
  C 90 660 130 700 210 700
  L 540 700
  C 640 700 690 740 690 810
  L 690 900
`;

export default function WhyPartnerWithUs() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const walkerRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const length = path.getTotalLength();

      // Start fully hidden — dash the entire line, then reveal it by
      // animating the offset back to 0 as the user scrolls the section.
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      const scrollConfig = {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 85%",
        scrub: 0.6,
      };

      // Draw the connecting line in sync with scroll position.
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: scrollConfig,
      });

      // Walking figure follows the same path as the line is drawn.
      if (walkerRef.current) {
        gsap.set(walkerRef.current, { opacity: 1 });
        gsap.to(walkerRef.current, {
          ease: "none",
          scrollTrigger: scrollConfig,
          motionPath: {
            path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
          },
        });
      }

      // Fade + rise each row in as it enters the viewport.
      rowRefs.current.forEach((row) => {
        if (!row) return;
        gsap.from(row, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#F7F2E9]">

    
    <section
      ref={sectionRef}
      className="relative mx-auto max-w-4xl bg-[#F7F2E9] px-6 py-16 sm:px-10 md:py-24"
    >
      {/* Heading */}
      <div className="mb-16 pl-2 Heading_1">
        <h2 className="text-3xl font-extrabold tracking-tight text-[#2b2b2b] sm:text-4xl">
          Why Partner With Us?
        </h2>
        <p className="mt-2 text-sm font-semibold tracking-wide text-[#6b6b6b]">
          MORE THAN A JOB
        </p>
      </div>

      {/* Connector line, positioned behind the rows */}
      <svg
        className="pointer-events-none absolute left-0 top-[9rem] hidden h-[60rem] w-full sm:block"
        viewBox="0 0 760 900"
        fill="none"
        preserveAspectRatio="xMidYMin meet"
        aria-hidden="true"
      >
        <path
          ref={pathRef}
          d={LINE_PATH}
          stroke="#B7B29E"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Walking figure that travels the line as you scroll */}
        <g ref={walkerRef} opacity="0">
          <circle r="5" fill="#3a2c1d" />
        </g>
      </svg>

      {/* Rows */}
      <div className="relative flex flex-col gap-16 sm:gap-24">
        {ITEMS.map((item, i) => (
          <Row key={item.number} item={item} refCallback={(el) => (rowRefs.current[i] = el)} />
        ))}
      </div>
    </section>
    </div>
  );
}

function Row({ item, refCallback }) {
  const Icon = item.icon;
  const isRight = item.side === "right";

  return (
    <div
      ref={refCallback}
      className={`flex items-center gap-6 sm:gap-10 ${
        isRight ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row"
      }`}
    >
      <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#E70514] shadow-sm sm:h-40 sm:w-40">
        <Icon className="h-14 w-14 text-white sm:h-16 sm:w-16" strokeWidth={1.75} />
      </div>

      <div className={isRight ? "sm:items-end" : ""}>
        <div className={`flex Paragraph_Medium items-baseline gap-2 ${isRight ? "sm:flex-row-reverse" : ""}`}>
          <span className="text-2xl font-extrabold text-[#2b2b2b]">{item.number}</span>
          <h3 className="text-sm font-bold uppercase tracking-wide text-[#2b2b2b]">
            {item.title}
          </h3>
        </div>
        <p className="mt-2 max-w-md Paragraph_Medium text-sm leading-relaxed text-[#6b6b6b]">{item.body}</p>
      </div>
    </div>
  );
}