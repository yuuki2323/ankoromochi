
import {Kosugi_Maru} from 'next/font/google'
import './globals.css'


const Kosugi = Kosugi_Maru({ subsets: ['latin'],weight:"400"})

export const metadata = {
  title: '癒し処 あんころもち',
  description: '癒し処 あんころもち',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`Kosugi.className text-brown-900`}>{children}</body>
    </html>
  )
}
