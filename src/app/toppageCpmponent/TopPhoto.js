import Image from 'next/image'
import React from 'react'
import src from "/public/topphoto.jpg"
import SumahoPhoto from './topUI/SumahoPhoto'
const TopPhoto = () => {
 
  return (
    <div >
            
      <Image src={src} alt="topimage" width={1920} height={1280} className=' w-screen h-auto aspect-video hidden md:block'/>
      <SumahoPhoto/>
    </div>
  )
}

export default TopPhoto