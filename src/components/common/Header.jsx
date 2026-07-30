"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
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
      { name: "Our Processes", href: "/about/leadership" },
      { name: "Investors", href: "/about/mission" },
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

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header className={`fixed top-0 left-0 z-50 w-full py-2 pt-3 transition-colors duration-300 ${
    scrolled ? "bg-black/95" : "bg-transparent"
  }`}>
      <div className="mx-auto flex h-[70px] w-full items-center justify-between px-6 lg:px-12">
        {/* Left Menu */}
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
        <a href="/" className="absolute left-1/2 -translate-x-1/2">

        <div >
          <Image
            src="/images/nav/logo.png"
            alt="Empire Logo"
            width={130}
            height={80}
            className="object-contain"
            />
        </div>
            </a>

        {/* Right Side */}
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
      </div>
    </header>
  );
}