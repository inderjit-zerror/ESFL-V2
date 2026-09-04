"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Custom SVG Icons perfectly tailored to the milestones
const FactoryIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
);

const TruckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
    <path d="M14 9h4l4 4v5c0 .6-.4 1-1 1h-2" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

const BottleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 10v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V10" />
    <path d="M8 10c0-2.5 1-3.5 2-5V3h4v2c1 1.5 2 2.5 2 5" />
    <path d="M9 3h6" />
    <path d="M10 2h4v1h-4z" />
    <path d="M9 13h6" />
    <path d="M9 17h6" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const AmbassadorIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l2.4 5 5.6.8-4 3.9 1 5.3-5-2.6-5 2.6 1-5.3-4-3.9 5.6-.8L12 2z" />
    <path d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    <path d="M17.5 19.5c-.8-2-3-3.5-5.5-3.5s-4.7 1.5-5.5 3.5" />
  </svg>
);

const GroupIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="16" cy="11" r="3" />
    <path d="M21 21v-2a3 3 0 0 0-3-3h-1" />
  </svg>
);

const RefreshIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <rect x="10" y="10" width="4" height="4" rx="1" />
  </svg>
);

const GrowthIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
    <line x1="12" y1="21" x2="12" y2="21.01" />
    <line x1="16" y1="21" x2="16" y2="21.01" />
    <line x1="20" y1="21" x2="20" y2="21.01" />
    <line x1="8" y1="21" x2="8" y2="21.01" />
    <line x1="4" y1="21" x2="4" y2="21.01" />
  </svg>
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MILESTONES = [
  {
    year: "1994",
    icon: FactoryIcon,
    color: "#e30713",
    copy: "ESFL was established in 1994",
  },
  {
    year: "2003-04",
    icon: TruckIcon,
    color: "#e30713",
    copy: "We started spreading our distribution network outside Maharashtra",
  },
  {
    year: "2012-13",
    icon: BottleIcon,
    color: "#e30713",
    copy: "Brand Temptin' was launched with the contemporary product ranges of ketchup & sauces",
  },
  {
    year: "2018",
    icon: GlobeIcon,
    color: "#e30713",
    copy: "ESFL started exporting its products overseas. And as of date we are exporting to 20 countries",
  },
  {
    year: "2021",
    icon: AmbassadorIcon,
    color: "#e30713",
    copy: "Madhuri Dixit Nene was appointed as the brand ambassador of brand Ram Bandhu",
  },
  {
    year: "2022",
    icon: GroupIcon,
    color: "#e30713",
    copy: "Popular cartoon characters of Chhota Bheem & family became the ambassador of Temptin' brand's Tomato Ketchup & sauces range",
  },
  {
    year: "2022",
    icon: RefreshIcon,
    color: "#e30713",
    copy: "Ram Bandhu brand logo evolved into a new avatar - the current logo",
  },
  {
    year: "2024-25",
    icon: GrowthIcon,
    color: "#e30713",
    copy: "ESFL crossed the INR 300 crore business revenue mark",
  },
];

export default function OurJourney() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => {
        if (!track || !track.parentElement) return 0;
        return Math.max(
          track.scrollWidth - track.parentElement.clientWidth + (track.offsetLeft * 2),
          0
        );
      };

      const tl = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      const cards = gsap.utils.toArray('.card-wrapper');
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          containerAnimation: tl,
          start: "left 50%", 
          end: "right 50%", 
          toggleClass: "is-active",
          onToggle: (self) => {
            if (self.isActive) {
              card.dispatchEvent(new CustomEvent('card-active'));
            }
          }
        });
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400vh]"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#FDF8F0]">
        <div className=" flex h-full flex-col justify-center gap-8 md:gap-12 pt-[15vh]">

          {/* Heading */}
          <div className="md:mx-auto md:max-w-2xl md:text-center px-4">
            <h2 data-para-effect className="mb-4 text-black">
              OUR JOURNEY
            </h2>
            <p className="">
              From one storefront in Nashik to a global <br className="hidden md:block" /> spice house — the road that shaped ESFL.
            </p>
          </div>

          {/* Horizontal card track */}
          <div className="relative w-full overflow-hidden px-4 md:px-[35rem] flex-grow flex items-center">

            <div
              ref={trackRef}
              className="relative flex items-start will-change-transform  gap-4"
            >

              {MILESTONES.map((m, i) => (
                <Card key={i} milestone={m} index={i} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ milestone, index }) {
  const Icon = milestone.icon;
  const color = milestone.color;
  const iconRef = useRef(null);

  const cardRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const el = iconRef.current;
      const cardEl = cardRef.current;
      if (!el || !cardEl) return;

      // Get all SVG geometry elements inside the Lucide icon
      const shapes = el.querySelectorAll("path, circle, rect, line, polyline, polygon");
      const tl = gsap.timeline({ paused: true });

      shapes.forEach((shape) => {
        // Calculate the exact length of the shape's path
        const length = shape.getTotalLength ? shape.getTotalLength() : 100;

        // Make it fully visible by default so it looks good on mobile
        gsap.set(shape, {
          strokeDasharray: length,
          strokeDashoffset: 0,
        });

        // Undraw and then redraw on hover
        tl.to(shape, {
          strokeDashoffset: length,
          duration: 0.4,
          ease: "power2.in",
        }, 0).to(shape, {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.out",
        }, 0.4);
      });

      const onEnter = () => {
        if (!tl.isActive()) {
          tl.restart();
        }
      };

      cardEl.addEventListener("card-active", onEnter);

      return () => {
        cardEl.removeEventListener("card-active", onEnter);
      };
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={cardRef} className="card-wrapper flex flex-col items-center w-[25rem] shrink-0 relative group">

      {/* Icon Badge */}
      <div
        className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] md:border-4 flex items-center justify-center bg-[#FDF8F0] z-10 transition-transform duration-300 group-[.is-active]:scale-105 shadow-sm"
        style={{ borderColor: color, color: color }}
      >
        <div ref={iconRef}>
          <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
        </div>

        {/* Downward triangle indicator */}
        <div
          className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] md:border-t-[14px]"
          style={{ borderTopColor: color }}
        ></div>
      </div>

      {/* Connecting Vertical Line (Top) */}
      <div className="h-6 md:h-8 w-[3px]" style={{ backgroundColor: color }}></div>

      {/* Text Card */}
      <div
        className="w-full bg-[#fcf9f2] border border-black/10 rounded-xl flex flex-col items-center justify-between p-6 text-center shadow-sm relative h-[20rem] md:h-[18rem] group-[.is-active]:bg-[#e30713] transition-all duration-300"
        style={{ borderTop: `4px solid ${color}` }}
      >
        <div className="absolute inset-0 w-full h-full group-[.is-active]:opacity-100 opacity-0 transition-all duration-300 ">
          <div className="pattern_bg"></div>
        </div>
        <h3 className="group-[.is-active]:text-white! transition-all duration-300" style={{ color: color }}>
          {milestone.year}
        </h3>
        <p className="text-base text-black/80 group-[.is-active]:text-white transition-all duration-300  font-medium">
          {milestone.copy}
        </p>
      </div>

    </div>
  );
}