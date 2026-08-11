import React from 'react'

const Hero = () => {
  return (
    <div data-page-load-hero className='w-full aspect-square sm:h-svh overflow-hidden flex bg-black'>
      <video data-page-load-media muted loop autoPlay src={`/videos/HH1.mp4`} className='w-full h-full object-cover object-center'></video>
    </div>
  )
}

export default Hero
