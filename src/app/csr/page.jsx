import PageHero from '@/components/common/PageHero'
import Philosophy from '@/components/csr/Philosophy'
import CsrProjects from '@/components/csr/CsrProjects'
import CsrVision from '@/components/csr/CsrVision'
import SevenSection from '@/components/home/SevenSection'
import React from 'react'
import LeadershipSection from '@/components/about/LeadershipSection'

const page = () => {
  return (
    <div>
      <PageHero
        title={<>Corporate Social <br /> Responsibility</>}
        description="Growing with the communities that grow our spices — education, health, environment and dignified livelihoods."
        videoSrc="/videos/social.mp4"
      />
      <Philosophy/>
      <CsrProjects/>
      <CsrVision/>
      <LeadershipSection />
      <SevenSection />
    </div>
  )
}

export default page