import Image from 'next/image'
import React from 'react'

const Staff = (props) => {
  return (
    <div className='w-11/12 lg:w-[30%] mx-auto md:mx-4 flex bg-slate-50 p-4 gap-4 mb-8'>
      <div className='w-1/2'>
        <Image src={props.src} alt="photo" width={300} height={400} className="h-auto w-full" />
      </div>
      <div className='w-1/2'>
        <h3 className='text-2xl md:text-3xl lg:text-xl xl:text-3xl'>{props.name}</h3>
        <p className='text-lg md:text-xl lg:text-lg xl:text-xl'>{props.p}</p>
        <p className='text-xs md:text-lg lg:text-xs xl:text-xl mt-4'>{props.dis}</p>
      </div>
    </div>
  )
}

export default Staff