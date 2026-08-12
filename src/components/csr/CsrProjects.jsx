import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    category: "EDUCATION",
    title: "PROJECT SHIKSHA",
    description: "Providing digital learning tools and laboratory equipment to secondary schools in rural Nashik and Marathwada clusters.",
    image: "/images/csr/csr_project_education_1786541334666.png",
    link: "#"
  },
  {
    category: "HEALTH",
    title: "AROGYA SEVA",
    description: "Operating mobile health clinics that offer free diagnostics and essential medicines to farming families every month.",
    image: "/images/csr/csr_project_health_1786541597869.png",
    link: "#"
  },
  {
    category: "ENVIRONMENT",
    title: "GREEN CANOPY",
    description: "Afforestation initiative focused on planting native species and restoring local biodiversity around our plants.",
    image: "/images/csr/csr_project_environment_1786541711253.png",
    link: "#"
  }
];

const CsrProjects = () => {
  return (
    <section className="w-full bg-[#FDF6EC] py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12">
          <div>
            <p className="text-[#E70514] font-bold tracking-[0.2em] text-[10px] sm:text-xs uppercase mb-3">
              IMPACT IN ACTION
            </p>
            <h2 className="Heading_1 text-3xl sm:text-4xl lg:text-[42px] font-extrabold uppercase text-[#2b2b2b] tracking-tight">
              ONGOING CSR PROJECTS
            </h2>
          </div>
          <Link href="#" className="mt-6 sm:mt-0 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#E70514] uppercase hover:opacity-80 flex items-center gap-2">
            VIEW ALL PROJECTS <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-t-xl overflow-hidden shadow-sm flex flex-col h-full group">
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#a9a9a9] uppercase mb-3">
                  {project.category}
                </p>
                <h3 className="text-xl font-extrabold text-[#2b2b2b] uppercase tracking-tight mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <hr className="border-gray-100 mb-6" />
                <Link href={project.link} className="text-[10px] font-bold tracking-[0.2em] text-[#E70514] uppercase flex items-center gap-2 hover:opacity-80">
                  READ MORE <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CsrProjects;