"use client";

import React, { useState } from "react";
import { Label, Input, Textarea, DragDrop } from "../common/FormFields";
import BTN from "../common/BTN";
import { CheckCircle2 } from "lucide-react";

export default function WorkWithUs() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      console.log("Unsolicited CV Submitted:", { ...form, file });
    }, 800);
  };

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const target = document.getElementById("unsolicited-form");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      document.getElementById("firstName")?.focus();
    }
  };

  return (
    <section className="bg-[#E30713] relative py-12 md:py-24 text-white overflow-hidden">
      <div className="pattern_bg"></div>

      <div className="container relative z-10 md:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: WORK WITH US */}
          <div className="flex flex-col lg:pr-12">
            <h2
              data-para-effect
              className="uppercase text-white mb-4"
            >
              WORK WITH US
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-white/90 text-sm sm:text-base  mt-2">
              <p>
                Work and life in general, is about discovering oneself, realising one&apos;s true potential. At ESFL we are like a large family of dedicated and diverse people. The participative work culture at ESFL encourages employees to think like intrapreneurs and strive towards self-actualisation.
              </p>
              <p>
                We are one of India&apos;s most loved spices and condiments company and are on the way to becoming India&apos;s largest spices and condiments company! Come join us. Be a part of the ESFL family and play your role in adding spice to the everyday lives of people – scripting your own success story in the process.
              </p>
            </div>

            {/* Action Links */}
            <div className="mt-8 space-y-3 pt-2">
              <p className="text-white text-base sm:text-lg ">
                To apply for current job vacancies{" "}
                <a
                target="_blank"
                  href="https://esfl.officenet.in/Current_Job_Vacancy/"
                  
                  className="text-[#F5C451] hover:text-white underline  cursor-pointer transition-colors"
                >
                  click here
                </a>
              </p>
              <p className="text-white text-base sm:text-lg ">
                Join us &amp; unlock your future opportunities{" "}
                <a
                target="_blank"
                  href="https://esfl.officenet.in/Current_Job_Vacancy/TalentPoolAddCandidate.aspx"
                  
                  className="text-[#F5C451] hover:text-white underline  cursor-pointer transition-colors"
                >
                  click here
                </a>
              </p>
            </div>
          </div>

          {/* Right Column: UNSOLICITED CV SUBMISSION */}
          <div className="flex flex-col">
            <h2
              data-para-effect
              className="uppercase text-white mb-4"
            >
              UNSOLICITED CV SUBMISSION
            </h2>

            {/* Form */}
            {status === "sent" ? (
              <div className="mt-4 rounded-xl bg-white/10 border border-white/20 p-8 text-center backdrop-blur-sm">
                <CheckCircle2 className="w-12 h-12 text-[#F5C451] mx-auto mb-3" />
                <h4 className="text-xl  uppercase text-white mb-2">
                  Thank You for Your Submission!
                </h4>
                <p className="text-white/80 text-sm max-w-md mx-auto mb-6">
                  We have received your CV. Our recruitment team will review your profile and reach out if a matching opportunity opens.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setForm({
                      firstName: "",
                      lastName: "",
                      phone: "",
                      email: "",
                      message: "",
                    });
                    setFile(null);
                  }}
                  className="px-6 py-2 bg-white text-[#E30713] rounded-md font-semibold text-sm hover:bg-[#F5C451] hover:text-black transition-colors"
                >
                  Submit Another CV
                </button>
              </div>
            ) : (
              <form
                id="unsolicited-form"
                onSubmit={handleSubmit}
                className="space-y-4 mt-2"
              >
                {/* 2x2 Input Grid */}
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">
                      First Name <span className="text-[#ffffff]">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      required
                      placeholder="Enter your first name"
                      value={form.firstName}
                      onChange={handleChange("firstName")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">
                      Last Name <span className="text-[#ffffff]">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      required
                      placeholder="Enter your last name"
                      value={form.lastName}
                      onChange={handleChange("lastName")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone <span className="text-[#ffffff]">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+91 ________"
                      value={form.phone}
                      onChange={handleChange("phone")}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email <span className="text-[#ffffff]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={handleChange("email")}
                    />
                  </div>
                </div>

                {/* Upload Resume / DragDrop */}
                <div>
                  <Label className="text-white">Upload Resume</Label>
                  <DragDrop
                    file={file}
                    className="!px-3 !py-2.5 !min-h-0 [&>div]:!flex-row [&>div]:!space-y-0 [&>div]:gap-2 [&_svg]:!w-5 [&_svg]:!h-5 [&_svg]:!mb-0 [&_p]:!text-xs [&>div>p:last-child]:!hidden"
                    onFileChange={(selectedFile) => setFile(selectedFile)}
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Enter your message or queries"
                    value={form.message}
                    onChange={handleChange("message")}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <BTN
                    txt={status === "sending" ? "Submitting..." : "Submit"}
                    variant="B2"
                  />                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
