import Image from 'next/image'
import React from 'react'
import src from "/public/topphoto.jpg"
import smahoSrc from "/public/スマホ用1.jpg"
const TopPhoto = () => {
 
  return (
    <div >
            <Image src={smahoSrc} alt="topimage" width={1920} height={1280} className=' w-screen h-auto md:hidden'/>
      <Image src={src} alt="topimage" width={1920} height={1280} className=' w-screen h-auto aspect-video hidden md:block'/>
    </div>
  )
}

export default TopPhoto