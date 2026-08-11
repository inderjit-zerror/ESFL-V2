import SevenSection from '@/components/home/SevenSection'
import ILH from '@/components/investor-login/ILH'
import InvestorLogin from '@/components/investor-login/InvestorLogin'
import InvestorResources from '@/components/investor-login/InvestorResources'
import React from 'react'
import PageLoadAnimation from '@/components/common/PageLoadAnimation'

const page = () => {
  return (
    <>
     
       <ILH />
     
      <InvestorLogin />
      <InvestorResources/>
      <SevenSection />
    </>
  )
}

export default page
