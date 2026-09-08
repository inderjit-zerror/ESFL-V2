"use client"
import React, { useRef, useMemo } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import BTN from '@/components/common/BTN'

gsap.registerPlugin(ScrollTrigger)

const DEFAULT_BRAND_PRODUCTS = [
    { name: "Nimbu Pani Mix", zIndex: 1, src: "/images/home/demo/rambandhu/Nimbu.png" },
    { name: "Compounded Hing", zIndex: 2, src: "/images/home/demo/rambandhu/Hing.png" },
    { name: "Pav Bhaji", zIndex: 3, src: "/images/home/demo/rambandhu/PavBhaji.png" },
    { name: "Ram Bandhu Chilli Powder", zIndex: 4, src: "/images/home/demo/rambandhu/Chilli.png" },
    { name: "Mango Pickle", zIndex: 10, src: "/images/home/demo/rambandhu/Mango.png", isCenterImg: true }, // center (index 4)
    { name: "Shahi Paneer Spice Mix", zIndex: 4, src: "/images/home/demo/rambandhu/Shahi.png" },
    { name: "Udad Papad", zIndex: 3, src: "/images/home/demo/rambandhu/Udad.png" },
    { name: "Kabuli Compounded Hing", zIndex: 2, src: "/images/home/demo/rambandhu/Kabuli.png" },
    { name: "Green Chilli Garlic Chutney", zIndex: 1, src: "/images/home/demo/rambandhu/Green.png" }
];

const DEFAULT_DESC = [
    "Ram Bandhu has been a trusted name in Indian kitchens for over 32 years, offering a wide range of spices, pickles, papads, hing, spice mixes, and snacks.",
    "Built on quality, trust, and continuous innovation, the brand creates products that suit the evolving tastes and lifestyles of Indian consumers, with the aim of bringing convenience to the art of cooking."
];

/**
 * Dynamic & Optimized BrandSection Component
 * 
 * @param {Object} props
 * @param {string} [props.logo] - Logo image URL
 * @param {string} [props.logoAlt] - Alt text for the logo
 * @param {string} [props.title] - Section heading
 * @param {string[]|string} [props.desc] - Array of paragraph descriptions or string
 * @param {Array<{src: string, name?: string, zIndex?: number, isCenterImg?: boolean}>} [props.brandProducts] - Products array
 * @param {string} [props.buttonText] - Text for CTA button
 * @param {string} [props.buttonHref] - Link URL for CTA button
 * @param {Function} [props.onButtonClick] - Optional click handler for CTA button
 * @param {string} [props.btnVariant] - BTN variant ('B1' | 'B2')
 * @param {string} [props.className] - Additional classes for container
 */
