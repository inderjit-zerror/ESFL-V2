"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INFO_ROWS = [
  {
    id: "hours",
    label: "Office Hours",
    rows: [
      { k: "Monday – Friday", v: "09:00 – 18:00" },
      { k: "Saturday", v: "09:00 – 13:00" },
      { k: "Sunday", v: "Closed" },
    ],
  },
  {
    id: "corporate",
    label: "Corporate Office",
    lines: [
      "Empire Spices & Foods Ltd.",
      "Empire House, Plot No. 32,",
      "Nashik, Maharashtra 422010",
    ],
  },
  {
    id: "factory",
    label: "Factory Address",
    lines: [
      "Plot No. B-32, MIDC Ambad,",
      "Nashik, Maharashtra 422010,",
      "India",
    ],
  },
  {
    id: "contact",
    label: "Call / Email",
    lines: ["info@esfl.co.in", "+91 253 1234567"],
  },
];

function RowBlock({ label, rows, lines, isLast }) {
  return (
    <div className={isLast ? "" : "border-b border-white/50 pb-6"}>
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-start gap-4 sm:gap-8">
        <h5 data-para-effect className="text-base uppercase tracking-tight text-white sm:text-lg">
          {label}
        </h5>

        <div className="relative text-right text-xs leading-relaxed text-white/80 sm:text-sm">
          {rows
            ? rows.map((r) => (
              <p key={r.k} className="flex flex-col sm:block sm:whitespace-nowrap">
                <span className="mr-0 sm:mr-3">{r.k}</span>
                <span className="text-white font-medium">{r.v}</span>
              </p>
            ))
            : lines.map((l) => <p key={l}>{l}</p>)}
        </div>
      </div>
    </div>
  );
}

export default function OfficeInfoMap() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".oi-map",
        { opacity: 0, scale: 1.04 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        },
      );
      gsap.fromTo(
        ".oi-row",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: { trigger: rootRef.current, start: "top 80%" },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="grid relative  overflow-hidden h-auto bg-[#E30713] lg:grid-cols-2"
    >
                  <div className="pattern_bg"></div>

      {/* Map — left on desktop, bottom on mobile */}
      <div className=" z-10 max-sm:aspect-square oi-map relative  order-last lg:order-first">
        <iframe
          title="Empire Spices & Foods Ltd. location"
          src="https://www.google.com/maps?cid=13564662084488619543&output=embed"
          className="h-full w-full grayscale-[15%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Custom pin card overlay */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 max-w-[78%] sm:max-w-[280px] sm:top-auto sm:translate-y-0 h-fit flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] sm:bottom-10 sm:right-10">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E30713] text-white">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[11px]   uppercase leading-tight tracking-tight text-[#E30713] sm:text-xs">
              Empire Spices &amp; Foods Ltd.
            </p>
            <p className="mt-0.5 text-[11px] text-[#2B1B12]/70 sm:text-xs">
              Nashik, Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      {/* Info panel — right on desktop, top on mobile */}
      <div className=" z-10 relative flex flex-col justify-center gap-5 sm:gap-6 px-6 py-10 sm:px-8 sm:py-12 md:px-14 md:py-16">
        {INFO_ROWS.map((section, i) => (
          <div className="oi-row" key={section.id}>
            <RowBlock
              label={section.label}
              rows={section.rows}
              lines={section.lines}
              isLast={i === INFO_ROWS.length - 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}