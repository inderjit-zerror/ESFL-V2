"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { MoveLeft, MoveRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';


const teamMembers = [
  {
    id: 1,
    name: 'Hemant Rathi',
    role: 'Chairman',
    description: 'Hemant Rathi achieved his degree in Bachelor of Commerce from Pune University followed by his ICWA (Inter) & ICS (Inter). He has been the president of the ‘Maharashtra Chamber Of Commerce, Industry & Agriculture’ (MACCIA) & was the first trustee of Mumbai Port Trust from North Maharashtra. His achievements include the “Best Businessman of the Year” by Indian Jaycees (2001),”Rotary Vyavasay Seva Puraskar” (2005-2006) and S.L. Kirlosker Achievement Award (2011). This versatile person also occupies position as Director Saraswat Co-op. Bank Ltd. and on the Executive Committee of CIFTI.',
    imageUrl: '/images/about/leaders/hemant-rathi.png',
  },
  {
    id: 2,
    name: 'Umesh Rathi',
    role: 'M.D.',
    description: 'Umesh Rathi completed C.A (Inter) after completing graduation degree in commerce. His skills and capabilities enhance production practices & bring innovative ideas to the table. He fulfills his social responsibilities diligently as an executive committee member of Nashik Industries Manufacturing Association (NIMA). He is the president of a nationwide social forum Bharat Vikas Parishad Maharashtra Prant – II. He earnestly fulfills his duties as a trustee in two social institutes in Nashik which work for slum education programmes & for under privileged girls.',
    imageUrl: '/images/about/leaders/umesh-rathi.png',
  },
  {
    id: 3,
    name: 'Anand Rathi',
    role: 'Director',
    description: 'Anand Rathi graduated with a degree in commerce from Elphinstone College, Mumbai and completed his Masters in Business Administration from MDIS, Singapore. Since the time he has joined Empire Spices & Foods Ltd. has gone from strength to strength. Through his work he displays his competences as a result-driven, self-motivated, dedicated and determined individual.',
    imageUrl: '/images/about/leaders/anad-rathi.png',
  },
  {
    id: 4,
    name: 'Sharad Bedmutha',
    role: 'Director',
    description: 'Sharad Bedmutha has completed B.Com, L.L.B. & F.C.A. He is a practicing Chartered Accountant since last 25 years with specialization in the field of Taxation & Auditing. He also acts as a consultant for a number of reputed banks & industrial houses. He shares a very close and long term association with the organization and holds a status of authority.',
    imageUrl: '/images/about/leaders/sharad-bedmutha.png',
  },
];

export default function LeadershipSection() {
  const swiperRef = useRef(null);

  return (
    <section className="border-b border-black/50 py-12 md:py-24 container">
      <div className="">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-12 gap-6">
          <div className="md:text-left">
            <h2 data-para-effect className="uppercase">
              The People Behind <br /> The Flavour
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-black/50 hover:border-[#e30713] flex items-center justify-center hover:bg-[#e30713] hover:text-white transition-colors"
              aria-label="Previous Leader"
            >
              <MoveLeft className='size-4' />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-10 h-10 rounded-full border border-black/50 hover:border-[#e30713] flex items-center justify-center hover:bg-[#e30713] hover:text-white transition-colors"
              aria-label="Next Leader"
            >
              <MoveRight className='size-4' />
            </button>
          </div>
        </div>

        {/* Team Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={5}
          slidesPerView={1.1}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              spaceBetween:10
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className='!h-auto'>
              <div className="flex h-full flex-col md:flex-row border items-start border-black/20 p-5 md:p-8 rounded-md gap-x-5 max-sm:gap-y-5 md:gap-x-10">

                {/* Left side: Image and Info */}
                <div className="relative w-[10rem] shrink-0 aspect-square rounded-md overflow-hidden">
                  <Image
                    fill
                    src={member.imageUrl}
                    alt={member.name}
                    className="object-contain"
                  />
                </div>

                {/* Right side: Description */}
                <div className="w-full flex h-full flex-col gap-y-5 justify-between">
                  <p className="">
                    {member.description}
                  </p>
                  <div className="">
                    <h5 className="uppercase ">
                      {member.name}
                    </h5>
                    <h6 className="text-sm  opacity-70 mt-1 uppercase">
                      {member.role}
                    </h6>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}