import CH from "@/components/carrer/CH";
import CurrentOpenings from "@/components/carrer/Currentopenings";
import InfiniteScroller from "@/components/carrer/InfiniteScroller";
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
      <InfiniteScroller/>
      <RegisterInterest />
      <CurrentOpenings />
      <SevenSection />
    </>
  );
};

export default page;
