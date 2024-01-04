import React from 'react'
import Header from '../toppageCpmponent/Header'
import SalonFooter from '../toppageCpmponent/SalonFooter'
import Image from 'next/image'
const page = () => {
  return (
    <>
    <Header/>
    <div>
      <h2>オイルトリートメント</h2>
      <Image src="/oil.jpg" alt="oil" width={336} height={280}/>
    </div>
    <SalonFooter/>
    </>
  )
}

export default page