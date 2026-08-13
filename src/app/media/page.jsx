import MediaHero from '@/components/media/MediaHero'
import Campaigns from '@/components/media/Campaigns'
import React from 'react'
import SevenSection from '@/components/home/SevenSection'
import VideoSection from '@/components/media/VideoSection'
import PhotoGallery from '@/components/media/PhotoGallery'

const page = () => {
  return (
    <>
      <Campaigns/>
      <VideoSection/>
      <PhotoGallery/>
      <SevenSection />
    </>
  )
}

export default page