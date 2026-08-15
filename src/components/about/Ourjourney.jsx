
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  Factory,
  MapPin,
  Truck,
  ShoppingBag,
  Ship,
  Leaf,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MILESTONES = [
  {
    year: "1990",
    label: "A Humble Beginning",
    icon: Rocket,
    tone: "dark",
    image:
      "/images/journey/journey_1990.png",
    copy:
      "A single trader stall in Nashik grows into a promise: honest, unadulterated Indian spice, ground fresh every morning.",
  },
  {
    year: "1998",
    label: "The First Factory",
    icon: Factory,
    tone: "dark",
    image:
      "/images/journey/journey_1998.png",
    copy:
      "Our first mechanised grinding and blending unit takes the craft to industrial scale without touching the recipes.",
  },
  {
    year: "2006",
    label: "Across Maharashtra",
    icon: MapPin,
    tone: "light",
    image:
      "/images/journey/journey_2006.png",
    copy:
      "Ram Bandhu becomes a household name on every kirana shelf in the western belt of the country.",
  },
  {
    year: "2014",
    label: "Pan-India Distribution",
    icon: Truck,
    tone: "light",
    image:
      "/images/journey/journey_2014.png",
    copy:
      "A dedicated cold-chain and logistics network carries ESFL flavour from the coasts to the Himalayan foothills.",
  },
  {
    year: "2018",
    label: "Retail Revolution",
    icon: ShoppingBag,
    tone: "light",
    image:
      "/images/journey/journey_2018.png",
    copy:
      "Modern trade partnerships put ESFL on the shelf of every major supermarket chain in the country.",
  },
  {
    year: "2021",
    label: "Going Global",
    icon: Ship,
    tone: "light",
    image:
      "/images/journey/journey_2021.png",
    copy:
      "First container ships out — ESFL spice blends reach kitchens across the Gulf, the UK, and beyond.",
  },
  {
    year: "2023",
    label: "Sustainable Sourcing",
    icon: Leaf,
    tone: "light",
    image:
      "/images/journey/journey_2023.png",
    copy:
      "Direct farmer partnerships and traceable sourcing make every batch accountable from soil to sachet.",
  },
  {
    year: "2024",
    label: "The Next Chapter",
    icon: Sparkles,
    tone: "light",
    image:
      "/images/journey/journey_2024.png",
    copy:
      "A new R&D kitchen opens its doors, built to carry a hundred-year-old promise into the next hundred.",
  },
];

// number of gaps/segments between the 8 years = 7
const SEGMENT_COUNT = MILESTONES.length - 1;

