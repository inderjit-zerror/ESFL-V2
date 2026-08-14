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
  cardBg: "#FDF6EC",
  cardBgHover: "#F4C96B", // yellow
  iconBg: "#FBE3DC",
  iconBgHover: "#E30713",
  iconColor: "#E30713",
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
    <section ref={sectionRef} className="bg-[#E30713] border-t border-[#fcb62d] py-24">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h6 className="text-[#fcb62d] uppercase mb-2">JOIN US</h6>
            <h2 data-para-effect className="text-[#fcb62d] uppercase m-0">
              Current Openings
            </h2>
          </div>
          <p className="text-sm uppercase text-[#fcb62d] opacity-80 pb-2">
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
      className="job-card rounded-md border border-black/5 bg-white p-6 sm:p-8 shadow-sm cursor-pointer"
      style={{ backgroundColor: COLORS.cardBg }}
    >
      {/* Top row: icon, title, subtitle, external-link arrow */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div
            className="job-icon-box flex h-14 w-14 shrink-0 items-center justify-center rounded-md"
            style={{ backgroundColor: COLORS.iconBg }}
          >
            <Briefcase className="job-icon h-6 w-6" style={{ color: COLORS.iconColor }} strokeWidth={1.75} />
          </div>
          <div>
            <h5
              className="job-title uppercase"
              style={{ color: COLORS.text }}
            >
              {job.title}
            </h5>
            <p className="job-sub mt-1 text-sm opacity-70" style={{ color: COLORS.subText }}>
              by Empire Spices in{" "}
              <span className="font-medium" style={{ color: COLORS.textHover }}>
                {job.department}
              </span>
            </p>
          </div>
        </div>
        <ArrowUpRight className="job-arrow h-5 w-5 shrink-0" style={{ color: COLORS.subText }} />
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        <Tag icon={Clock} label={job.type} />
        <Tag icon={MapPin} label={job.location} />
        <Tag icon={TrendingUp} label={job.experience} />
      </div>

      {/* Divider */}
      <div className="job-divider my-6 h-[1px] w-full" style={{ backgroundColor: COLORS.divider }} />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <p className="job-days text-sm uppercase font-medium" style={{ color: COLORS.text }}>
          {job.daysLeft} DAYS{" "}
          <span className="opacity-70 font-normal" style={{ color: COLORS.subText }}>
            LEFT TO APPLY
          </span>
        </p>
        <span
          className="text-sm font-bold uppercase underline underline-offset-4"
          style={{ color: COLORS.textHover }}
        >
          APPLY
        </span>
      </div>
    </div>
  );
}

function Tag({ icon: Icon, label }) {
  return (
    <span
      className="job-tag flex items-center gap-1.5 rounded border px-3 py-1.5 text-xs uppercase"
      style={{ backgroundColor: COLORS.tagBg, borderColor: COLORS.tagBorder }}
    >
      <Icon className="h-3.5 w-3.5" style={{ color: COLORS.iconColor }} strokeWidth={2} />
      <span className="job-tag-text font-medium" style={{ color: COLORS.subText }}>
        {label}
      </span>
    </span>
  );
}