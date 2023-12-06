import Image from 'next/image'
import React from 'react'

const TopPhoto = () => {
  const dammy= "https://placehold.jp/56px/ffce7a/ffffff/1920x1080.png?text=%E3%81%93%E3%81%93%E3%81%AB%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E3%81%AE%E7%94%BB%E5%83%8F%E3%81%8C%E5%88%87%E3%82%8A%E6%9B%BF%E3%82%8F%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%97%E3%81%BE%E3%81%99" 
  return (
    <div>
      <Image src={dammy} alt="topimage" width="1980" height="1080"/>
    </div>
  )
}

export default TopPhoto