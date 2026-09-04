import Link from "next/link";
import BTN from "@/components/common/BTN";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-[#FDF6EC] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="pattern_bg h-full w-full"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Large 404 text */}
        <h1 className="text-[8rem] md:text-[14rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#E30713] to-[#8c030b] drop-shadow-sm select-none tracking-tighter">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-[#2B1B12] mb-4 md:mb-6">
          Page Not Found
        </h2>
        
        <p className="text-base md:text-xl text-[#2B1B12]/70 max-w-lg mx-auto mb-10 leading-relaxed">
          Oops! It seems you've wandered off the trail. The page you are looking for might have been removed, renamed, or is temporarily unavailable.
        </p>

        <Link href="/">
          <BTN txt="Back to Home" variant="B1" />
        </Link>
      </div>
    </main>
  );
}
