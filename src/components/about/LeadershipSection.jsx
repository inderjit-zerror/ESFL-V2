"use client";
import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
    <section className=" pt-12 md:pt-24 container">
      <div className="">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
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
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          speed={800}
          spaceBetween={5}
          slidesPerView={1.1}
          breakpoints={{
            768: {
              slidesPerView: 1.7,
              spaceBetween: 10
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className='md:h-auto! group'>
              <div className="flex h-full flex-col md:flex-row bg-[#ffffff] text-black group-[.swiper-slide-active]:bg-[#e30713] transition-colors duration-300 group-[.swiper-slide-active]:text-white p-4 md:p-5 rounded-xl gap-4 md:gap-6 border border-black/5">
                <div className="absolute inset-0 opacity-0 group-[.swiper-slide-active]:opacity-100 transition-all duration-300">
                  <div className="pattern_bg"></div>
                </div>

                {/* Left side: Image */}
                <div className="flex w-full">

                  <div className="relative w-[30%] md:w-[18rem] shrink-0 aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      fill
                      src={member.imageUrl}
                      alt={member.name}
                      className="object-cover scale-150"
                    />
                  </div>
                  <div className=" pl-5 flex  flex-col justify-end md:hidden">
                    <h5 className="">
                      {member.name}
                    </h5>
                    <p className="text-sm mt-1">
                      {member.role}
                    </p>
                  </div>

                </div>
                {/* Right side: Content */}
                <div className="flex flex-col justify-between ">
                  <div>
                    <p className="text-sm md:text-base ">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-6 hidden md:block md:mt-8">
                    <h5 className="">
                      {member.name}
                    </h5>
                    <p className="text-sm mt-1">
                      {member.role}
                    </p>
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