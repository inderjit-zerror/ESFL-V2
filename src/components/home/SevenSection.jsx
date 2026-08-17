
"use client";
import React, { useEffect, useRef } from "react";
// import MovingSlider from '../MovingSlider'
import { FaXTwitter } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import BTN from "../common/BTN";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { RiInstagramLine, RiLinkedinLine, RiMailLine } from "@remixicon/react";

const SocialLable = ({ lable, text }) => {
  return (
    <>
      <div className="w-fit h-fit flex Font2   select-none cursor-pointer  group  text-[18px] max-md:text-[14px] max-md:  bg-[#E30713] px-[20px] py-[15px] max-md:px-[10px] max-md:py-[7px] rounded-lg gap-[4vw] justify-center items-center">
        <div className="w-fit     h-fit flex gap-[10px] justify-center items-center group-hover:translate-x-[10px] transition-all duration-500">
          {lable}
          {text}
        </div>

        <div className="w-[25px] h-[25px] max-md:hidden flex rounded-lg justify-center items-center p-[4px] bg-white group-hover:translate-x-[-10px] transition-all duration-500">
          <GoArrowRight className="text-[#E30713]" />
        </div>
      </div>
    </>
  );
};

const imgArr = [
  `/images/home/RamBandhu.jpg`,
  `/images/home/P2.png`,
  `/images/home/GN.png`,
  `/images/home/RamBandhu.jpg`,
  `/images/home/Temptin.jpg`,
];

const CustomImg = () => {

  return (
    <>
      <div className="w-fit h-fit flex justify-center ml-3 md:ml-5 items-center gap-3 md:gap-5 select-none cursor-pointer">
        {imgArr.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-[65vw] md:w-[25vw] aspect-3/4 overflow-hidden rounded-xl relative group"
            >
              <Image fill
                src={item}
                alt="img"
                className="w-full h-full object-cover"
              />

              {/* BlackScreen */}
              <div className="w-full h-full absolute top-0 transition-all duration-500 opacity-0 left-0 bg-[#00000071] z-[20] group-hover:opacity-100 flex justify-center items-center">
                <BTN txt={"View Post"} variant={"B1"} />
              </div>

              {/* Btn */}
              <a target="blank" href="https://www.instagram.com/RambandhuOfficial">
                <div className="w-fit h-fit absolute top-2 md:top-4 left-2 md:left-4 Font3 text-white p-3 rounded-full  bg-[#E30713] flex justify-center items-center gap-[10px] z-40 transition-all duration-500">
                  <FaInstagram />
                </div>
              </a>

            </div>
          );
        })}
      </div>
    </>
  );
};

const SevenSection = () => {

  return (
    <div className=" w-full h-fit flex flex-col overflow-hidden  ">
      <div className="w-full h-fit    py-12 md:py-24 ">

        <div className=" uppercase md:text-center max-sm:px-4">
          <h2 data-para-effect>Stay in Touch</h2>
        </div>

        <div className=" hidden md:flex max-sm:px-4 w-full h-fit flex-wrap md:justify-center     md:items-center  mt-5 gap-2 md:gap-x-5">
          <a target="blank" href="https://www.instagram.com/RambandhuOfficial">

            <BTN txt={"Instagram"} variant={"B1"} />

          </a>
          <a target="blank" href="https://www.facebook.com/RamBandhuOfficial">
            <BTN txt={"Facebook"} variant={"B1"} />

          </a>
          <a target="blank" href="https://x.com/RambandhuMasale">
            <BTN txt={"Twitter"} variant={"B1"} />

          </a>
        </div>

        <div className="flex items-center gap-3 px-4 pt-2  md:hidden ">
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full border-[#e30713] border flex items-center justify-center bg-[#e30713] text-white transition-colors"
          >
            <RiLinkedinLine size={20} />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            className="w-12 h-12 rounded-full border-[#e30713] border flex items-center justify-center bg-[#e30713] text-white transition-colors"
          >
            <RiInstagramLine size={20} />
          </a>
          <a
            href="mailto:care@esfl.co.in"
            aria-label="Email"
            className="w-12 h-12 rounded-full border-[#e30713] border flex items-center justify-center bg-[#e30713] text-white transition-colors"
          >
            <RiMailLine size={20} />
          </a>
        </div>

        <div className="w-full h-fit flex overflow-hidden pt-8 md:pt-16">
          <Marquee>
            <CustomImg />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SevenSection;