"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowRight, FileText, X } from "lucide-react";
import BTN from "../common/BTN";

// -----------------------------------------------------------------------
// Edit these to change the dropdown options / contact details.
// -----------------------------------------------------------------------
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
    department: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
    // Wire this up to your API route / form handler.
    console.log("Register Your Interest submission:", { ...form, file });
  };

  // ---------------------------------------------------------------------
  // Entrance animation: left column fades in, form fields stagger in.
  // ---------------------------------------------------------------------
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.from(leftRef.current.children, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.08,
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

  // ---------------------------------------------------------------------
  // Drag-and-drop resume upload with a small GSAP "pop" on drag enter.
  // ---------------------------------------------------------------------
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
    fieldRefs.current[fieldIndex] = el;
    fieldIndex += 1;
  };

  return (
    <section ref={sectionRef} className="bg-[#FBF1E6] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div ref={leftRef}>
          <p className="text-xs font-bold tracking-[0.2em] text-[#C4321B]">
            TALENT COMMUNITY
          </p>
          <h2 className="mt-3 Heading_1 text-4xl font-extrabold leading-tight tracking-tight text-[#2b2b2b] sm:text-5xl">
            Register Your
            <br />
            Interest
          </h2>
          <p className="mt-6 max-w-sm Paragraph_Medium  text-sm leading-relaxed text-[#6b6b6b]">
            Don&apos;t see the right role? Share your details once and we&apos;ll
            notify you the moment a matching opportunity opens. Or, if
            you&apos;d rather talk to us directly:
          </p>

          <p className="mt-6 text-sm Paragraph_Medium text-[#2b2b2b]">
            <span className="font-bold">Tel. </span>
            <a href="tel:+912532345678" className="text-[#2b2b2b] hover:text-[#C4321B]">
              +91 253 234 5678
            </a>
          </p>

          <div className="mt-10 text-sm Paragraph_Medium text-[#2b2b2b]">
            <p className="font-bold">EMPIRE SPICES &amp; FOODS LTD.</p>
            <p className="mt-2 leading-relaxed text-[#6b6b6b]">
              Gut No. 148, Musalgaon MIDC
              <br />
              Sinnar, Nashik 422103, Maharashtra
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-sm text-[#2b2b2b] underline underline-offset-2"
            >
              How to reach us
            </a>
          </div>
        </div>

        {/* Right column — form */}
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div ref={registerField}>
            <Label>Department of Interest*</Label>
            <select
              required
              value={form.department}
              onChange={handleChange("department")}
              className="w-full appearance-none rounded-md border border-black/10 bg-white bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%23999%22><path d=%22M5.5 7.5l4.5 4.5 4.5-4.5%22 stroke=%22%23999%22 stroke-width=%221.5%22 fill=%22none%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-[#2b2b2b] outline-none focus:border-[#C4321B]"
            >
              <option value="" disabled>
                Select a department
              </option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div ref={registerField}>
              <Label>First Name*</Label>
              <Input required value={form.firstName} onChange={handleChange("firstName")} />
            </div>
            <div ref={registerField}>
              <Label>Last Name*</Label>
              <Input required value={form.lastName} onChange={handleChange("lastName")} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div ref={registerField}>
              <Label>E-mail*</Label>
              <Input required type="email" value={form.email} onChange={handleChange("email")} />
            </div>
            <div ref={registerField}>
              <Label>Phone</Label>
              <Input type="tel" value={form.phone} onChange={handleChange("phone")} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div ref={registerField}>
              <Label>Years of Experience</Label>
              <Input value={form.experience} onChange={handleChange("experience")} />
            </div>
            <div ref={registerField}>
              <Label>Preferred Location</Label>
              <Input value={form.location} onChange={handleChange("location")} />
            </div>
          </div>

          <div ref={registerField}>
            <Label>LinkedIn Profile</Label>
            <Input value={form.linkedin} onChange={handleChange("linkedin")} />
          </div>

          <div ref={registerField}>
            <Label>Upload Resume</Label>
            <label
              ref={dropzoneRef}
              onDragEnter={onDragEnter}
              onDragOver={(e) => e.preventDefault()}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              className={`flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border text-center transition-colors ${
                isDragging
                  ? "border-[#C4321B] bg-[#C4321B]/5"
                  : "border-black/10 bg-white"
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
                <span className="text-xs font-medium tracking-wide text-[#9a9a9a]">
                  CHOOSE FILE OR DRAG AND DROP
                </span>
              )}
            </label>
          </div>

          <div className="flex flex-col-reverse items-start justify-between gap-6 pt-4 sm:flex-row sm:items-center">
            <p className="max-w-xs text-xs leading-relaxed text-[#8a8a8a]">
              By submitting, you agree to our privacy policy and consent to
              being contacted about future opportunities.
            </p>

            <BTN txt={`REGISTER`} />
            
          </div>
        </form>
      </div>
    </section>
  );
}

function Label({ children }) {
  return (
    <label className="mb-2 block text-[10px] font-bold tracking-[0.1em] text-[#8a8a8a]">
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-md border border-black/10 bg-white px-4 py-3 text-sm text-[#2b2b2b] outline-none focus:border-[#C4321B]"
    />
  );
}