import React from "react";
import AutoPlayVideo from "../common/AutoPlayVideo";

function ScrollDownIndicator({ className = "" }) {
  return (
    <>
      <style>{`
        @keyframes scroll-arrow-bounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.5; }
        }
        @keyframes scroll-fade-in {
          0% { opacity: 0; transform: translateY(-8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .scroll-arrow {
          animation: scroll-arrow-bounce 1.8s ease-in-out infinite;
        }
        .scroll-arrow:nth-child(2) {
          animation-delay: 0.2s;
        }
        .scroll-indicator-wrap {
          animation: scroll-fade-in 0.8s ease-out;
        }
      `}</style>

      <div
        className={`scroll-indicator-wrap flex flex-col items-center gap-2 text-white/90 ${className}`}
      >
        <span className="text-xs   uppercase tracking-[0.25em]">
          Scroll Down
        </span>

        <div className="flex flex-col items-center -space-y-3">
          <svg
            viewBox="0 0 24 24"
            className="scroll-arrow h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="scroll-arrow h-5 w-5 opacity-60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </>
  );
}

const AboutHero = () => {
  return (
    <section data-page-load-hero className="relative  overflow-hidden">
      <div className="relative aspect-square w-full sm:h-svh ">
        <AutoPlayVideo src="/videos/spices_video.mp4" className="w-full h-full object-cover brightness-90" />

        <div data-page-load-overlay className="absolute inset-0 bg-black/40" />

        <div data-page-load-content className="absolute inset-0 px-6 pb-8 sm:px-12 sm:pb-12 flex flex-col justify-center items-center text-white text-center">
          <h1 data-heading-reveal="off" className="  text-5xl sm:text-7xl lg:text-[5rem] lg:leading-[5rem]   mb-4">
            About Us
          </h1>
          <p className="max-w-150     text-sm sm:text-base md:text-lg px-4">
            For over three decades Empire Spices & Foods Ltd. has carried authentic
            Indian flavour from Nashik to kitchens across the world.
            {/* <br className="hidden sm:block" />
            Whether it’s a partnership, enquiry, or collaboration, we’d love to
            hear from you. */}
          </p>
        </div>
        <ScrollDownIndicator className="absolute bottom-8 left-1/2 max-sm:hidden -translate-x-1/2 z-10" />
      </div>
    </section>
  );
};

export default AboutHero;
