
import {Kosugi_Maru} from 'next/font/google'
import './globals.css'
import Head from 'next/head'


const Kosugi = Kosugi_Maru({ subsets: ['latin'],weight:"400"})


export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <Head key="head">
        <link rel="icon" href="/favicon.ico"/>
        <title>神戸・三宮のリラクゼーションサロン 癒し処 あんころもち</title>
        <meta name="description" content="神戸・三宮のリラクゼーション癒し処あんころもちでは、メンズもご利用可能なオイルリンパマッサージ・ストレッチ・揉みほぐし・ヘッドスパ等様々なメニューを取り揃え！ワンフロア一戸のマンション・シャワー完備の隠れ家的サロン。"/>
      </Head>
      <body className={`${Kosugi.className} text-brown-900`}>{children}</body>
    </html>
  )
}
