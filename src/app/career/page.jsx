import { createPageMetadata } from "@/lib/seo";
import PageHero from "@/components/common/PageHero";
import WhyPartnerWithUs from "@/components/carrer/Whypartnerwithus";
import WorkWithUs from "@/components/carrer/WorkWithUs";
import SevenSection from "@/components/home/SevenSection";
import React from "react";

const page = () => {
  return (
    <>
      <PageHero
        title={<>Build Your Career <br className="max-sm:hidden"/> With ESFL</>}
        description="Join a team that's shaping the future of food manufacturing — where craft, technology and three decades of flavour heritage meet."
        video="/videos/career.mp4"
      />
      <WhyPartnerWithUs />
      <WorkWithUs />
      <SevenSection />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return createPageMetadata("/carrer");
}
