"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import BTN from "./BTN";
import { FaCartShopping } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
    children: [
      { name: "The Company", href: "/about" },
      { name: "Our Processes", href: "/our-process" },
      { name: "Investors", href: "/investor-login" },
      { name: "CSR / Our Social Initiatives", href: "/csr" },
    ],
  },
  {
    name: "Media",
    href: "/media",
  },
  {
    name: "Career",
    href: "/career",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname()
  const [aboutOpen, setAboutOpen] = useState(false); // desktop hover dropdown
  const [scrolled, setScrolled] = useState(false);
  const scrolledPages = ["/investor-login", "/media"]

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
      className={`fixed top-0 left-0 z-[1000] w-full py-2 md:py-5 transition-colors duration-300 ${scrolled || mobileOpen || scrolledPages.includes(pathname) ? "bg-black/95" : "bg-transparent"
        }`}
    >
      <div className="container flex  w-full items-center justify-between ">
        {/* Left Menu (desktop) */}
        <nav className="hidden items-center gap-10 text-white lg:flex">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.children && item.children.some((child) => child.href === pathname));

            return item.children ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="   group flex flex-col"
                  >
                    <span className="flex items-center gap-1">
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""
                          }`}
                      />
                    </span>

                    <div className="h-[1.5px] w-full overflow-hidden">
                      <div
                        className={`h-full bg-white transition-all duration-300 ${isActive || aboutOpen ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      ></div>
                    </div>
                  </a>
                ) : (
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={() => setAboutOpen((prev) => !prev)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setAboutOpen((prev) => !prev);
                      }
                    }}
                    className="    group flex flex-col cursor-pointer"
                  >
                    <span className="flex items-center gap-1">
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""
                          }`}
                      />
                    </span>

                    <div className="h-[1.5px] w-full overflow-hidden">
                      <div
                        className={`h-full bg-white transition-all duration-300 ${isActive || aboutOpen ? "w-full" : "w-0 group-hover:w-full"
                          }`}
                      ></div>
                    </div>
                  </span>
                )}

                {/* Dropdown panel */}
                <div
                  className={`absolute left-0 top-full pt-6.5 transition-all duration-200 ${aboutOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                >
                  <div className="min-w-[220px] rounded-md border border-white/10 bg-black/95  shadow-lg backdrop-blur-md">
                    {item.children.map((child) =>
                      child.href ? (
                        <a
                          key={child.name}
                          href={child.href}
                          className={`    block px-5 py-2.5 transition-colors duration-150 hover:text-white hover:bg-white/10 ${pathname === child.href ? 'text-white bg-white/5' : 'text-white/80'}`}
                        >
                          {child.name}
                        </a>
                      ) : (
                        <span
                          key={child.name}
                          className="    block px-5 py-2.5 text-white/80 transition-colors duration-150 hover:text-white hover:bg-white/5 cursor-pointer"
                        >
                          {child.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : item.href ? (
              <a
                key={item.name}
                href={item.href}
                className="    group flex flex-col"
              >
                {item.name}

                <div className="h-[1.5px] w-full overflow-hidden">
                  <div className={`h-full bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                </div>
              </a>
            ) : (
              <span
                key={item.name}
                className="    group flex flex-col cursor-pointer"
              >
                {item.name}

                <div className="h-[1.5px] w-full overflow-hidden">
                  <div className={`h-full bg-white transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
                </div>
              </span>
            )
          })}
        </nav>



        {/* Logo */}
        <a
          href="/"
          data-header-logo-link
          className="absolute left-1/2 -translate-x-1/2"
        >
          <div>
            <Image
              src="/logo.svg"
              alt="Empire Logo"
              width={130}
              height={80}
              fetchPriority="high"
              data-header-logo-image
              className="h-auto  w-26 md:w-32 object-contain"
            />
          </div>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className=" absolute right-4 z-10 flex h-10 w-10 items-center justify-center text-white lg:hidden"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Right Side (desktop) */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://www.rambandhu.com/" target="_blank">
            <BTN txt={`Shop Now`} variant="B2" />
          </a>
          <BTN txt={`Become Channel Partner`} variant="B1" href={"/become-a-partner"} />
        </div>

        {/* Spacer to balance the hamburger button on mobile so the logo stays centered */}
        <div className="h-10 w-10 lg:hidden" aria-hidden="true"></div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-x-0 top-13 z-40 origin-top transition-all h-screen backdrop-blur-xs duration-300  lg:hidden ${mobileOpen
          ? "pointer-events-auto  opacity-100"
          : "pointer-events-none  opacity-0"
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
                  className="    flex w-full items-center justify-between py-4 text-left text-white"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${mobileAboutOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 pb-3 pl-4">
                      {item.children.map((child) =>
                        child.href ? (
                          <a
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="    py-2 text-white/70 transition-colors duration-150 hover:text-white"
                          >
                            {child.name}
                          </a>
                        ) : (
                          <span
                            key={child.name}
                            className="    py-2 text-white/70 transition-colors duration-150 hover:text-white cursor-pointer"
                          >
                            {child.name}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : item.href ? (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="    border-b border-white/10 py-4 text-white last:border-b-0"
              >
                {item.name}
              </a>
            ) : (
              <span
                key={item.name}
                className="    border-b border-white/10 py-4 text-white last:border-b-0 cursor-pointer"
              >
                {item.name}
              </span>
            )
          )}

          <a
            href="https://www.rambandhu.com/"
            target="blank"
            onClick={() => setMobileOpen(false)}
            className="    flex items-center gap-2 border-b border-white/10 py-4 text-white"
          >
            Shop Now <FaCartShopping />
          </a>

          <div className="pt-5">
            <BTN txt={`Become Channel Partner`} variant="B1" href={"/become-a-partner"} />
          </div>
        </nav>
      </div>
    </header>
  );
}