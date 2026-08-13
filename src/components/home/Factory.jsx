import React from 'react'

const Factory = () => {
  return (
    <div className='w-full aspect-video max-sm:h-[50vh] overflow-hidden flex bg-black relative'>
      <video muted loop autoPlay src={`/videos/Factory.mp4`} className='w-full h-full object-cover object-center brightness-75'></video>
      <div className='uppercase absolute! container flex items-center max-w-4xl! text-white '>
        <h2 data-para-effect>
          A look inside our factories and offices hygiene, precision and consistency at every stage.
        </h2>
      </div>
    </div>
  )
}

export default Factory
