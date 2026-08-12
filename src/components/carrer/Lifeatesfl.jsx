// "use client";

// import React from "react";
// import gsap from "gsap";

// export default function LifeAtESFL() {
//   // Array of images matching the collage layout
//   // Replace the 'src' with your actual image paths from the public folder
//  const images = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?auto=format&fit=crop&q=80&w=400",
//     alt: "Employees smiling",
//     rotation: -6,
//     zIndex: 10,
//     className: "w-64 h-96 -ml-12 mt-12",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1745921204896-c2011440a4e2?auto=format&fit=crop&q=80&w=400",
//     alt: "Machinery",
//     rotation: 8,
//     zIndex: 5,
//     className: "w-56 h-72 -ml-24 mt-40",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1641296834707-bbe46429d945?auto=format&fit=crop&q=80&w=400",
//     alt: "Spices",
//     rotation: -2,
//     zIndex: 20,
//     className: "w-72 h-80 -ml-8 mt-24",
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1759763823587-c8bd07fca246?auto=format&fit=crop&q=80&w=400",
//     alt: "Factory Workers",
//     rotation: 4,
//     zIndex: 15,
//     className: "w-60 h-80 -ml-16 mt-16",
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400",
//     alt: "Plants",
//     rotation: -4,
//     zIndex: 12,
//     className: "w-64 h-64 -ml-16 mt-48",

//   },

//     {
//     id: 6,
//     src: "https://images.unsplash.com/photo-1641296834707-bbe46429d945?auto=format&fit=crop&q=80&w=400",
//     alt: "Spices",
//     rotation: -2,
//     zIndex: 20,
//     className: "w-72 h-80 -ml-8 mt-24",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1759763823587-c8bd07fca246?auto=format&fit=crop&q=80&w=400",
//     alt: "Factory Workers",
//     rotation: 4,
//     zIndex: 15,
//     className: "w-60 h-80 -ml-16 mt-16",
//   },
//   {
//     id: 8,
//     src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400",
//     alt: "Plants",
//     rotation: -4,
//     zIndex: 12,
//     className: "w-64 h-64 -ml-16 mt-48",

//   },
// ];
//   // GSAP Hover Animations
//   const handleMouseEnter = (e) => {
//     gsap.to(e.currentTarget, {
//       scale: 1.15,
//       rotation: 0,
//       zIndex: 50, // Bring to front on hover
//       duration: 0.4,
//       ease: "power3.out",
//     });
//   };

//   const handleMouseLeave = (e, originalRotation, originalZIndex) => {
//     gsap.to(e.currentTarget, {
//       scale: 1,
//       rotation: originalRotation,
//       zIndex: originalZIndex, // Restore original depth
//       duration: 0.4,
//       ease: "power2.out",
//     });
//   };

//   return (
//     <div className="h-fit bg-[#E70514] overflow-hidden relative flex flex-col font-sans">

//       {/* Top Header Section */}
//       <div className="w-full max-w-7xl mx-auto px-8 md:px-16 pt-16 flex flex-col md:flex-row justify-between items-start z-30 relative">
//         <div className="mb-8 md:mb-0 Heading_1">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#fcb62d] mb-1">
//             Life at ESFL
//           </h1>
//           <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
//             CULTURE
//           </h2>
//         </div>

//         <div className="max-w-md Paragraph_Medium text-sm text-[#e6bca3] leading-relaxed text-justify md:text-left">
//           Lorem ipsum dolor sit amet consectetur. Sed sit quis tempor cursus laoreet
//           in sed. Leo nibh arcu magna eu at. Convallis vitae penatibus fringilla donec. 
//           Eget auctor elementum justo adipiscing. Fermentum quam pharetra orci congue 
//           lacus at sed pellentesque vitae. Maecenas suspendisse elit amet nunc proin. 
//           Tempor imperdiet amet eu semper iaculis pretium dapibus eu. Eu enim est.
//         </div>
//       </div>



