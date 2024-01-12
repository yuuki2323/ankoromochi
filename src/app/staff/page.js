import React from 'react'
import Header from '../toppageCpmponent/Header'
import SalonFooter from '../toppageCpmponent/SalonFooter'
import Staff from './components/Staff'

const page = () => {
  return (
    <>
    <Header />
    <div className="bg-orange-100">
      <h2 className="text-center text-xl py-2">- スタッフ紹介 -</h2>
<Staff src="MIO.jpg" name="MIO ミオ" p="セラピスト"/>
    </div>
    <SalonFooter />
  </>
  )
}

export default page