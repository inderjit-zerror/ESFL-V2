import { createPageMetadata } from "@/lib/seo";
import SevenSection from '@/components/home/SevenSection'
import Certifications from '@/components/our-process/Certifications'
import ManufacturingJourney from '@/components/our-process/ManufacturingJourney'
import OuHero from '@/components/our-process/OuHero'
import ResearchAndQuality from '@/components/our-process/ResearchAndQuality'
import SustainabilitySafety from '@/components/our-process/SustainabilitySafety'
import React from 'react'
import PageLoadAnimation from '@/components/common/PageLoadAnimation'
import PageHero from '@/components/common/PageHero'

const page = () => {
  return (
    <>
      <PageHero
        title=" Our Process"
        description="A look inside our factories hygiene, precision and consistency from raw material intake to the sealed pack."
        videoSrc="/videos/process.mp4"
      />

      <ManufacturingJourney />
      <Certifications />
      <ResearchAndQuality />
      <SustainabilitySafety />
      <SevenSection />
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/our-process");
}
