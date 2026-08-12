import React from 'react'

const Factory = () => {
  return (
    <div className='w-full aspect-video max-sm:h-svh overflow-hidden flex bg-black relative'>
      <video muted loop autoPlay src={`/videos/Factory.mp4`} className='w-full h-full object-cover object-center'></video>
      <div className='w-full h-full absolute top-0 left-0 z-20 bg-black/30 p-5 sm:px-10 sm:pt-30'>
        <h1 className='Heading_1 max-sm:text-[1.5rem]! max-sm:leading-[1.5rem]! uppercase HNM_FONT text-white '>
            A look inside our factories <br/> and offices hygiene, precision <br/> and consistency at <br/> every stage.
        </h1>
      </div>
    </div>
  )
}

export default Factory
