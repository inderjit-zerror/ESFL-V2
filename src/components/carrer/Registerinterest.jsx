"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, FileText, X } from "lucide-react";
import { RiArrowDownSLine } from "@remixicon/react";
import Image from "next/image";

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(leftRef.current, {
        opacity: 0,
        x: -24,
        duration: 0.6,
      }).from(
        fieldRefs.current.filter(Boolean),
        {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.06,
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    <section ref={sectionRef} className="bg-white  overflow-hidden py-10 px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left column */}
          <div ref={leftRef} className=" h-[50vh] md:h-full overflow-hidden">
            <Image
            fill
              src="/images/career/form_img.png" 
              alt="Workers" 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Right column — form */}
          <div className="pl-6 sm:pl-10 lg:pl-12 xl:pl-16 flex flex-col justify-center">
            <h2 className="Heading_1 text-3xl sm:text-4xl lg:text-[42px] font-extrabold uppercase leading-tight tracking-tight text-[#2b2b2b] mb-3">
              Register Your Interest
            </h2>
            <p className="Paragraph_Medium text-sm leading-relaxed text-[#6b6b6b] mb-10 max-w-xl">
              Don't see the right role? Share your details once and we'll notify you the moment a matching opportunity opens.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div ref={registerField}>
                  <Label>Full Name</Label>
                  <Input required placeholder="Enter your full name" value={form.fullName} onChange={handleChange("fullName")} />
                </div>
                <div ref={registerField}>
                  <Label>Email</Label>
                  <Input required type="email" placeholder="email@example.com" value={form.email} onChange={handleChange("email")} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div ref={registerField}>
                  <Label>Phone Number</Label>
                  <Input type="tel" placeholder="+91 _" value={form.phone} onChange={handleChange("phone")} />
                </div>
                <div ref={registerField}>
                  <Label>Department of Interest</Label>
                  <select
                    required
                    value={form.department}
                    onChange={handleChange("department")}
                    className="w-full relative appearance-none border border-black/5 bg-[#FCF8F2] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%23999%22><path d=%22M5.5 7.5l4.5 4.5 4.5-4.5%22 stroke=%22%23999%22 stroke-width=%221.5%22 fill=%22none%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-[#2b2b2b] outline-none focus:border-[#C4321B]"
                  >
                    <option value="" disabled></option>
                    {DEPARTMENTS.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div ref={registerField}>
                  <Label>Years of Experience</Label>
                  <Input placeholder="e.g. 5" value={form.experience} onChange={handleChange("experience")} />
                </div>
                <div ref={registerField}>
                  <Label>Preferred Location</Label>
                  <Input placeholder="City, Country" value={form.location} onChange={handleChange("location")} />
                </div>
              </div>

              <div ref={registerField}>
                <Label>LinkedIn Profile</Label>
                <Input placeholder="https://linkedin.com/in/_" value={form.linkedin} onChange={handleChange("linkedin")} />
              </div>

              <div ref={registerField}>
                <Label>Upload Resume</Label>
                <label
                  ref={dropzoneRef}
                  onDragEnter={onDragEnter}
                  onDragOver={(e) => e.preventDefault()}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  className={`flex h-32 cursor-pointer flex-col items-center justify-center border transition-colors ${
                    isDragging
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
                    <span className="text-[10px] font-bold tracking-widest text-[#9a9a9a] uppercase">
                      Choose file or drag and drop
                    </span>
                  )}
                </label>
              </div>

              <div className="flex flex-col items-start justify-between gap-6 pt-8 sm:flex-row sm:items-center">
                <p className="max-w-xs text-[10px] leading-relaxed text-[#8a8a8a]">
                  By submitting, you agree to our privacy policy and consent to
                  being contacted about future opportunities.
                </p>

                <button
                  type="submit"
                  className="bg-[#C4321B] text-white px-8 py-3.5 text-xs font-bold tracking-widest hover:bg-[#a02816] transition-colors flex items-center gap-2 uppercase shrink-0"
                >
                  REGISTER <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
    </section>
  );
}

function Label({ children }) {
  return (
    <label className="mb-2 block text-[10px] font-bold tracking-widest text-[#8a8a8a] uppercase">
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full border border-black/5 bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#C4321B]"
    />
  );
}