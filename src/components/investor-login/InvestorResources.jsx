import React from 'react';

// --- SVG Icons ---
const DocumentIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25h.008v.008H9v-.008zm3 0h.008v.008H12v-.008zm3 0h.008v.008H15v-.008zm-6 3h.008v.008H9v-.008zm3 0h.008v.008H12v-.008z" />
  </svg>
);

const ChartIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

// --- Component ---
export default function InvestorResources() {
  const resources = [
    {
      id: 1,
      title: "ANNUAL REPORTS",
      description: "Download latest fiscal year statements, balance sheets and ESG disclosures.",
      footer: "VIEW REPORTS",
      Icon: DocumentIcon,
    },
    {
      id: 2,
      title: "QUALITY CONTROL",
      description: "Schedule for upcoming AGMs, notices, resolutions and past meeting transcripts.",
      footer: "SEE SCHEDULE",
      Icon: CalendarIcon,
    },
    {
      id: 3,
      title: "SUSTAINABILITY & SAFETY",
      description: "Live tracking, historical data and dividend history for Empire Spices equity.",
      footer: "TRACK EQUITY",
      Icon: ChartIcon,
    }
  ];

  return (
    <section className="h-fit bg-[#fcfaf7] py-20 px-4 md:px-8 lg:px-10 relative">
      
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#E70514] text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Disclosures
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold Heading_1 text-[black] uppercase tracking-tighter mb-4">
            Investor Resources
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Everything a shareholder needs — filings, meeting notices and market performance, kept current and public.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white border border-gray-100 rounded-xl pt-14 pb-8 px-8 shadow-sm flex flex-col justify-between min-h-[320px] overflow-hidden transition-all duration-300 hover:bg-[#E70514] hover:shadow-xl hover:-translate-y-1"
            >
              {/* Top Right Icon Container */}
              <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-[#E70514]/40 rounded-bl-[2rem] flex items-center justify-center transition-colors duration-300 group-hover:border-[#f6bc25]">
                <card.Icon className="w-10 h-10 text-[#E70514]/60 transition-colors duration-300 group-hover:text-[#f6bc25]" />
              </div>

              {/* Card Content */}
              <div>
                <h3 className="text-[15px] font-extrabold! text-[#E70514] uppercase tracking-wide mb-4 transition-colors duration-300 group-hover:text-white">
                  {card.id}. {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-white/95">
                  {card.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-8">
                <hr className="border-gray-200 mb-4 transition-colors duration-300 group-hover:border-white/30" />
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest transition-colors duration-300 group-hover:text-white/80">
                  {card.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}