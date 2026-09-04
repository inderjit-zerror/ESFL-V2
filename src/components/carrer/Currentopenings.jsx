"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Clock, MapPin, TrendingUp, ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";

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


export default function CurrentOpenings() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  // Scroll-triggered stagger reveal for the cards.
  useGSAP(() => {
    const cards = gsap.utils.toArray(".job-card");
    gsap.from(cards, {
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      },
    });
  });

  return (
    <section ref={sectionRef} className="bg-[#E30713] border-t border-[#ffffff] relative   py-12 md:py-24 ">
      <div className="pattern_bg"></div>
      <div className="container md:mx-auto md:max-w-6xl">
        {/* Header */}
        <div className=" mb-8  flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            {/* <h6 className="text-[#fcb62d] uppercase mb-2">JOIN US</h6> */}
            <h2 data-para-effect className="text-[#ffffff] uppercase m-0">
              Current Openings
            </h2>
          </div>
          <p className="text-sm uppercase text-[#ffffff] pb-2">
            {JOBS.length} ROLES OPEN
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {JOBS.map((job, i) => (
            <JobCard key={i} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="job-card rounded-xl  p-6 sm:p-8 cursor-pointer bg-[#ffffff] transition-transform ">
      {/* Top row: icon, title, subtitle, external-link arrow */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-[#FBE3DC]">
            <Briefcase className="h-6 w-6 text-[#E30713]" strokeWidth={1.75} />
          </div>
          <div>
            <h5 className="uppercase text-black">
              {job.title}
            </h5>
            <p className="mt-1 text-sm opacity-70">
              by Empire Spices in{" "}
              <span className="font-medium text-[#E30713]">
                {job.department}
              </span>
            </p>
          </div>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-[#6B6B6B]" />
      </div>

      {/* Tags */}
      <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
        <Tag icon={Clock} label={job.type} />
        <Tag icon={MapPin} label={job.location} />
        <Tag icon={TrendingUp} label={job.experience} />
      </div>

      {/* Divider */}
      <div className="mt-10 mb-4 border-t border-black/10 w-full" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase font-medium text-[#1F1F1F]">
          {job.daysLeft} DAYS left
        </p>
        <span className="text-xs uppercase hover:underline underline-offset-2 text-[#E30713]">
          APPLY
        </span>
      </div>
    </div>
  );
}

function Tag({ icon: Icon, label }) {
  return (
    <span className="flex items-center gap-1.5 rounded border px-3 py-1.5 text-xs uppercase bg-[#FFFFFF] border-[#EDE3D4]">
      <Icon className="h-3.5 w-3.5 text-[#E30713]" strokeWidth={2} />
      <span className="font-medium text-[#6B6B6B]">
        {label}
      </span>
    </span>
  );
}