const BrandSection = ({
    id,
    data,
    logo,
    logoAlt = "Brand Logo",
    title,
    desc,
    brandProducts,
    images,
    buttonText = "view Range",
    buttonHref,
    onButtonClick,
    btnVariant = "B1",
    className = ""
}) => {
    const container = useRef(null);
    const logoRef = useRef(null);
    const textRef = useRef(null);
    const btnRef = useRef(null);
    const productRefs = useRef([]);

    // Extract props either from top-level or data object
    const rawLogo = logo ?? data?.logo ?? "/images/home/demo/rambandhu_logo.svg";
    const resolvedLogo = typeof rawLogo === 'string' ? rawLogo.replace(/^\/public/, "") : rawLogo;

    const resolvedTitle = title ?? data?.title ?? "Ram Bandhu - Aapka Taste Partner";
    const resolvedDesc = desc ?? data?.desc ?? DEFAULT_DESC;
    const rawProducts = brandProducts ?? images ?? data?.brandProducts ?? data?.images ?? DEFAULT_BRAND_PRODUCTS;

    // Normalize product array so it safely accepts objects or image string paths
    const normalizedProducts = useMemo(() => {
        const items = rawProducts && rawProducts.length > 0 ? rawProducts : DEFAULT_BRAND_PRODUCTS;
        return items.map((item, idx) => {
            if (typeof item === 'string') {
                return {
                    src: item.replace(/^\/public/, ""),
                    name: `Brand Product ${idx + 1}`,
                    isCenterImg: false,
                    isCenterLeftImg: false,
                    isCenterRightImg: false,
                    zIndex: undefined,
                };
            }
            const src = (item.src || item.image || item.img || "").replace(/^\/public/, "");
            return {
                src,
                name: item.name || item.title || item.alt || `Brand Product ${idx + 1}`,
                isCenterImg: Boolean(item.isCenterImg),
                isCenterLeftImg: Boolean(item.isCenterLeftImg),
                isCenterRightImg: Boolean(item.isCenterRightImg),
                zIndex: item.zIndex,
            };
        });
    }, [rawProducts]);

    // Find the designated center image index (or fallback to array midpoint)
    const activeCenterIndex = useMemo(() => {
        const found = normalizedProducts.findIndex((p) => p.isCenterImg);
        return found !== -1 ? found : Math.floor(normalizedProducts.length / 2);
    }, [normalizedProducts]);

    const centerLeftIndex = useMemo(() => normalizedProducts.findIndex((p) => p.isCenterLeftImg), [normalizedProducts]);
    const centerRightIndex = useMemo(() => normalizedProducts.findIndex((p) => p.isCenterRightImg), [normalizedProducts]);

    // Normalize descriptions to an array of paragraphs
    const descParagraphs = useMemo(() => {
        if (Array.isArray(resolvedDesc)) return resolvedDesc;
        if (typeof resolvedDesc === 'string') return [resolvedDesc];
        return [];
    }, [resolvedDesc]);

    useGSAP(() => {
        if (!container.current || normalizedProducts.length === 0) return;

        // Reset elements initial styles before building GSAP timeline
        productRefs.current.forEach((el, idx) => {
            if (!el) return;
            const isCenter = idx === activeCenterIndex;
            const isParallel = idx === centerLeftIndex || idx === centerRightIndex;
            gsap.set(el, {
                x: 0,
                opacity: 0,
                scale: (isCenter || isParallel) ? 0.5 : 1,
                transformOrigin: "bottom center",
                force3D: true,
            });
        });

        if (textRef.current) {
            gsap.set(textRef.current, { y: 40, opacity: 0 });
        }

        if (btnRef.current) {
            gsap.set(btnRef.current, { opacity: 0 });
        }

        const mm = gsap.matchMedia();

        mm.add({
            isMobile: "(max-width: 639px)",
            isTablet: "(min-width: 640px) and (max-width: 1023px)",
            isDesktop: "(min-width: 1024px)",
        }, (context) => {
            const { isMobile, isTablet } = context.conditions;

            // Responsive horizontal spread distance per index from center (in rem)
            // Tighter spacing so products overlap naturally like on a showcase shelf
            const baseStep = normalizedProducts.length > 7 ? 10 : normalizedProducts.length > 5 ? 6.5 : 11;
            const stepRem = isMobile ? (baseStep * 0.45) : isTablet ? (baseStep * 0.72) : baseStep;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                }
            });

            // Phase 1: Logo moves to top and resizes
            if (logoRef.current) {
                tl.to(logoRef.current, {
                    top: isMobile ? "3.5rem" : "8rem",
                    width: isMobile ? "7.5rem" : "13rem",
                    duration: 1,
                    ease: "power2.inOut",
                });
            }

            // Phase 2: Text fades and slides into view
            if (textRef.current) {
                tl.to(textRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                }, "<");
                // CTA Button fades in simultaneously with center image
                if (btnRef.current) {
                    tl.to(btnRef.current, {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut",
                    }, "<");
                }

                // Phase 3: Text slides up and fades out
                tl.to(textRef.current, {
                    y: -40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.in",
                });
            }

            // Phase 4: Center image and parallel images scale in and move
            tl.addLabel("centerIn");
            const centerEl = productRefs.current[activeCenterIndex];
            if (centerEl) {
                tl.to(centerEl, {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.inOut",
                    force3D: true,
                }, "centerIn");
            }

            const leftEl = centerLeftIndex !== -1 ? productRefs.current[centerLeftIndex] : null;
            if (leftEl) {
                const distance = centerLeftIndex - activeCenterIndex;
                tl.to(leftEl, {
                    x: `${distance * stepRem}rem`,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.inOut",
                    force3D: true,
                }, "centerIn");
            }

            const rightEl = centerRightIndex !== -1 ? productRefs.current[centerRightIndex] : null;
            if (rightEl) {
                const distance = centerRightIndex - activeCenterIndex;
                tl.to(rightEl, {
                    x: `${distance * stepRem}rem`,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power2.inOut",
                    force3D: true,
                }, "centerIn");
            }

            // Phase 5: Side products dynamically expand outward
            const sideItems = [];
            productRefs.current.forEach((el, idx) => {
                if (el && idx !== activeCenterIndex && idx !== centerLeftIndex && idx !== centerRightIndex) {
                    sideItems.push({
                        el,
                        distance: idx - activeCenterIndex,
                    });
                }
            });

            if (sideItems.length > 0) {
                tl.addLabel("spreadOut");
                sideItems.forEach(({ el, distance }) => {
                    tl.to(el, {
                        x: `${distance * stepRem}rem`,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut",
                        force3D: true,
                    }, "spreadOut");
                });
            }
        });

        return () => {
            mm.revert();
        };
    }, { scope: container, dependencies: [normalizedProducts, activeCenterIndex, centerLeftIndex, centerRightIndex, resolvedLogo, resolvedTitle, resolvedDesc] });

    return (
        <div ref={container} className={`w-full h-[200vh] relative ${className}`}>
            <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">

                {btnVariant === "B2" && (
                    <div className="pattern_bg"></div>
                )}
                {/* Brand Logo */}
                {resolvedLogo && (
                    <Image
                        ref={logoRef}
                        className={` ${(id === 1 || id === 3 || data?.id === 1 || data?.id === 3) ? "drop-shadow-[0_15px_25px_rgba(20,20,20,0.5)]" : ""} w-56 sm:w-64 md:w-80 mx-auto absolute h-auto z-20`}
                        src={resolvedLogo}
                        alt={logoAlt}
                        width={240}
                        height={240}
                        priority
                    />
                )}

                {/* Animated Heading & Descriptions */}
                <div
                    ref={textRef}
                    className="max-w-4xl px-6 space-y-4 text-center mt-8 opacity-0 pointer-events-none select-none z-20"
                >
                    {resolvedTitle && (
                        <h3 className="text-2xl md:text-3xl font-semibold">
                            {resolvedTitle}
                        </h3>
                    )}
                    {descParagraphs.map((paragraph, index) => (
                        <p key={index} className="text-base md:text-lg leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Dynamic Product Images Stage (Aligned on a shared bottom baseline) */}
                <div className="w-full h-72 sm:h-80 md:h-96 absolute  flex items-end justify-center pointer-events-none z-10">
                    {normalizedProducts.map((product, idx) => {
                        const isCenter = idx === activeCenterIndex;
                        const distance = idx - activeCenterIndex;
                        const computedZIndex = product.zIndex !== undefined
                            ? product.zIndex
                            : isCenter
                                ? 20
                                : Math.max(1, 20 - Math.abs(distance));

                        return (
                            <Image
                                key={`${product.src}-${idx}`}
                                ref={(el) => {
                                    if (el) productRefs.current[idx] = el;
                                }}
                                src={product.src}
                                alt={product.name}
                                width={400}
                                height={500}
                                style={{ zIndex: computedZIndex }}
                                className={`h-40 sm:h-64 md:h-72 lg:h-80 w-auto absolute bottom-0 object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)] select-none pointer-events-none ${(isCenter || product.isCenterLeftImg || product.isCenterRightImg) ? "opacity-0 scale-50" : "opacity-0"
                                    }`}
                            />
                        );
                    })}
                </div>

                {/* Bottom Center CTA Button */}
                <div
                    ref={btnRef}
                    onClick={onButtonClick}
                    className="absolute bottom-8 sm:bottom-12 md:bottom-[12vh] left-1/2 -translate-x-1/2 z-30 opacity-0 pointer-events-auto"
                >
                    <BTN txt={buttonText} variant={btnVariant} href={buttonHref} />
                </div>
            </div>
        </div>
    );
};

export default BrandSection;