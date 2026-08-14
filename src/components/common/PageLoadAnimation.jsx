"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const LOGO_SRC = "/logo.svg";

export default function PageLoadAnimation() {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const logo = logoRef.current;
    const targetLogo = document.querySelector("[data-header-logo-image]");

    if (!overlay || !logo || !targetLogo) {
      const timeout = window.setTimeout(() => setHidden(true), 0);
      return () => window.clearTimeout(timeout);
    }

    const finishIntro = () => {
      const timeout = window.setTimeout(() => setHidden(true), 0);
      return timeout;
    };

    if (targetLogo.getBoundingClientRect().width === 0) {
      const timeout = finishIntro();
      return () => window.clearTimeout(timeout);
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(targetLogo, { autoAlpha: 1 });
      const timeout = finishIntro();
      return () => window.clearTimeout(timeout);
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const targetRect = targetLogo.getBoundingClientRect();
      const startWidth = Math.min(
        Math.max(window.innerWidth * 0.35, 180),
        280
      );
      const startHeight = startWidth * (targetRect.height / targetRect.width);

      gsap.set(targetLogo, { autoAlpha: 0 });
      gsap.set(overlay, { autoAlpha: 1 });
      gsap.set(logo, {
        autoAlpha: 1,
        height: startHeight,
        left: window.innerWidth / 2,
        top: window.innerHeight / 2,
        width: startWidth,
        xPercent: -50,
        yPercent: -50,
      });

      const timeline = gsap.timeline({
        onComplete: () => {
          gsap.set(targetLogo, { clearProps: "opacity,visibility" });
          document.body.style.overflow = originalOverflow;
          setHidden(true);
        },
      });

      timeline
        .to(
          logo,
          {
            duration: 1,
            ease: "power3.inOut",
            height: targetRect.height,
            left: targetRect.left + targetRect.width / 2,
            top: targetRect.top + targetRect.height / 2,
            width: targetRect.width,
          },
          0.5
        )
        .set(targetLogo, { autoAlpha: 1 }, ">")
        .to(
          overlay,
          {
            autoAlpha: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          ">"
        )
        .to(logo, { autoAlpha: 0, duration: 0.2 }, "<");
    }, overlay);

    return () => {
      ctx.revert();
      document.body.style.overflow = originalOverflow;
      gsap.set(targetLogo, { clearProps: "opacity,visibility" });
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9999] bg-beige"
    >
      <div ref={logoRef} className="fixed">
        <Image
          src={LOGO_SRC}
          alt=""
          fill
          priority
          sizes="260px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
