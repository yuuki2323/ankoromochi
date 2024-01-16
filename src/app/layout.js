
import {Kosugi_Maru} from 'next/font/google'
import './globals.css'

const Kosugi = Kosugi_Maru({ subsets: ['latin'],weight:"400"})
export const metadata = {
  title: "神戸・三宮のリラクゼーションサロン 癒し処 あんころもち",
  description: "神戸・三宮のリラクゼーション癒し処あんころもちでは、メンズもご利用可能なオイルリンパマッサージ・ストレッチ・揉みほぐし・ヘッドスパ等様々なメニューを取り揃え！ワンフロア一戸のマンション・シャワー完備の隠れ家的サロン。",

};


export default function RootLayout({ children }) {

  return (
    <html lang="ja">
      <body className={`${Kosugi.className} text-brown-900`}>{children}</body>
    </html>
  )
}
