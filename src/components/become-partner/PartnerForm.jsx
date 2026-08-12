"use client";

import { useEffect, useRef, useState } from "react";
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

    let fieldIndex = 0;
    const registerField = (el) => {
        if (el) {
            fieldRefs.current[fieldIndex] = el;
            fieldIndex += 1;
        }
    };

    return (
        <section ref={sectionRef} className="bg-white  overflow-hidden py-10 px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1  lg:grid-cols-2">
                {/* Left column */}
                <div ref={leftRef} className=" h-[50vh] md:h-full overflow-hidden">
                    <Image
                        fill
                        src="/images/partner/contact_img.png"
                        alt="Workers"
                        className="w-full h-full object-cover "
                    />
                </div>

                {/* Right column — form */}
                <div className="pl-6 sm:pl-10 lg:pl-12 xl:pl-16 ">
                    <h2 className="Heading_1  font-extrabold uppercase leading-tight tracking-tightmb-3">
                        APPLICATION FORM
                    </h2>
                    <p className="Paragraph_Medium text-sm leading-relaxed text-[#6b6b6b] mb-10 max-w-xl">
                        Please fill in your details and our team will get in touch with you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div ref={registerField}>
                                <Label>Full Name</Label>
                                <Input required placeholder="e.g. Rahul Sharma" value={form.fullName} onChange={handleChange("fullName")} />
                            </div>
                            <div ref={registerField}>
                                <Label>Business Name</Label>
                                <Input required placeholder="e.g. Sharma Enterprises" value={form.businessName} onChange={handleChange("businessName")} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div ref={registerField}>
                                <Label>Current Business Type</Label>
                                <select
                                    required
                                    value={form.businessType}
                                    onChange={handleChange("businessType")}
                                    className="w-full relative appearance-none border border-[#EADCC8] bg-[#FCF8F2] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%23999%22><path d=%22M5.5 7.5l4.5 4.5 4.5-4.5%22 stroke=%22%23999%22 stroke-width=%221.5%22 fill=%22none%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>')] bg-[length:16px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 text-sm text-[#2b2b2b] outline-none focus:border-[#e41e26]"
                                >
                                    <option value="" disabled></option>
                                    <option value="retail">Retail</option>
                                    <option value="wholesale">Wholesale</option>
                                    <option value="distributor">Distributor</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div ref={registerField}>
                                <Label>City / State</Label>
                                <Input placeholder="e.g. Mumbai, Maharashtra" value={form.location} onChange={handleChange("location")} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div ref={registerField}>
                                <Label>Phone Number</Label>
                                <Input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange("phone")} />
                            </div>
                            <div ref={registerField}>
                                <Label>Email Address</Label>
                                <Input required type="email" placeholder="rahul@example.com" value={form.email} onChange={handleChange("email")} />
                            </div>
                        </div>

                        <div ref={registerField}>
                            <Label>Message / Remarks</Label>
                            <textarea
                                required
                                placeholder="Tell us more about your interest..."
                                value={form.message}
                                onChange={handleChange("message")}
                                className="w-full h-32 resize-none border border-[#EADCC8] bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#e41e26]"
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
            className="w-full border border-[#EADCC8] bg-[#FCF8F2] px-4 py-3 text-sm text-[#2b2b2b] placeholder-[#a9a9a9] outline-none focus:border-[#e41e26]"
        />
    );
}