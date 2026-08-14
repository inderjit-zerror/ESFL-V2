"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TrendingUp, GraduationCap, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const ITEMS = [
  {
    number: "01",
    title: "Career Growth",
    body: "Vertical and lateral opportunities across plants, brands and markets to advance your professional journey within our network.",
    icon: TrendingUp,
    side: "left",
    image: "/images/career/career_growth.png",
  },
  {
    number: "02",
    title: "Learning",
    body: "Continuous training programs, industry certifications and leadership development workshops through every stage of your role.",
    icon: GraduationCap,
    side: "right",
    image: "/images/career/career_learning.png",
  },
  {
    number: "03",
    title: "Innovation",
    body: "Work with cutting-edge manufacturing technology and help redefine how authentic Indian food is produced at scale.",
    icon: Lightbulb,
    side: "left",
    image: "/images/career/career_innovation.png",
  },
  {
    number: "04",
    title: "Create Culture",
    body: "A diverse, inclusive environment built on transparency, safety and mutual respect — from the shop floor upwards.",
    icon: Users,
    side: "right",
    image: "/images/career/career_culture.png",
  },
];

export default function WhyPartnerWithUs() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const walkerRef = useRef(null);
  const rowRefs = useRef([]);
  const [dynamicPath, setDynamicPath] = useState("");
  const [svgHeight, setSvgHeight] = useState(0);

  // Measure and set dynamic path
  useEffect(() => {
    const updatePath = () => {
        if (!rowRefs.current || rowRefs.current.length === 0 || !sectionRef.current) return;
        const parentRect = sectionRef.current.getBoundingClientRect();
        setSvgHeight(parentRect.height);

        const centers = rowRefs.current.map((row) => {
          if (!row) return null;
          const circle = row.querySelector('.circle-marker');
          if (!circle) return null;
          const circleRect = circle.getBoundingClientRect();
          const cx = circleRect.left - parentRect.left + circleRect.width / 2;
          const cy = circleRect.top - parentRect.top + circleRect.height / 2;
          const r_offset = circleRect.width / 2 + 50; // 50px gap around the circle for a wide curve
          const side = cx < parentRect.width / 2 ? 'left' : 'right';
          return { x: cx, y: cy, r_offset, side };
        }).filter(Boolean);

        if (centers.length < 2) return;

        let d = "";
        
        for (let i = 0; i < centers.length; i++) {
          const c = centers[i];
          const isLeft = c.side === 'left';
          const sweep = isLeft ? 0 : 1;
          const x_vert = isLeft ? c.x - c.r_offset : c.x + c.r_offset;
          
          if (i === 0) {
            // First circle comes from top
            d += `M ${x_vert} 0 `;
            d += `L ${x_vert} ${c.y} `;
          } else {
            // Top curve from previous horizontal line
            const prev = centers[i-1];
            const Y_mid_prev = (prev.y + c.y) / 2;
            const ry = c.y - Y_mid_prev;
            d += `A ${c.r_offset} ${ry} 0 0 ${sweep} ${x_vert} ${c.y} `;
          }
          
          if (i < centers.length - 1) {
            // Bottom curve to next horizontal line
            const next = centers[i+1];
            const Y_mid = (c.y + next.y) / 2;
            const ry = Y_mid - c.y;
            d += `A ${c.r_offset} ${ry} 0 0 ${sweep} ${c.x} ${Y_mid} `;
            // Horizontal line passing midway between rows
            d += `L ${next.x} ${Y_mid} `;
          } else {
            // Last circle has no bottom curve, it just goes straight down.
            // End 16px above the container bottom so the radius=6 red dot is completely 
            // visible and not chopped in half by the container's overflow-hidden!
            d += `L ${x_vert} ${parentRect.height - 16} `;
          }
        }
        setDynamicPath(d);
    };

    updatePath();
    const timeout = setTimeout(updatePath, 500);
    window.addEventListener('resize', updatePath);
    return () => {
        clearTimeout(timeout);
        window.removeEventListener('resize', updatePath);
    }
  }, []);

  // Animate path
  useEffect(() => {
    if (!dynamicPath || !pathRef.current) return;

    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const length = path.getTotalLength();

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

      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: scrollConfig,
      });

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
    }, sectionRef);

    return () => ctx.revert();
  }, [dynamicPath]);



  return (
    <section ref={sectionRef} className="container py-24 relative overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-16 relative z-10">
          <h6 className="text-[#E30713] uppercase mb-2">
            MORE THAN A JOB
          </h6>
          <h2 data-para-effect className="uppercase text-[#2b2b2b]">
            Why Partner With Us?
          </h2>
        </div>

        {/* Connector line */}
        <svg
          className="pointer-events-none absolute left-0 top-0 hidden w-full sm:block z-0"
          style={{ height: svgHeight ? `${svgHeight}px` : '100%' }}
          fill="none"
          aria-hidden="true"
        >
          {dynamicPath && (
              <path
                ref={pathRef}
                d={dynamicPath}
                stroke="#B7B29E"
                strokeWidth="2"
                strokeLinecap="round"
              />
          )}
          <g ref={walkerRef} opacity="0">
            <circle r="6" fill="#E30713" />
          </g>
        </svg>

        {/* Rows */}
        <div className="relative z-10 flex flex-col gap-16 sm:gap-24 max-w-4xl mx-auto">
          {ITEMS.map((item, i) => (
            <Row key={item.number} item={item} refCallback={(el) => (rowRefs.current[i] = el)} />
          ))}
        </div>
    </section>
  );
}

function Row({ item, refCallback }) {
  const Icon = item.icon;
  const isRight = item.side === "right";

  return (
    <div
      ref={refCallback}
      className={`flex items-center gap-6 sm:gap-10 ${isRight ? "sm:flex-row-reverse sm:text-right" : "sm:flex-row"}`}
    >
      <div className="circle-marker group flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-[#E30713] shadow-sm sm:h-40 sm:w-40 relative z-10 overflow-hidden cursor-pointer">
        <Icon className="relative z-10 h-14 w-14 text-white sm:h-16 sm:w-16 transition-opacity duration-500 group-hover:opacity-0" strokeWidth={1.75} />
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
      </div>

      <div className={isRight ? "sm:items-end" : ""}>
        <div className={`flex items-baseline gap-2 ${isRight ? "sm:flex-row-reverse" : ""}`}>
          <span className="text-2xl text-[#E30713] font-bold">{item.number}</span>
          <h4 data-para-effect className="uppercase text-[#2b2b2b]">
            {item.title}
          </h4>
        </div>
        <p className="mt-2 max-w-md opacity-70 text-sm leading-relaxed text-[#6b6b6b]">{item.body}</p>
      </div>
    </div>
  );
}