import SevenSection from '@/components/home/SevenSection'
import Certifications from '@/components/our-process/Certifications'
import ManufacturingJourney from '@/components/our-process/ManufacturingJourney'
import OuHero from '@/components/our-process/OuHero'
import QualityControl from '@/components/our-process/QualityControl'
import ResearchDevelopment from '@/components/our-process/ResearchDevelopment'
import SustainabilitySafety from '@/components/our-process/SustainabilitySafety'
import React from 'react'

const page = () => {
  return (
    <>
      <OuHero />
      <ManufacturingJourney />
      <Certifications />
      <ResearchDevelopment />
      <QualityControl />
      <SustainabilitySafety />

      <SevenSection />
    </>
  )
}

export default page
