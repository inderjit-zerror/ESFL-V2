"use client";

import React, { useState, useRef, useEffect } from "react";
import { Label, Input, Select, Textarea } from "../common/FormFields";
import gsap from "gsap";
import { ArrowRight, FileText, X } from "lucide-react";
import { RiArrowDownSLine } from "@remixicon/react";
import Image from "next/image";
import BTN from "../common/BTN";

const DEPARTMENTS = [
  "Marketing",
  "Sales",
  "Production",
  "Quality",
  "Design",
  "Human Resources",
];

export default function RegisterInterest() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const fieldRefs = useRef([]);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    experience: "",
    location: "",
    linkedin: "",
  });
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const dropzoneRef = useRef(null);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Your Interest submission:", { ...form, file });
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
    gsap.to(dropzoneRef.current, { scale: 1.015, duration: 0.2, ease: "power2.out" });
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
    gsap.to(dropzoneRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    gsap.to(dropzoneRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) setFile(dropped);
  };

  const onFileInputChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  let fieldIndex = 0;
  const registerField = (el) => {
    if (el) {
      fieldRefs.current[fieldIndex] = el;
      fieldIndex += 1;
    }
  };

  return (
    <section ref={sectionRef} className=" border-b border-black/50  overflow-hidden container   py-12 md:py-24 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column */}
        <div ref={leftRef} className=" aspect-square md:aspect-auto rounded-md md:h-full relative overflow-hidden">
          <Image
            fill
            src="/images/career/form_img.png"
            alt="Workers"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right column — form */}
        <div className=" max-sm:mt-5 sm:pl-10 md:pl-12 xl:pl-16 flex flex-col justify-center">
          <h2 data-para-effect className="uppercase  mb-2">
            Register Your Interest
          </h2>
          <p className="opacity-70 mb-5">
            Don't see the right role? Share your details once and we'll notify you the moment a matching opportunity opens.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid  gap-3 grid-cols-2">
              <div ref={registerField}>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" required placeholder="Enter your full name" value={form.fullName} onChange={handleChange("fullName")} />
              </div>
              <div ref={registerField}>
                <Label htmlFor="email">Email</Label>
                <Input id="email" required type="email" placeholder="email@example.com" value={form.email} onChange={handleChange("email")} />
              </div>
            </div>

            <div className="grid  gap-3 grid-cols-2">
              <div ref={registerField}>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 _" value={form.phone} onChange={handleChange("phone")} />
              </div>
              <div ref={registerField}>
                <Label htmlFor="department">Department of Interest</Label>
                <Select
                  id="department"
                  required
                  label="Department"
                  value={form.department}
                  onChange={handleChange("department")}
                >
                  {DEPARTMENTS.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="grid  gap-3 grid-cols-2">
              <div ref={registerField}>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" placeholder="e.g. 5" value={form.experience} onChange={handleChange("experience")} />
              </div>
              <div ref={registerField}>
                <Label htmlFor="location">Preferred Location</Label>
                <Input id="location" placeholder="City, Country" value={form.location} onChange={handleChange("location")} />
              </div>
            </div>

            <div ref={registerField}>
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input id="linkedin" placeholder="https://linkedin.com/in/_" value={form.linkedin} onChange={handleChange("linkedin")} />
            </div>

            <div ref={registerField}>
              <Label>Upload Resume</Label>
              <label
                ref={dropzoneRef}
                onDragEnter={onDragEnter}
                onDragOver={(e) => e.preventDefault()}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                className={`flex h-32 rounded-md cursor-pointer flex-col items-center justify-center border transition-colors ${isDragging
                  ? "border-[#C4321B] bg-[#C4321B]/5"
                  : "border-black/5 bg-[#FCF8F2]"
                  }`}
              >
                <input type="file" className="hidden" onChange={onFileInputChange} />
                {file ? (
                  <div className="flex items-center gap-2 px-4 text-sm text-[#2b2b2b]">
                    <FileText className="h-4 w-4 shrink-0 text-[#C4321B]" />
                    <span className="max-w-[220px] truncate">{file.name}</span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setFile(null);
                      }}
                      className="text-[#6b6b6b] hover:text-[#C4321B]"
                      aria-label="Remove file"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <span className="text-[10px]   tracking-widest text-[#9a9a9a] uppercase">
                    Choose file or drag and drop
                  </span>
                )}
              </label>
            </div>

            <div className="">


              <BTN txt={"Register"} />

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

