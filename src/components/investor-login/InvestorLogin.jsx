"use client"
import React, { useState } from "react";
import { Label, Input } from "../common/FormFields";
import Image from 'next/image';

// --- SVG Icons ---
const LockIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const ShieldCheckIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22.5c4.97-1.46 8.25-5.9 8.25-10.75V6l-8.25-3-8.25 3v5.75c0 4.85 3.28 9.29 8.25 10.75z" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// --- Component ---
export default function InvestorLogin() {
  return (
    <section className=" container pt-24 md:pt-32 relative">
      <div className="w-full">
        {/* Header Section */}
        <div className=" mb-8">
          {/* <h6 className="text-[#E30713] uppercase mb-2">
            Secure Portal
          </h6> */}
          <h2 data-para-effect className="uppercase mb-2">
            Investor Login
          </h2>
        </div>

        {/* Login Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-black/30 rounded-lg overflow-hidden w-full">

          {/* Left Column: Form */}
          <div className="md:col-span-1 p-5 md:p-10 flex flex-col justify-center">
            <form className="space-y-6">

              {/* Username Input */}
              <div className="space-y-2">
                <Label htmlFor="folio">
                  Folio / Demat / PAN No.
                </Label>
                <Input
                  type="text"
                  id="folio"
                  placeholder="Enter identification number"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <Label htmlFor="password">
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="********"
                />
              </div>

              {/* Extras (Remember me & Forgot password) */}
              <div className="flex items-center justify-between text-xs pt-2">
                <label className="flex items-center text-gray-500 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4 cursor-pointer border-gray-300 rounded text-[#E30713] focus:ring-[#E30713]"
                  />
                  Remember me
                </label>
                <a href="#" className="text-[#E30713] text-xs uppercase hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#E30713] hover:bg-[#d30311] text-white text-xs font-semibold tracking-wider uppercase py-4 rounded-lg flex items-center justify-center gap-2 transition-colors mt-4"
              >
                Login
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Column: Image with Overlay */}
          <div className="md:col-span-2 relative min-h-150">
            <Image
              src="/images/our-process/IGE.jpg"
              alt="Quality assurance worker on production line"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            {/* Overlay Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
              <LockIcon className="w-6 h-6 text-[#f6bc25] mb-3" />

              <h3 className="text-white text-lg font-bold tracking-wide uppercase mb-2">
                Secure Shareholder Access
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                Encrypted access to investor information, holdings and shareholder services — available to registered members only.
              </p>

              <div className="flex items-center gap-2 text-[#f6bc25]">
                <ShieldCheckIcon className="w-5 h-5" />
                <span className="text-xs font-semibold tracking-wider uppercase">
                  256-Bit Secured
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}