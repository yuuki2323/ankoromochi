import React from 'react'
import Header from '../toppageCpmponent/Header'
import SalonFooter from '../toppageCpmponent/SalonFooter'
import Staff from './components/Staff'

const page = () => {
  return (
    <>
    <Header />
    <div className="bg-orange-100 pb-1 border-b">
      <h2 className="text-center text-xl py-2">- スタッフ紹介 -</h2>
<Staff src="MIO.jpg" name="MIO ミオ" p="セラピスト" dis="高級サロンで店長を勤め、お客様お一人おひとりに合わせた特別な施術や癒しの空間をご提供したいと思い独立いたしました。「日々頑張る自分へのご褒美」となれるように心を込めて施術いたします。ご来店お待ちしております。"/>
<Staff src="店長.jpg" name="あんころもち" p="店長（看板犬）" dis="食べるか寝るかのどっちかの店長。運よくMIOの目にとまり店長にまで就任したラッキーコーギー。※店鋪出勤はしません"/>
<Staff src="副店長.jpg" name="よもぎもち" p="副店長（クラッシャー）" dis="イタズラすることが生き甲斐。何度怒られてもやめられない。※店鋪出勤はしません"/>
    </div>
    <SalonFooter />
  </>
  )
}

export default page