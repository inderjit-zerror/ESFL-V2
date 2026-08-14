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
    <section className=" container py-24 relative">
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
          <div>
            <h6 className="text-[#E30713] uppercase mb-2">
              IMPACT IN ACTION
            </h6>
            <h2 data-para-effect className="uppercase">
              ONGOING CSR <br /> PROJECTS
            </h2>
          </div>
          <a href="#" className="mt-6 sm:mt-0 text-xs font-semibold  text-[#E30713] uppercase hover:opacity-80 flex items-center gap-2">
            VIEW ALL PROJECTS <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div key={index} className=" group cursor-pointer bg-white rounded-xl overflow-hidden border border-gray-100 flex flex-col h-full group">
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs font-semibold tracking-wider text-red uppercase mb-3">
                  {project.category}
                </p>
                <h5 data-para-effect className="uppercase mb-4">
                  {project.title}
                </h5>
                <p className="opacity-70  mb-8 flex-grow">
                  {project.description}
                </p>
                <a href={project.link} className="text-xs font-semibold tracking-wider text-[#E30713] uppercase flex items-center gap-2 hover:opacity-80 group-hover:gap-5  transition-all duration-300">
                  READ MORE <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CsrProjects;