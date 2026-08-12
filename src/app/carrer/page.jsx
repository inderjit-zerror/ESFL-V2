import CH from "@/components/carrer/CH";
import CurrentOpenings from "@/components/carrer/Currentopenings";
import LifeAtESFL from "@/components/carrer/Lifeatesfl";
import RegisterInterest from "@/components/carrer/Registerinterest";
import WhyPartnerWithUs from "@/components/carrer/Whypartnerwithus";
import SevenSection from "@/components/home/SevenSection";
import React from "react";

const page = () => {
  return (
    <>
      <CH />
      <WhyPartnerWithUs />
      <CurrentOpenings />
      <RegisterInterest />
      <LifeAtESFL />
      <SevenSection />
    </>
  );
};

export default page;
