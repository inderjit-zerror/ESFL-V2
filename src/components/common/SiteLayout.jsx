"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LenisScroll from "@/components/common/LenisScroll";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ViewTransitions } from "next-view-transitions";
import WhatsAppButton from "./Whatsappbutton";

gsap.registerPlugin(ScrollTrigger);

export default function SiteLayout({ children }) {
  const pathname = usePathname();
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    if (!mainRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const restorers = [];
    const ctx = gsap.context(() => {
      const headings = mainRef.current.querySelectorAll(
        'h1.Heading_1:not([data-heading-reveal="off"]), h2.Heading_1:not([data-heading-reveal="off"]), h3.Heading_1:not([data-heading-reveal="off"]), h4.Heading_1:not([data-heading-reveal="off"]), h5.Heading_1:not([data-heading-reveal="off"]), h6.Heading_1:not([data-heading-reveal="off"])'
      );

      headings.forEach((heading) => {
        // Keep the original markup so route changes and GSAP cleanup are safe.
        const originalMarkup = heading.innerHTML;
        const textNodes = [];
        const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
        let node;

        while ((node = walker.nextNode())) {
          if (node.nodeValue.trim()) textNodes.push(node);
        }

        const words = [];
        textNodes.forEach((textNode) => {
          const fragment = document.createDocumentFragment();

          textNode.nodeValue.split(/(\s+)/).forEach((part) => {
            if (!part) return;

            if (/^\s+$/.test(part)) {
              fragment.appendChild(document.createTextNode(part));
              return;
            }

            const mask = document.createElement("span");
            const word = document.createElement("span");
            mask.className = "heading-reveal-word";
            word.className = "heading-reveal-word-inner";
            word.textContent = part;
            mask.appendChild(word);
            fragment.appendChild(mask);
            words.push(word);
          });

          textNode.parentNode.replaceChild(fragment, textNode);
        });

        if (!words.length) return;

        restorers.push(() => {
          heading.innerHTML = originalMarkup;
        });

        gsap.fromTo(
          words,
          { autoAlpha: 0, yPercent: 115 },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.65,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, mainRef);

    return () => {
      ctx.revert();
      restorers.forEach((restore) => restore());
    };
  }, [pathname]);


  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.lenis) {
        window.lenis.resize();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <ViewTransitions>
      <LenisScroll>
        <header>
          <Header />
        </header>

        <main ref={mainRef}>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
        <WhatsAppButton phone="" message="Hi! I'd like to know more about your products." />
      </LenisScroll>
    </ViewTransitions>

  );
}
