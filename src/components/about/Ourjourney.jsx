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

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ---------------------------------------------------------------------------
// Data — edit freely. Exactly 8 milestones drive both the cards and the
// bottom timeline markers.
// ---------------------------------------------------------------------------
const MILESTONES = [
  {
    year: "1990",
    label: "A Humble Beginning",
    icon: Rocket,
    tone: "dark", // dark = black/white era photo
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
    copy:
      "A single trader stall in Nashik grows into a promise: honest, unadulterated Indian spice, ground fresh every morning.",
  },
  {
    year: "1998",
    label: "The First Factory",
    icon: Factory,
    tone: "dark",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1200&auto=format&fit=crop",
    copy:
      "Our first mechanised grinding and blending unit takes the craft to industrial scale without touching the recipes.",
  },
  {
    year: "2006",
    label: "Across Maharashtra",
    icon: MapPin,
    tone: "light",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
    copy:
      "Ram Bandhu becomes a household name on every kirana shelf in the western belt of the country.",
  },
  {
    year: "2014",
    label: "Pan-India Distribution",
    icon: Truck,
    tone: "light",
    image:
      "https://images.unsplash.com/photo-1601599963565-b7f49deb2085?q=80&w=1200&auto=format&fit=crop",
    copy:
      "A dedicated cold-chain and logistics network carries ESFL flavour from the coasts to the Himalayan foothills.",
  },
  {
    year: "2018",
    label: "Retail Revolution",
    icon: ShoppingBag,
    tone: "light",
    image:
      "https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=1200&auto=format&fit=crop",
    copy:
      "Modern trade partnerships put ESFL on the shelf of every major supermarket chain in the country.",
  },
  {
    year: "2021",
    label: "Going Global",
    icon: Ship,
    tone: "light",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop",
    copy:
      "First container ships out — ESFL spice blends reach kitchens across the Gulf, the UK, and beyond.",
  },
  {
    year: "2023",
    label: "Sustainable Sourcing",
    icon: Leaf,
    tone: "light",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200&auto=format&fit=crop",
    copy:
      "Direct farmer partnerships and traceable sourcing make every batch accountable from soil to sachet.",
  },
  {
    year: "2024",
    label: "The Next Chapter",
    icon: Sparkles,
    tone: "light",
    image:
      "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=1200&auto=format&fit=crop",
    copy:
      "A new R&D kitchen opens its doors, built to carry a hundred-year-old promise into the next hundred.",
  },
];

export default function OurJourney() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const progressFillRef = useRef(null);
  const dotRefs = useRef([]);

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
        // Total scroll distance for the whole pinned interaction = 300vh
        end: () => "+=" + window.innerHeight * 3,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const distance = getScrollDistance();
          // Move the card track right -> left
          gsap.set(track, { x: -distance * self.progress });

          // Fill the bottom timeline line left -> right
          gsap.set(progressFillRef.current, {
            scaleX: self.progress,
          });

          // Light up year dots as we pass them
          dotRefs.current.forEach((dot, i) => {
            if (!dot) return;
            const threshold = i / (MILESTONES.length - 1);
            dot.classList.toggle("bg-red-600", self.progress >= threshold);
            dot.classList.toggle("bg-neutral-300", self.progress < threshold);
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
      className="relative w-full h-screen overflow-hidden bg-[#FDF6EC]"
    >
      <div className="flex h-full flex-col justify-center gap-10 py-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center px-6">
         
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight Heading_1 text-neutral-900 sm:text-5xl">
            OUR JOURNEY
          </h2>
          <p className="text-sm Paragraph_Medium text-neutral-600 sm:text-base">
            From one storefront in Nashik to a global spice house — the road
            that shaped ESFL.
          </p>
        </div>

        {/* Horizontal card track */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max px-6 will-change-transform sm:px-10"
          >
            {MILESTONES.map((m, i) => (
              <Card key={m.year} milestone={m} />
            ))}
          </div>
        </div>

        {/* Bottom timeline */}
        <div className="mx-auto w-full  px-6">
          <div className="relative h-[3px] w-full rounded-full bg-neutral-200">
            <div
              ref={progressFillRef}
              className="absolute left-0 top-0 h-full w-full origin-left scale-x-0 rounded-full bg-red-600"
            />
          </div>
          <div className="mt-3 flex w-full justify-between">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="flex items-center gap-1.5">
                <span
                  ref={(el) => (dotRefs.current[i] = el)}
                  className="h-1.5 w-1.5 rounded-full bg-neutral-300 transition-colors duration-200"
                />
                <span className="text-[11px] font-medium text-neutral-500">
                  {m.year}
                </span>
              </div>
            ))}
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
      className="
        group relative flex h-fit  p-5 pb-18 w-[300px]  shrink-0 flex-col
        overflow-hiddens bg-white 
        transition-colors duration-300 ease-out
        hover:bg-[#F6A821]
        sm:w-[440px]
      "
    >
      {/* Image */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-xl">
        <img
          src={milestone.image}
          alt={milestone.label}
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            milestone.tone === "dark" ? "grayscale" : ""
          }`}
        />
        <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-red-600 text-white">
          <Icon size={16} strokeWidth={2.25} />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-1 flex-col justify-between px-5 py-4">
        <div>
          <p
            className="mb-1 text-[11px] font-semibold tracking-wide text-neutral-400
                       transition-colors duration-300 group-hover:text-[#E30712]"
          >
            {milestone.year}
          </p>
          <h3
            className="mb-2 Paragraph_Medium font-bold! text-sm  uppercase tracking-wide text-red-600
                       transition-colors duration-300 group-hover:text-[#E30712]"
          >
            {milestone.label}
          </h3>
          <p
            className="text-[13px] Paragraph_Medium leading-relaxed text-neutral-600
                       transition-colors duration-300 group-hover:text-[#E30712]"
          >
            {milestone.copy}
          </p>
        </div>

      </div>
        {/* Big background year */}
        <span
          className="pointer-events-none  absolute bottom-2 right-3 select-none text-4xl font-extrabold
                     text-[#FFC55C] transition-colors duration-300 group-hover:text-[#E30712]"
        >
          {milestone.year}
        </span>
    </div>
  );
}