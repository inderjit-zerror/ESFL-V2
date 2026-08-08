"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import BTN from "./BTN";
import { FaCartShopping } from "react-icons/fa6";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "The Company", href: "/about/our-story" },
      { name: "Our Processes", href: "/our-process" },
      { name: "Investors", href: "/investor-login" },
      { name: "CSR / Our Social Initiatives", href: "/about/awards" },
    ],
  },
  {
    name: "Media",
    href: "/media",
  },
  {
    name: "Career",
    href: "/careers",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false); // desktop hover dropdown
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false); // mobile drawer
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // mobile accordion

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile drawer on route-ish navigation (link click) handled inline via onClick

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-2 pt-3 transition-colors duration-300 ${
        scrolled || mobileOpen ? "bg-black/95" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[70px] w-full items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Left Menu (desktop) */}
        <nav className="hidden items-center gap-10 text-white lg:flex">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <a
                  href={item.href}
                  className="Paragraph_Medium HNR_FONT group flex flex-col"
                >
                  <span className="flex items-center gap-1">
                    {item.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>

                  <div className="h-[1.5px] w-full overflow-hidden">
                    <div
                      className={`h-full bg-white transition-all duration-300 ${
                        aboutOpen ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></div>
                  </div>
                </a>

                {/* Dropdown panel */}
                <div
                  className={`absolute left-0 top-full pt-4 transition-all duration-200 ${
                    aboutOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="min-w-[220px] rounded-md border border-white/10 bg-black/95 py-2 shadow-lg backdrop-blur-md">
                    {item.children.map((child) => (
                      <a
                        key={child.name}
                        href={child.href}
                        className="Paragraph_Medium HNR_FONT block px-5 py-2.5 text-white/80 transition-colors duration-150 hover:text-white hover:bg-white/5"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="Paragraph_Medium HNR_FONT group flex flex-col"
              >
                {item.name}

                <div className="h-[1.5px] w-full overflow-hidden">
                  <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
                </div>
              </a>
            )
          )}
        </nav>

     

        {/* Logo */}
        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <div>
            <Image
              src="/images/nav/logo.png"
              alt="Empire Logo"
              width={130}
              height={80}
              className="h-auto w-[90px] object-contain sm:w-[110px] lg:w-[130px]"
            />
          </div>
        </a>

           {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className=" absolute right-5 z-10 flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Right Side (desktop) */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="https://www.rambandhu.com/"
            target="blank"
            className="Paragraph_Medium HNR_FONT text-white flex flex-col group"
          >
            <div className="flex gap-2">
              Shop Now <FaCartShopping />
            </div>
            <div className="h-[1.5px] w-full overflow-hidden">
              <div className="h-full w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
            </div>
          </a>

          <BTN txt={`Become Channel Partner`} variant="B1" />
        </div>

        {/* Spacer to balance the hamburger button on mobile so the logo stays centered */}
        <div className="h-10 w-10 lg:hidden" aria-hidden="true"></div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-[calc(70px+0.75rem)] z-40 origin-top transition-all duration-300 ease-in-out lg:hidden ${
          mobileOpen
            ? "pointer-events-auto max-h-[calc(100vh-70px-0.75rem)] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex max-h-[calc(100vh-70px-0.75rem)] flex-col gap-1 overflow-y-auto bg-black/95 px-6 py-6 backdrop-blur-md">
          {navLinks.map((item) =>
            item.children ? (
              <div
                key={item.name}
                className="border-b border-white/10 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setMobileAboutOpen((prev) => !prev)}
                  aria-expanded={mobileAboutOpen}
                  className="Paragraph_Medium HNR_FONT flex w-full items-center justify-between py-4 text-left text-white"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      mobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    mobileAboutOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 pb-3 pl-4">
                      {item.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="Paragraph_Medium HNR_FONT py-2 text-white/70 transition-colors duration-150 hover:text-white"
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="Paragraph_Medium HNR_FONT border-b border-white/10 py-4 text-white last:border-b-0"
              >
                {item.name}
              </a>
            )
          )}

          <a
            href="https://www.rambandhu.com/"
            target="blank"
            onClick={() => setMobileOpen(false)}
            className="Paragraph_Medium HNR_FONT flex items-center gap-2 border-b border-white/10 py-4 text-white"
          >
            Shop Now <FaCartShopping />
          </a>

          <div className="pt-5">
            <BTN txt={`Become Channel Partner`} variant="B1" />
          </div>
        </nav>
      </div>
    </header>
  );
}