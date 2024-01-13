import React from 'react'
import Header from '../toppageCpmponent/Header'
import SalonFooter from '../toppageCpmponent/SalonFooter'
import MyGoogleMap from './components/MyGoogleMap'

const page = () => {
  return (
    <>
    <Header/>
    <div className=" bg-orange-100 pb-1 border-b border-brown-900 ">
      <div className='container mx-auto'>
      <h2 className="text-center text-3xl py-2">- 店舗情報 -</h2>
    <div className=' mx-12 md:mx-12 lg:mx-24 xl:mx-28 h-50 '>
      <MyGoogleMap />
    </div>
      </div>
    
    </div>
    <SalonFooter/>
    </>
  )
}

export default page