export default function OurJourney() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const segmentRefs = useRef([]); // 7 line segments, one per gap between years
  const dotRefs = useRef([]);
  const yearItemRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () =>
        Math.max(track.scrollWidth - section.clientWidth, 0);

      const st = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const distance = getScrollDistance();
          // Move the card track right -> left
          gsap.set(track, { x: -distance * self.progress });

          // Each segment i covers scroll-progress range [i/N, (i+1)/N].
          // Within that range it fills continuously 0 -> 1 with scroll.
          // Once progress crosses into the next range, this segment stays
          // fully filled (the "break" happens visually at the gap between
          // segments) and the next one starts filling from scratch.
          segmentRefs.current.forEach((seg, i) => {
            if (!seg) return;
            const segStart = i / SEGMENT_COUNT;
            const segEnd = (i + 1) / SEGMENT_COUNT;
            const raw = (self.progress - segStart) / (segEnd - segStart);
            const segProgress = Math.min(Math.max(raw, 0), 1);
            gsap.set(seg, { scaleX: segProgress });
          });

          // Light up year dots + reveal year labels as each threshold is passed
          dotRefs.current.forEach((dot, i) => {
            if (!dot) return;
            const threshold = i / (MILESTONES.length - 1);
            const reached = self.progress >= threshold;

            dot.classList.toggle("bg-red-600", reached);
            dot.classList.toggle("bg-neutral-300", !reached);

            const item = yearItemRefs.current[i];
            if (item) {
              item.classList.toggle("opacity-100", reached);
              item.classList.toggle("translate-y-0", reached);
              item.classList.toggle("opacity-0", !reached);
              item.classList.toggle("translate-y-2", !reached);
            }
          });
        },
      });

      return () => st.kill();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[400svh]"
    >
      <div className="sticky top-0 w-full h-svh overflow-hidden">
        <div className="flex h-full flex-col justify-between gap-5   pt-24  pb-[3vh]">
          {/* Heading */}
          <div className=" md:mx-auto md:max-w-2xl md:text-center px-4 space-y-2">
            <h2 data-para-effect className="">
              OUR JOURNEY
            </h2>
            <p className="">
              From one storefront in Nashik to a global <br /> spice house  the road
              that shaped ESFL.
            </p>
          </div>

          {/* Horizontal card track */}
          <div className="relative w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex w-max px-6 will-change-transform sm:px-10"
            >
              {MILESTONES.map((m) => (
                <Card key={m.year} milestone={m} />
              ))}
            </div>
          </div>

          {/* Bottom timeline — constrained to 70vw, centered */}
          <div className=" mx-auto w-full md:w-[90vw] px-6">
            {/* Segments Grid */}
            <div className="relative grid grid-cols-7 gap-1 w-full h-[3px]">
              {Array.from({ length: SEGMENT_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className="relative h-full w-full overflow-hidden rounded-full bg-neutral-200"
                >
                  <div
                    ref={(el) => (segmentRefs.current[i] = el)}
                    className="absolute left-0 top-0 h-full w-full origin-left scale-x-0 rounded-full bg-red-600"
                  />
                </div>
              ))}
            </div>

            {/* Years Grid */}
            <div className="relative grid grid-cols-7 gap-1 w-full mt-1">
              {MILESTONES.map((m, i) => {
                const isLast = i === SEGMENT_COUNT;
                // Last item shares the last column with the second-to-last item, but aligns to the right
                const col = isLast ? SEGMENT_COUNT : i + 1;

                return (
                  <div
                    key={m.year}
                    ref={(el) => (yearItemRefs.current[i] = el)}
                    className={`flex translate-y-2 items-center opacity-0 transition-all duration-500 ease-out ${isLast ? "relative" : "gap-1.5"}`}
                    style={{
                      gridColumn: col,
                      gridRow: 1,
                      justifySelf: isLast ? "end" : "start",
                      // Shift the intermediate items left by 5px to center the 6px dot directly under the 4px gap
                      marginLeft: !isLast && i > 0 ? "-0.25rem" : "0",
                    }}
                  >
                    <span
                      ref={(el) => (dotRefs.current[i] = el)}
                      className="h-1.5 w-1.5 shrink-0 bg-neutral-300 transition-colors duration-200"
                    />
                    <span
                      className={` text-[9px] md:text-sm text-neutral-500 ${isLast ? "absolute left-full ml-1.5" : ""}`}
                    >
                      {m.year}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ milestone }) {
  const Icon = milestone.icon;

  return (
    <div
      className=" group border border-black/10 relative flex  p-5 w-[80vw]  md:w-[30vw] rounded-lg   shrink-0 flex-col  overflow-hiddens bg-[#FDF6EC]  ml-2   transition-colors duration-300 ease-out    hover:bg-[#F5C451]   "
    >
      {/* Image */}
      <div className="relative aspect-square md:aspect-video w-full shrink-0 overflow-hidden rounded-sm">
        <Image
          fill
          src={milestone.image}
          alt={milestone.label}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 `}
        />
        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-white">
          <Icon size={16} strokeWidth={2.25} />
        </div>
      </div>

      {/* Content */}
      <div className="relative space-y-5 pt-4">
        <div className="flex justify-between">
          <h5
            className="mb-2  uppercase tracking-wide text-red-600 transition-colors duration-300 group-hover:text-[#E30712]"
          >
            {milestone.label}
          </h5>
          <p
            className="mb-1  text-xs  tracking-wide text-neutral-400 transition-colors duration-300 group-hover:text-[#E30712]"
          >
            {milestone.year}
          </p>
        </div>
        <p
          className=" text-sm transition-colors duration-300 group-hover:text-[#E30712]"
        >
          {milestone.copy}
        </p>
      </div>
    </div>
  );
}