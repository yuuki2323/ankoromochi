import Image from 'next/image'
import React from 'react'

const Staff = (props) => {
  return (
    <div className='w-11/12 mx-auto flex bg-slate-50 p-4 gap-4'>
      <div className='w-1/2'>
        <Image src={props.src} alt="photo" width={300} height={400} className="h-auto w-full" />
      </div>
      <div>
        <h3 className='text-xl'>{props.name}</h3>
        <p>{props.p}</p>
      </div>
    </div>
  )
}

export default Staff