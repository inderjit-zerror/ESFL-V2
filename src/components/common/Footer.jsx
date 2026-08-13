import { RiInstagramLine, RiLinkedinLine, RiMailLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const sitemapLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Media", href: "/media" },
    { label: "Career", href: "/career" },
  ];

  const supportLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
    { label: "Quality Policy", href: "/quality-policy" },
  ];

  return (
    <footer className="bg-[#E30713] text-white">
      <div className="   container">
        {/* Top row: brand + socials, separated from the link grid */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6   pt-24">
          <div className="w-[50vw] sm:w-[180px]">
            <img
              src="/logo.svg"
              alt="Empire Spices & Foods Ltd."
              className="w-full object-cover object-center"
            />
          </div>


          <div className="flex items-center gap-3  max-sm:hidden ">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-full border-white border flex items-center justify-center hover:bg-white hover:text-[#E30713] transition-colors"
            >
              <RiLinkedinLine size={20} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border-white border flex items-center justify-center hover:bg-white hover:text-[#E30713] transition-colors"
            >
              <RiInstagramLine size={20} />
            </a>
            <a
              href="mailto:care@esfl.co.in"
              aria-label="Email"
              className="w-12 h-12 rounded-full border-white border flex items-center justify-center hover:bg-white hover:text-[#E30713] transition-colors"
            >
              <RiMailLine size={20} />
            </a>
          </div>


        </div>

        {/* Main grid: tagline on its own, links separated by hairline rules on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8 sm:gap-y-10 py-10 sm:py-14">
          <div className="md:col-span-4 ">
            <p className="text-white max-w-sm ">
              Empire Spices &amp; Foods Ltd. is committed to bringing
              authentic, world-class quality to every Indian household.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 text-sm md:contents">
            <div className="md:col-span-2 md:pl-8 md:border-l md:border-white/15">
              <p className="   tracking-widest text-white/90 mb-4">
                SITEMAP
              </p>
              <ul className="space-y-2">
                {sitemapLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="  hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 md:pl-8 md:border-l md:border-white/15">
              <p className="   tracking-widest text-white/90 mb-4">
                SUPPORT
              </p>
              <ul className="space-y-2">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="  hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-2 text-sm md:mt-0 md:col-span-4 md:border-l md:border-white/15">
            <p className="   tracking-widest text-white/90 mb-4">
              CUSTOMER CARE
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10">
              <div>
                <a
                  href="mailto:care@esfl.co.in"
                  className="  hover:underline break-all"
                >
                  care@esfl.co.in
                </a>
                <p className=" text-white/80">
                  Write to us anytime
                </p>
              </div>

              <div>
                <p className=" ">
                  ESFL House, MIDC Industrial Area
                </p>
                <p className="  text-white/80">
                  Andheri East, Mumbai 400093, India
                </p>

              </div>
            </div>

            <div className="max-sm:mt-4">
              <a
                href="tel:+912240001234"
                className="  hover:underline"
              >
                +91 22 4000 1234
              </a>
              <p className=" text-white/80">
                Mon–Sat, 9am–6pm IST
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3  md:hidden ">
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border-white border flex items-center justify-center hover:bg-white hover:text-[#E30713] transition-colors"
          >
            <RiLinkedinLine size={20} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full border-white border flex items-center justify-center hover:bg-white hover:text-[#E30713] transition-colors"
          >
            <RiInstagramLine size={20} />
          </a>
          <a
            href="mailto:care@esfl.co.in"
            aria-label="Email"
            className="w-12 h-12 rounded-full border-white border flex items-center justify-center hover:bg-white hover:text-[#E30713] transition-colors"
          >
            <RiMailLine size={20} />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/50 text-sm py-4 flex justify-between max-sm:flex-col gap-2 items-center px-2">
          <p className="  text-white text-center">
            © 2026 Empire Spices &amp; Foods Ltd. All rights reserved. ·
            esfl.co.in
          </p>
          <p className="  text-white text-center">
            Developed by Iwayworks
          </p>

        </div>
      </div>
    </footer>
  );
}