import { createPageMetadata } from "@/lib/seo";
import SevenSection from '@/components/home/SevenSection'
import ILH from '@/components/investor-login/ILH'
import InvestorLogin from '@/components/investor-login/InvestorLogin'
import InvestorResources from '@/components/investor-login/InvestorResources'
import React from 'react'
import PageLoadAnimation from '@/components/common/PageLoadAnimation'

const page = () => {
  return (
    <>     
      <InvestorLogin />
      <InvestorResources/>
      <SevenSection />
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/investor-login");
}
