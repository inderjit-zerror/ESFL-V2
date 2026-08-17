"use client";

import Image from "next/image";
import BTN from "../common/BTN";

export default function BrandSection({
  title,
  subtitle,
  description,
  highlight,
  V,

  heroImage,
  logo,

  buttonText = "View Range",
  onButtonClick,

  bgColor = "bg-[#E30713]",
  textColor = "text-white",
  titleColor = "text-[#FFBE55]",
  highlightColor = "text-[#FFBE55]",

  buttonBg = "bg-[#F7C35A]",
  buttonTextColor = "text-[#B32D18]",

  reverse = false,

  className,
}) {
  return (
    <section
      className={`${bgColor} ${className} container w-full max-sm:py-6 max-sm:pt-12 md:h-[calc(100vh-5rem)]! overflow-hidden flex justify-center items-center`}
    > 
    <div className="pattern_bg"></div>
      <div
        className={`  grid h-full md:py-10 w-full  gap-8 md:gap-0 grid-cols-1 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""
          }`}
      >
        {/* Left Content */}
        <div className="flex items-center md:pr-32">
          <div className="">

            <h2
              data-para-effect
              className={`    ${titleColor} uppercase`}
            >
              {title}
            </h2>

            <p
              className={`     mt-2 ${textColor}`}
            >
              {subtitle}
            </p>

            <p
              className={`  mt-6 md:mt-14   whitespace-pre-line ${textColor}`}
            >
              {description}
            </p>

            <h3
              className={`   mt-5   uppercase ${highlightColor}`}
            >
              {highlight}
            </h3>

            <div

              onClick={onButtonClick}
              className={` mt-8 md:mt-12 `}
            >
              <BTN txt={buttonText} variant={V} />

            </div>

          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-square md:h-full group overflow-hidden bg-cyan-600 ">

          <Image
            src={heroImage}
            alt={title}
            fill
            className="cover transition-all duration-300 group-hover:scale-[1.05]"
          />

          {logo && (
            <Image
              src={logo}
              alt="logo"
              width={140}
              height={80}
              className="absolute right-4 top-4 md:right-8 md:top-8 z-10 w-[90px] md:w-[140px] h-auto object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}