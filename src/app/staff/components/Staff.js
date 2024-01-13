import Image from 'next/image'
import React from 'react'

const Staff = (props) => {
  return (
    <div className='w-11/12 mx-auto flex bg-slate-50 p-4 gap-4 mb-8'>
      <div className='w-1/2'>
        <Image src={props.src} alt="photo" width={300} height={400} className="h-auto w-full" />
      </div>
      <div className='w-1/2'>
        <h3 className='text-2xl'>{props.name}</h3>
        <p className=''>{props.p}</p>
        <p className='text-xs mt-4'>{props.dis}</p>
      </div>
    </div>
  )
}

export default Staff