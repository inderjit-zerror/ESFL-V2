"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Clock, MapPin, TrendingUp, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// -----------------------------------------------------------------------
// Content — edit this array to change roles, tags, or days remaining.
// -----------------------------------------------------------------------
const JOBS = [
  {
    title: "UI/UX Designer",
    department: "Marketing",
    type: "Full Time",
    location: "Nashik, MH",
    experience: "3-5 Years Exp.",
    daysLeft: 30,
  },
  {
    title: "Sales Executive",
    department: "Sales",
    type: "Full Time",
    location: "Delhi NCR",
    experience: "2+ Years Exp.",
    daysLeft: 30,
  },
  {
    title: "Production Supervisor",
    department: "Marketing",
    type: "Full Time",
    location: "Nashik, MH",
    experience: "3-5 Years Exp.",
    daysLeft: 30,
  },
  {
    title: "Quality Analyst",
    department: "Sales",
    type: "Full Time",
    location: "Delhi NCR",
    experience: "2+ Years Exp.",
    daysLeft: 30,
  },
  {
    title: "UI/UX Designer",
    department: "Marketing",
    type: "Full Time",
    location: "Nashik, MH",
    experience: "3-5 Years Exp.",
    daysLeft: 30,
  },
  {
    title: "Sales Executive",
    department: "Sales",
    type: "Full Time",
    location: "Delhi NCR",
    experience: "2+ Years Exp.",
    daysLeft: 30,
  },
];

// Colors used for the GSAP hover tween (kept as JS constants so they can
// be tweened directly — Tailwind classes alone can't be animated smoothly).
const COLORS = {
  cardBg: "#FFFFFF",
  cardBgHover: "#F4C96B", // yellow
  iconBg: "#FBE3DC",
  iconBgHover: "#E70514",
  iconColor: "#E70514",
  iconColorHover: "#FFFFFF",
  text: "#1F1F1F",
  textHover: "#B5341F", // red
  subText: "#6B6B6B",
  subTextHover: "#8A2E17",
  tagBg: "#FFFFFF",
  tagBgHover: "rgba(196, 50, 27, 0.12)",
  tagBorder: "#EDE3D4",
  tagBorderHover: "rgba(196, 50, 27, 0.35)",
  divider: "#EDEDED",
  dividerHover: "rgba(196, 50, 27, 0.25)",
};

export default function CurrentOpenings() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Scroll-triggered stagger reveal for the cards.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".job-card");
      gsap.from(cards, {
        opacity: 0,
        y: 50,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#E70514] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-white/80">JOIN US</p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-[#F4C96B] sm:text-4xl">
              Current Openings
            </h2>
          </div>
          <p className="hidden text-xs font-bold  text-white/90 sm:block">
            {JOBS.length} ROLES OPEN
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {JOBS.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }) {
  const cardRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const q = gsap.utils.selector(card);

    // Build (but don't play) a reusable hover timeline.
    tl.current = gsap
      .timeline({ paused: true })
      .to(
        card,
        { backgroundColor: COLORS.cardBgHover, duration: 0.3, ease: "power2.out" },
        0
      )
      .to(q(".job-icon-box"), { backgroundColor: COLORS.iconBgHover, duration: 0.3 }, 0)
      .to(q(".job-icon"), { color: COLORS.iconColorHover, duration: 0.3 }, 0)
      .to(q(".job-title"), { color: COLORS.textHover, duration: 0.3 }, 0)
      .to(q(".job-sub"), { color: COLORS.subTextHover, duration: 0.3 }, 0)
      .to(q(".job-tag"), { backgroundColor: COLORS.tagBgHover, borderColor: COLORS.tagBorderHover, duration: 0.3 }, 0)
      .to(q(".job-tag-text"), { color: COLORS.textHover, duration: 0.3 }, 0)
      .to(q(".job-divider"), { backgroundColor: COLORS.dividerHover, duration: 0.3 }, 0)
      .to(q(".job-days"), { color: COLORS.textHover, duration: 0.3 }, 0)
      .to(q(".job-arrow"), { color: COLORS.textHover, duration: 0.3 }, 0);

    const play = () => tl.current.play();
    const reverse = () => tl.current.reverse();

    card.addEventListener("mouseenter", play);
    card.addEventListener("mouseleave", reverse);

    return () => {
      card.removeEventListener("mouseenter", play);
      card.removeEventListener("mouseleave", reverse);
      tl.current.kill();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="job-card rounded-lg border border-black/5 Paragraph_Medium bg-white p-6 shadow-sm"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      {/* Top row: icon, title, subtitle, external-link arrow */}
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div
            className="job-icon-box flex h-11 w-11 shrink-0 items-center justify-center rounded-md"
            style={{ backgroundColor: COLORS.iconBg }}
          >
            <Briefcase className="job-icon h-5 w-5" style={{ color: COLORS.iconColor }} strokeWidth={1.75} />
          </div>
          <div>
            <h3
              className="job-title text-sm font-extrabold uppercase tracking-wide"
              style={{ color: COLORS.text }}
            >
              {job.title}
            </h3>
            <p className="job-sub mt-0.5 text-xs" style={{ color: COLORS.subText }}>
              by Empire Spices in{" "}
              <span className="font-semibold" style={{ color: COLORS.textHover }}>
                {job.department}
              </span>
            </p>
          </div>
        </div>
        <ArrowUpRight className="job-arrow h-4 w-4" style={{ color: COLORS.subText }} />
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        <Tag icon={Clock} label={job.type} />
        <Tag icon={MapPin} label={job.location} />
        <Tag icon={TrendingUp} label={job.experience} />
      </div>

      {/* Divider */}
      <div className="job-divider my-5 h-px" style={{ backgroundColor: COLORS.divider }} />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <p className="job-days text-xs font-bold tracking-wide" style={{ color: COLORS.text }}>
          {job.daysLeft} DAYS{" "}
          <span className="font-medium" style={{ color: COLORS.subText }}>
            LEFT TO APPLY
          </span>
        </p>
        <a
          href="#"
          className="text-xs font-bold tracking-wide underline underline-offset-2"
          style={{ color: COLORS.textHover }}
        >
          APPLY
        </a>
      </div>
    </div>
  );
}

function Tag({ icon: Icon, label }) {
  return (
    <span
      className="job-tag flex items-center gap-1.5 rounded-sm border px-3 py-1.5 text-[10px] font-semibold tracking-wide"
      style={{ backgroundColor: COLORS.tagBg, borderColor: COLORS.tagBorder }}
    >
      <Icon className="h-3 w-3" style={{ color: COLORS.iconColor }} strokeWidth={2} />
      <span className="job-tag-text" style={{ color: COLORS.subText }}>
        {label.toUpperCase()}
      </span>
    </span>
  );
}