"use client";

import React, { useState, useRef } from "react";
import { Label, Input, Select, Textarea } from "../common/FormFields";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import BTN from "../common/BTN";
import Image from "next/image";

export default function PartnerForm() {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const fieldRefs = useRef([]);

    const [form, setForm] = useState({
        fullName: "",
        businessName: "",
        businessType: "",
        location: "",
        phone: "",
        email: "",
        message: "",
    });

    const handleChange = (field) => (e) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Application Form submission:", form);
    };


    let fieldIndex = 0;
    const registerField = (el) => {
        if (el) {
            fieldRefs.current[fieldIndex] = el;
            fieldIndex += 1;
        }
    };

    return (
        <section ref={sectionRef} className="  overflow-hidden container   py-12 md:py-24  border-b border-black/50">
            <div className="grid grid-cols-1  md:grid-cols-2">
                {/* Left column */}
                <div ref={leftRef} className=" max-sm:aspect-square rounded-md relative md:h-full overflow-hidden">
                    <Image
                        fill
                        src="/images/partner/contact_img.png"
                        alt="Workers"
                        className="w-full h-full object-cover "
                    />
                </div>

                {/* Right column — form */}
                <div className="max-sm:pt-5 sm:pl-10 md:pl-12 xl:pl-16 ">
                    <h2 data-para-effect className="     uppercase mb-2">
                        APPLICATION FORM
                    </h2>
                    <p className=" mb-5">
                        Please fill in your details and our team will get in touch with you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-3 grid-cols-2">
                            <div ref={registerField}>
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" required placeholder="e.g. Rahul Sharma" value={form.fullName} onChange={handleChange("fullName")} />
                            </div>
                            <div ref={registerField}>
                                <Label htmlFor="businessName">Business Name</Label>
                                <Input id="businessName" required placeholder="e.g. Sharma Enterprises" value={form.businessName} onChange={handleChange("businessName")} />
                            </div>
                        </div>

                        <div className="grid gap-3 grid-cols-2">
                            <div ref={registerField}>
                                <Label htmlFor="businessType">Current Business Type</Label>
                                <Select
                                    id="businessType"
                                    required
                                    aria-label="Current Business Type"
                                    label="Business Type"
                                    value={form.businessType}
                                    onChange={handleChange("businessType")}
                                >
                                    <option value="retail">Retail</option>
                                    <option value="wholesale">Wholesale</option>
                                    <option value="distributor">Distributor</option>
                                    <option value="other">Other</option>
                                </Select>
                            </div>
                            <div ref={registerField}>
                                <Label htmlFor="location">City / State</Label>
                                <Input id="location" placeholder="e.g. Mumbai, Maharashtra" value={form.location} onChange={handleChange("location")} />
                            </div>
                        </div>

                        <div className="grid gap-3 grid-cols-2">
                            <div ref={registerField}>
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange("phone")} />
                            </div>
                            <div ref={registerField}>
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" required type="email" placeholder="rahul@example.com" value={form.email} onChange={handleChange("email")} />
                            </div>
                        </div>

                        <div ref={registerField}>
                            <Label htmlFor="message">Message / Remarks</Label>
                            <Textarea
                                id="message"
                                required
                                placeholder="Tell us more about your interest..."
                                value={form.message}
                                onChange={handleChange("message")}
                            />
                        </div>

                        <div className="flex flex-col items-start pt-4">
                            <BTN txt={`Submit Application`} variant="B1" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

