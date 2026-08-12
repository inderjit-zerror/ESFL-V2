import CsrHero from '@/components/csr/CsrHero'
import Philosophy from '@/components/csr/Philosophy'
import CsrProjects from '@/components/csr/CsrProjects'
import CsrVision from '@/components/csr/CsrVision'
import SevenSection from '@/components/home/SevenSection'
import React from 'react'
import LeadershipSection from '@/components/about/LeadershipSection'

const page = () => {
  return (
    <div>
        <CsrHero/>
        <Philosophy/>
        <CsrProjects/>
        <CsrVision/>
              <LeadershipSection />
      <SevenSection />
    </div>
  )
}

export default page