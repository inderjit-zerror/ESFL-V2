"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OfficeInfoMap from "./Officeinfomap";
import BTN from "../common/BTN";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OFFICES = [
  {
    id: "corporate",
    label: "Corporate Office",
    lines: [
      "Ram Bandhu Masale Pvt. Ltd.",
      "MIDC Industrial Area, Ambad",
      "Nashik, Maharashtra – 422010",
    ],
    phone: "0253 - 2381 555",
  },
  {
    id: "registered",
    label: "Registered Office",
    lines: [
      "Plot No. 14, Satpur Industrial Estate",
      "Nashik, Maharashtra – 422007",
    ],
    phone: "0253 - 2350 212",
  },
];

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
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">
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

function ChatPill({ className = "" }) {
  return (
    <>
      <style>{`
        @keyframes whatsapp-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes whatsapp-icon-wiggle {
          0%, 85%, 100% { transform: rotate(0deg); }
          88% { transform: rotate(-12deg); }
          91% { transform: rotate(10deg); }
          94% { transform: rotate(-8deg); }
          97% { transform: rotate(0deg); }
        }
        .whatsapp-pill {
          animation: whatsapp-bounce 2.6s ease-in-out infinite;
        }
        .whatsapp-icon {
          animation: whatsapp-icon-wiggle 3.2s ease-in-out infinite;
        }
      `}</style>

      <a
        href="https://wa.me/918805580055?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Ram%20Bandhu%20Masale."
        target="_blank"
        rel="noopener noreferrer"
        className={`relative inline-flex group items-center ${className}`}
      >
        {/* radar ping ring behind the pill */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
          aria-hidden="true"
        />

        <span
          className="whatsapp-pill group relative inline-flex items-center gap-2 rounded-full bg-[#25D366] group-hover:bg-[#19ac4f] px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.05] active:scale-[0.98]"
        >
          <svg
            viewBox="0 0 24 24"
            className="whatsapp-icon h-4 w-4 fill-current"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.19 3.03 14.7 2 12.04 2Zm0 18.06h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.14.82.84-3.06-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.53 3.7-8.22 8.24-8.22 2.2 0 4.27.86 5.83 2.42a8.15 8.15 0 0 1 2.41 5.82c0 4.53-3.7 8.22-8.22 8.22Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.03 0 1.2.87 2.35.99 2.51.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
          </svg>
          Chat With Us
        </span>
      </a>
    </>
  );
}

export default function CompoContact() {
  const rootRef = useRef(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal-block").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
            },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Wire this up to your actual endpoint / API route.
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <div
      ref={rootRef}
      className="w-full bg-[#FDF6EC] text-[#2B1B12]"
      style={{ fontFamily: "'Work Sans', ui-sans-serif, system-ui" }}
    >
      <section data-page-load-hero className="relative  overflow-hidden">
        <div className="relative aspect-square w-full sm:h-svh ">
          <img
            src="https://images.unsplash.com/photo-1758520145090-581ad6571c30?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A Ram Bandhu customer care executive taking a call"
            data-page-load-media
            className="h-full w-full object-cover object-center"
          />

          <div data-page-load-overlay className="absolute inset-0 bg-black/40" />

          <div data-page-load-content className="absolute inset-0 px-6 pb-8 sm:px-12 sm:pb-12 flex flex-col justify-center items-center text-white text-center">
            <h1 data-heading-reveal="off" className="Heading_1 text-5xl sm:text-7xl lg:text-[5rem] lg:leading-[5rem] font-bold mb-4">
              Contact
            </h1>
            <p className="max-w-[600px] mx-auto MNM_FONT text-sm sm:text-base md:text-lg px-4">
              Let’s Build Something Meaningful Together.<br className="hidden sm:block" />
              Whether it’s a partnership, enquiry, or collaboration, we’d love to hear from you.
            </p>
          </div>
          <ScrollDownIndicator className="absolute bottom-8 left-1/2 max-sm:hidden -translate-x-1/2 z-10" />
        </div>
      </section>

      <OfficeInfoMap />

      {/* Replaced 'h-svh' with natural padding to avoid mobile overflow issues */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-8 sm:py-24 lg:px-10">
        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-12">
          
          {/* Reach us at */}
          <div className="reveal-block rounded-3xl bg-[#E70514] p-6 sm:p-10 text-[white] flex flex-col justify-center">
            <h2 className="text-2xl font-bold sm:text-3xl Heading_1">
              Reach Us At
            </h2>
            <div className="mt-8 space-y-6 text-sm sm:text-base">
              <div>
                <p className="text-[white] font-semibold text-xs Paragraph_Medium uppercase tracking-[0.2em]">
                  Customer Care Number
                </p>
                <a
                  href="tel:8805580055"
                  className="mt-1.5 inline-block text-[white] font-semibold Paragraph_Medium hover:underline text-lg sm:text-xl"
                >
                  88055 80055
                </a>
              </div>
              <div className="font-semibold Paragraph_Medium">
                <p className="text-[white] text-xs uppercase tracking-[0.2em]">
                  Customer Care Email
                </p>
                <a
                  href="mailto:customercare@esfl.co.in"
                  className="mt-1.5 inline-block text-white hover:underline text-lg sm:text-xl"
                >
                  customercare@esfl.co.in
                </a>
              </div>
            </div>

            <p className="mt-10 text-xs text-[white]/50 font-semibold Paragraph_Medium">
              Our team responds within one business day.
            </p>
          </div>

          {/* OR divider — signature stitched element, desktop only */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
            aria-hidden="true"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-[#E70514]/50 bg-[#FDF6EC] text-xs font-bold uppercase tracking-widest text-[#E70514]">
              Or
            </div>
          </div>

          {/* Mobile OR divider */}
          <div className="flex items-center gap-3 lg:hidden" aria-hidden="true">
            <span className="h-px flex-1 bg-[#E8D9C3]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E70514]">
              Or
            </span>
            <span className="h-px flex-1 bg-[#E8D9C3]" />
          </div>

          {/* Submit query form */}
          <div className="reveal-block rounded-3xl border border-[#E8D9C3] bg-white p-6 sm:p-10">
            <h2 className="text-2xl font-bold sm:text-3xl Heading_1">
              Submit Your Query
            </h2>

            {status === "sent" ? (
              <div className="mt-8 rounded-2xl bg-[#FFC55C]/25 p-6 text-sm text-[#2B1B12]">
                Thanks — your message has been sent. We'll get back to you
                shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2B1B12]/60">
                      First Name
                    </span>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange("firstName")}
                      className="mt-2 w-full rounded-xl border border-[#E8D9C3] bg-[#FDF6EC] px-4 py-3 text-sm outline-none transition-colors focus:border-[#E70514]"
                      placeholder="Asha"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2B1B12]/60">
                      Last Name
                    </span>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={handleChange("lastName")}
                      className="mt-2 w-full rounded-xl border border-[#E8D9C3] bg-[#FDF6EC] px-4 py-3 text-sm outline-none transition-colors focus:border-[#E70514]"
                      placeholder="Patil"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2B1B12]/60">
                    Phone
                  </span>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="mt-2 w-full rounded-xl border border-[#E8D9C3] bg-[#FDF6EC] px-4 py-3 text-sm outline-none transition-colors focus:border-[#E70514]"
                    placeholder="98xxxxxxxx"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2B1B12]/60">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className="mt-2 w-full rounded-xl border border-[#E8D9C3] bg-[#FDF6EC] px-4 py-3 text-sm outline-none transition-colors focus:border-[#E70514]"
                    placeholder="you@email.com"
                  />
                </label>

                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2B1B12]/60">
                    Message
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange("message")}
                    className="mt-2 w-full resize-none rounded-xl border border-[#E8D9C3] bg-[#FDF6EC] px-4 py-3 text-sm outline-none transition-colors focus:border-[#E70514]"
                    placeholder="How can we help?"
                  />
                </label>
                
                <div className="pt-2">
                  <BTN txt={status === "sending" ? "Sending..." : "Submit"} />
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Chat With Us — same trigger shown inline + fixed to the corner   */}
      {/* ---------------------------------------------------------------- */}
      <section className="flex justify-center pb-16 sm:pb-24">
        <ChatPill />
      </section>

      {/* Persistent floating chat trigger (site-wide, same component) */}
      {/* <ChatPill className="fixed bottom-6 right-6 z-50 hidden sm:inline-flex" /> */}
    </div>
  );
}
