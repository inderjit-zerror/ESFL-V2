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
        applyFor: "",
        fullName: "",
        occupation: "",
        businessType: "",
        dealingIn: "",
        businessName: "",
        businessLocation: "",
        productsBrands: "",
        marketCoverage: "",
        warehouseGodown: "",
        warehouseArea: "",
        approxTurnover: "",
        investmentCapacity: "",
        validDocuments: "",
        manpowerStrength: "",
        vehicleAvailable: "",
        vehicleType: "",
        vehicleCapacity: "",
        numberOfVehicles: "",
        phone: "",
        email: "",
        convenientTime: "",
        proposalQuery: "",
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

    const isBusinessOccupation = form.occupation === "Business";
    const isDistributionBusiness = ["Distributorship/Stockist", "Super Stockist"].includes(form.applyFor);

    return (
        <section ref={sectionRef} className="overflow-hidden container py-12 md:py-24 border-b border-black/50">

                <div className="md:max-w-5xl mx-auto">
                    <h2 data-para-effect className="uppercase mb-2 md:text-center">
                        APPLICATION FORM
                    </h2>
                    <p className="mb-5 md:text-center">
                        Please fill in your details and our team will get in touch with you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="grid pt-8 md:pt-16 grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6">
                        <div ref={registerField}>
                            <Label htmlFor="applyFor">1. What do you want to apply for?</Label>
                            <Select
                                id="applyFor"
                                required
                                aria-label="Apply For"
                                label="Apply For"
                                value={form.applyFor}
                                onChange={handleChange("applyFor")}
                            >
                                <option value="Distributorship/Stockist"> Distributorship/Stockist</option>
                                <option value="Super Stockist"> Super Stockist</option>
                                <option value="Retailer"> Retailer</option>
                                <option value="Wholesaler"> Wholesaler</option>
                                <option value="C&F Agent"> C&F Agent</option>
                            </Select>
                        </div>

                        <div ref={registerField} className="">
                            <Label htmlFor="occupation">3. Your Occupation</Label>
                            <Select
                                id="occupation"
                                required
                                aria-label="Occupation"
                                label="Occupation"
                                value={form.occupation}
                                onChange={handleChange("occupation")}
                            >
                                <option value="Service">Service</option>
                                <option value="Business">Business</option>
                                <option value="Self-employed">Self-employed</option>
                                <option value="Unemployed">Unemployed</option>
                            </Select>
                        </div>
                        <div ref={registerField}>
                            <Label htmlFor="fullName">2. Your Name</Label>
                            <Input id="fullName" required placeholder="e.g. Rahul Sharma" value={form.fullName} onChange={handleChange("fullName")} />
                        </div>
                        <div ref={registerField}>
                            <Label htmlFor="email">6. Email ID</Label>
                            <Input id="email" required type="email" placeholder="rahul@example.com" value={form.email} onChange={handleChange("email")} />
                        </div>



                        {isBusinessOccupation && (
                            <div className="md:col-span-2 space-y-6 p-4 border border-black/10 rounded-md bg-black/5">
                                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                    <div ref={registerField}>
                                        <Label htmlFor="businessType">Type of business</Label>
                                        <Input id="businessType" placeholder="e.g. Retail" value={form.businessType} onChange={handleChange("businessType")} />
                                    </div>
                                    <div ref={registerField}>
                                        <Label htmlFor="dealingIn">Dealing in</Label>
                                        <Input id="dealingIn" placeholder="e.g. FMCG" value={form.dealingIn} onChange={handleChange("dealingIn")} />
                                    </div>
                                </div>
                                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                    <div ref={registerField}>
                                        <Label htmlFor="businessName">Name of business</Label>
                                        <Input id="businessName" placeholder="e.g. Sharma Enterprises" value={form.businessName} onChange={handleChange("businessName")} />
                                    </div>
                                    <div ref={registerField}>
                                        <Label htmlFor="businessLocation">Location of business</Label>
                                        <Input id="businessLocation" placeholder="e.g. Mumbai, Maharashtra" value={form.businessLocation} onChange={handleChange("businessLocation")} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {isDistributionBusiness && (
                            <div className="md:col-span-2 space-y-6 p-4 border border-black/10 rounded-md bg-black/5">
                                <Label className="!text-sm font-semibold !opacity-100 mb-4 block">
                                    4. Distribution/SS/Stockist Business Details
                                </Label>

                                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                    <div ref={registerField}>
                                        <Label htmlFor="productsBrands">Products / Brands Dealing In</Label>
                                        <Input id="productsBrands" placeholder="e.g. Brand A, Brand B" value={form.productsBrands} onChange={handleChange("productsBrands")} />
                                    </div>
                                    <div ref={registerField}>
                                        <Label htmlFor="marketCoverage">Market Coverage</Label>
                                        <Input id="marketCoverage" placeholder="e.g. North Mumbai" value={form.marketCoverage} onChange={handleChange("marketCoverage")} />
                                    </div>
                                </div>

                                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                    <div ref={registerField}>
                                        <Label htmlFor="warehouseGodown">Warehouse/Godown</Label>
                                        <Select
                                            id="warehouseGodown"
                                            aria-label="Warehouse/Godown"
                                            label="Warehouse/Godown"
                                            value={form.warehouseGodown}
                                            onChange={handleChange("warehouseGodown")}
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Select>
                                    </div>
                                    {form.warehouseGodown === "Yes" && (
                                        <div ref={registerField}>
                                            <Label htmlFor="warehouseArea">Area in sq feet</Label>
                                            <Input id="warehouseArea" placeholder="e.g. 1000" value={form.warehouseArea} onChange={handleChange("warehouseArea")} />
                                        </div>
                                    )}
                                </div>

                                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                    <div ref={registerField}>
                                        <Label htmlFor="approxTurnover">Approx Turnover (Last Year Amount)</Label>
                                        <Input id="approxTurnover" placeholder="e.g. 50 Lakhs" value={form.approxTurnover} onChange={handleChange("approxTurnover")} />
                                    </div>
                                    <div ref={registerField}>
                                        <Label htmlFor="investmentCapacity">Investment Capacity (Max Amount)</Label>
                                        <Input id="investmentCapacity" placeholder="e.g. 20 Lakhs" value={form.investmentCapacity} onChange={handleChange("investmentCapacity")} />
                                    </div>
                                </div>

                                <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                    <div ref={registerField}>
                                        <Label htmlFor="validDocuments">Valid GST, PAN, FSSAI</Label>
                                        <Select
                                            id="validDocuments"
                                            aria-label="Valid Documents"
                                            label="Yes/No"
                                            value={form.validDocuments}
                                            onChange={handleChange("validDocuments")}
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </Select>
                                    </div>
                                    <div ref={registerField}>
                                        <Label htmlFor="manpowerStrength">Manpower Strength (No. of Staff)</Label>
                                        <Input id="manpowerStrength" type="number" placeholder="e.g. 15" value={form.manpowerStrength} onChange={handleChange("manpowerStrength")} />
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <Label className="!opacity-100 font-medium mb-3 block">Transport Vehicle Details</Label>
                                    <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                                        <div ref={registerField}>
                                            <Label htmlFor="vehicleAvailable">Vehicle Available</Label>
                                            <Select
                                                id="vehicleAvailable"
                                                aria-label="Vehicle Available"
                                                label="Yes/No"
                                                value={form.vehicleAvailable}
                                                onChange={handleChange("vehicleAvailable")}
                                            >
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </Select>
                                        </div>
                                        {form.vehicleAvailable === "Yes" && (
                                            <div ref={registerField}>
                                                <Label htmlFor="vehicleType">Vehicle Type</Label>
                                                <Input id="vehicleType" placeholder="e.g. Tempo" value={form.vehicleType} onChange={handleChange("vehicleType")} />
                                            </div>
                                        )}
                                    </div>
                                    {form.vehicleAvailable === "Yes" && (
                                        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 mt-3">
                                            <div ref={registerField}>
                                                <Label htmlFor="vehicleCapacity">Vehicle Capacity</Label>
                                                <Input id="vehicleCapacity" placeholder="e.g. 1 Ton" value={form.vehicleCapacity} onChange={handleChange("vehicleCapacity")} />
                                            </div>
                                            <div ref={registerField}>
                                                <Label htmlFor="numberOfVehicles">Number of Vehicles</Label>
                                                <Input id="numberOfVehicles" type="number" placeholder="e.g. 2" value={form.numberOfVehicles} onChange={handleChange("numberOfVehicles")} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        <div ref={registerField}>
                            <Label htmlFor="phone">5. Your contact no.</Label>
                            <Input id="phone" required type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={handleChange("phone")} />
                        </div>


                        <div ref={registerField} className="">
                            <Label htmlFor="convenientTime">7. Convenient time to contact you</Label>
                            <Input id="convenientTime" placeholder="e.g. 10 AM to 2 PM" value={form.convenientTime} onChange={handleChange("convenientTime")} />
                        </div>

                        <div ref={registerField} className="md:col-span-2">
                            <Label htmlFor="proposalQuery">8. Your proposal/query</Label>
                            <Textarea
                                id="proposalQuery"
                                required
                                placeholder="Tell us more about your interest..."
                                value={form.proposalQuery}
                                onChange={handleChange("proposalQuery")}
                            />
                        </div>

                        <div className="flex flex-col items-start md:items-center pt-4 md:col-span-2">
                            <BTN txt={`Submit Application`} variant="B1" />
                        </div>
                    </form>
                </div>
        </section>
    );
}


