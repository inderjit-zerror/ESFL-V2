import PageHero from "@/components/common/PageHero";
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
      <PageHero
        title="Build Your Career With ESFL"
        description="Join a team that's shaping the future of food manufacturing — where craft, technology and three decades of flavour heritage meet."
        video="/videos/career.mp4"
        buttonText="Explore Opportunities"
      />
      <WhyPartnerWithUs />
      <InfiniteScroller/>
      <CurrentOpenings />
      <RegisterInterest />
      <SevenSection />
    </>
  );
};

export default page;
