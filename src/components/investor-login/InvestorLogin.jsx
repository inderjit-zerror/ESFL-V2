import React from 'react';
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
    <section className="bg-[#fcfaf7] h-fit py-16 px-4 md:px-8 lg:px-10 relative flex items-center justify-center">
      
   
      <div className=" w-full mx-auto">
        
        {/* Header Section */}
        <div className="mb-8">
          <p className="text-[#E70514] text-sm md:text-base font-semibold mb-1">
            Secure Portal
          </p>
          <h2 className="text-3xl md:text-4xl Heading_1 font-black text-[black] uppercase tracking-tighter">
            Investor Login
          </h2>
        </div>

        {/* Login Card Container */}
        <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-14 flex flex-col justify-center">
            <form className="space-y-6">
              
              {/* Username Input */}
              <div className="space-y-2">
                <label 
                  htmlFor="folio" 
                  className="block text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase"
                >
                  Folio / Demat / PAN No.
                </label>
                <input 
                  type="text" 
                  id="folio"
                  placeholder="Enter identification number"
                  className="w-full bg-[#fcfaf7] border border-gray-200 text-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-[#E70514] focus:ring-1 focus:ring-[#E70514] transition-colors rounded-sm"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label 
                  htmlFor="password" 
                  className="block text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase"
                >
                  Password
                </label>
                <input 
                  type="password" 
                  id="password"
                  placeholder="********"
                  className="w-full bg-[#fcfaf7] border border-gray-200 text-gray-700 px-4 py-3 text-sm focus:outline-none focus:border-[#E70514] focus:ring-1 focus:ring-[#E70514] transition-colors rounded-sm"
                />
              </div>

              {/* Extras (Remember me & Forgot password) */}
              <div className="flex items-center justify-between text-xs pt-2">
                <label className="flex items-center text-gray-500 cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="mr-2 w-3.5 h-3.5 border-gray-300 rounded-sm text-[#E70514] focus:ring-[#E70514]" 
                  />
                  Remember me
                </label>
                <a href="#" className="text-[#E70514] hover:underline">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#E70514] hover:bg-[#d30311] text-white text-[11px] font-bold tracking-[0.2em] uppercase py-4 rounded-sm flex items-center justify-center gap-2 transition-colors mt-4"
              >
                Login
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Column: Image with Overlay */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/images/IGE.jpg"
              alt="Quality assurance worker on production line"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
            
            {/* Overlay Text Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <LockIcon className="w-5 h-5 text-[#f6bc25] mb-3" />
              
              <h3 className="text-white text-lg font-bold tracking-wide uppercase mb-2">
                Secure Shareholder Access
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                Encrypted access to investor information, holdings and shareholder services — available to registered members only.
              </p>
              
              <div className="flex items-center gap-2 text-[#f6bc25]">
                <ShieldCheckIcon className="w-4 h-4" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
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