//       {/* Bottom Image Collage Section */}
//       <div className="flex-grow flex items-end justify-center pb-0 relative w-full  ">
//         <div className="flex flex-row items-end justify-center w-full translate-y-16 ">
//           {images.map((img) => (
//             <div
//               key={img.id}
//               onMouseEnter={(e) => handleMouseEnter(e)}
//               onMouseLeave={(e) => handleMouseLeave(e, img.rotation, img.zIndex)}
//               className={`relative cursor-pointer origin-bottom transition-shadow duration-300 hover:shadow-2xl ${img.className}`}
//               style={{
//                 transform: `rotate(${img.rotation}deg)`,
//                 zIndex: img.zIndex,
//               }}
//             >
//               {/* Using standard img tag for ease of copy/pasting external URLs, 
//                   swap to Next/Image for production if self-hosting assets */}
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover border-[8px] border-[#FCB62D]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }


"use client";

import React from "react";
import gsap from "gsap";

export default function LifeAtESFL() {
  // Array of images matching the collage layout
  // Replace the 'src' with your actual image paths from the public folder
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?auto=format&fit=crop&q=80&w=400",
      alt: "Employees smiling",
      rotation: -6,
      zIndex: 10,
      className: "w-64 h-96 -ml-12 mt-12",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1745921204896-c2011440a4e2?auto=format&fit=crop&q=80&w=400",
      alt: "Machinery",
      rotation: 8,
      zIndex: 5,
      className: "w-56 h-72 -ml-24 mt-40",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1641296834707-bbe46429d945?auto=format&fit=crop&q=80&w=400",
      alt: "Spices",
      rotation: -2,
      zIndex: 20,
      className: "w-72 h-80 -ml-8 mt-24",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1759763823587-c8bd07fca246?auto=format&fit=crop&q=80&w=400",
      alt: "Factory Workers",
      rotation: 4,
      zIndex: 15,
      className: "w-60 h-80 -ml-16 mt-16",
    },
    {
      id: 5,
      src: "/images/home/P2.png",
      alt: "Plants",
      rotation: -4,
      zIndex: 12,
      className: "w-64 h-64 -ml-16 mt-48",

    },

    {
      id: 6,
      src: "https://images.unsplash.com/photo-1641296834707-bbe46429d945?auto=format&fit=crop&q=80&w=400",
      alt: "Spices",
      rotation: -2,
      zIndex: 20,
      className: "w-72 h-80 -ml-8 mt-24",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1759763823587-c8bd07fca246?auto=format&fit=crop&q=80&w=400",
      alt: "Factory Workers",
      rotation: 4,
      zIndex: 15,
      className: "w-60 h-80 -ml-16 mt-16",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=400",
      alt: "Plants",
      rotation: -4,
      zIndex: 12,
      className: "w-64 h-64 -ml-16 mt-48",

    },
  ];
  // GSAP Hover Animations
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.15,
      rotation: 0,
      y: -100, // Lift the image up on hover
      zIndex: 50, // Bring to front on hover
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (e, originalRotation, originalZIndex) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: originalRotation,
      y: 0, // Return to original position
      zIndex: originalZIndex, // Restore original depth
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <div className="h-fit bg-[#E70514] overflow-hidden relative flex flex-col font-sans">

      {/* Top Header Section */}
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 pt-16 flex flex-col md:flex-row justify-between items-start z-30 relative">
        <div className="mb-8 md:mb-0 Heading_1">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fcb62d] mb-1">
            Life at ESFL
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            CULTURE
          </h2>
        </div>

        <div className="max-w-md Paragraph_Medium text-sm text-[#e6bca3] leading-relaxed text-justify md:text-left">
          Lorem ipsum dolor sit amet consectetur. Sed sit quis tempor cursus laoreet
          in sed. Leo nibh arcu magna eu at. Convallis vitae penatibus fringilla donec.
          Eget auctor elementum justo adipiscing. Fermentum quam pharetra orci congue
          lacus at sed pellentesque vitae. Maecenas suspendisse elit amet nunc proin.
          Tempor imperdiet amet eu semper iaculis pretium dapibus eu. Eu enim est.
        </div>
      </div>



      {/* Bottom Image Collage Section */}
      <div className="flex-grow flex items-end justify-center pb-0 relative w-full  ">
        <div className="flex flex-row items-end justify-center w-full translate-y-16 ">
          {images.map((img) => (
            <div
              key={img.id}
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={(e) => handleMouseLeave(e, img.rotation, img.zIndex)}
              className={`relative cursor-pointer origin-bottom transition-shadow duration-300 hover:shadow-2xl ${img.className}`}
              style={{
                transform: `rotate(${img.rotation}deg)`,
                zIndex: img.zIndex,
              }}
            >
              {/* Using standard img tag for ease of copy/pasting external URLs, 
                  swap to Next/Image for production if self-hosting assets */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover border-[8px] border-[#FCB62D]"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}