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
          className="whatsapp-pill group relative inline-flex items-center gap-2 rounded-full bg-[#25D366] group-hover:bg-[#19ac4f] px-6 py-3 text-sm   tracking-wide text-white shadow-[0_8px_20px_-6px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.05] active:scale-[0.98]"
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
    >
      <OfficeInfoMap />

      <section className="  py-12 md:py-24  container mx-auto">
        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Reach us at */}
          <div className="reveal-block rounded-lg bg-[#E30713] p-5 sm:p-8 text-white flex flex-col justify-center">
            <h3 data-para-effect className="uppercase text-white mb-2">
              Reach Us At
            </h3>
            <p className="text-white/80 text-sm mb-8">
              Whether it's a partnership, enquiry, or collaboration, we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase opacity-70 tracking-widest text-white">
                  Customer Care Number
                </p>
                <a
                  href="tel:8805580055"
                  className="mt-1.5 inline-block text-white font-medium hover:underline text-xl sm:text-2xl"
                >
                  88055 80055
                </a>
              </div>
              <div>
                <p className="text-xs uppercase opacity-70 tracking-widest text-white">
                  Customer Care Email
                </p>
                <a
                  href="mailto:customercare@esfl.co.in"
                  className="mt-1.5 inline-block text-white font-medium hover:underline text-xl sm:text-2xl"
                >
                  customercare@esfl.co.in
                </a>
              </div>
            </div>

            <p className="mt-10 text-xs text-white/60 uppercase tracking-wider">
              Our team responds within one business day.
            </p>
          </div>

          {/* OR divider — desktop */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:flex"
            aria-hidden="true"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-[#E30713]/40 bg-[#FDF6EC] text-xs font-bold uppercase tracking-widest text-[#E30713]">
              Or
            </div>
          </div>

          {/* Mobile OR divider */}
          <div className="flex items-center gap-3 lg:hidden" aria-hidden="true">
            <span className="h-px flex-1 bg-[#E8D9C3]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#E30713]">
              Or
            </span>
            <span className="h-px flex-1 bg-[#E8D9C3]" />
          </div>

          {/* Submit query form */}
          <div className="reveal-block rounded-lg border border-black/5 bg-white p-5 sm:p-8">
            <h3 data-para-effect className="uppercase text-[#2B1B12] mb-2">
              Submit Your Query
            </h3>
            <p className="text-sm opacity-70 text-[#6B6B6B] mb-8">
              Fill in your details below and our team will respond shortly.
            </p>

            {status === "sent" ? (
              <div className="mt-6 rounded-md bg-[#E30713]/10 p-6 text-sm text-[#E30713] font-medium">
                Thanks — your message has been sent successfully. We'll get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs opacity-50 uppercase">
                      First Name
                    </span>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange("firstName")}
                      className="w-full rounded-md border border-black/5 bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B]"
                      placeholder="Asha"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs opacity-50 uppercase">
                      Last Name
                    </span>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={handleChange("lastName")}
                      className="w-full rounded-md border border-black/5 bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B]"
                      placeholder="Patil"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs opacity-50 uppercase">
                    Phone
                  </span>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full rounded-md border border-black/5 bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B]"
                    placeholder="98xxxxxxxx"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs opacity-50 uppercase">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full rounded-md border border-black/5 bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B]"
                    placeholder="you@email.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs opacity-50 uppercase">
                    Message
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange("message")}
                    className="w-full rounded-md border border-black/5 bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B] resize-none"
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

      <section className="flex justify-center pb-16 sm:  pb-12 md:pb-24 ">
        <ChatPill />
      </section>

    </div>
  );
}
