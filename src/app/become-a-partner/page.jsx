import { createPageMetadata } from "@/lib/seo";
import PartnerForm from '@/components/become-partner/PartnerForm'
import PageHero from '@/components/common/PageHero'
import WhyPartner from '@/components/become-partner/WhyPartner'
import SevenSection from '@/components/home/SevenSection'
import React from 'react'

const page = () => {
  return (
    <>
      <PageHero 
        title={<>Become a Channel <br /> Partner</>} 
        description="Join India's leading spice and food network. Partner with ESFL to bring quality, heritage and taste to millions of kitchens across the globe."
        video="/videos/partner.mp4"
      />
      {/* <WhyPartner/> */}
      <PartnerForm/>
      <SevenSection />
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/become-a-partner");
}