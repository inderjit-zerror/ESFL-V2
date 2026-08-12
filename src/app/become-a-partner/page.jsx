import PartnerForm from '@/components/become-partner/PartnerForm'
import PartnerHero from '@/components/become-partner/PartnerHero'
import WhyPartner from '@/components/become-partner/WhyPartner'
import SevenSection from '@/components/home/SevenSection'
import React from 'react'

const page = () => {
  return (
    <>
        <PartnerHero/>
        <WhyPartner/>
        <PartnerForm/>
      <SevenSection />
    </>
  )
}

export default page