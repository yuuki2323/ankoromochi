import React from 'react'
import Head from 'next/head'
const Headcom = () => {
const text={
  title:"神戸・三宮のリラクゼーションサロン 癒し処 あんころもち",
  content:"神戸・三宮のリラクゼーション癒し処あんころもちでは、メンズもご利用可能なオイルリンパマッサージ・ストレッチ・揉みほぐし・ヘッドスパ等様々なメニューを取り揃え！ワンフロア一戸のマンション・シャワー完備の隠れ家的サロン。"
}
  return (
    <Head>
        <link rel="icon" href="/favicon.ico"/>
        <title>{text.title}</title>
        <meta name="description" content={text.content}/>
      </Head>
  )
}

export default Headcom