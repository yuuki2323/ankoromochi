
import {Kosugi_Maru} from 'next/font/google'
import './globals.css'
import Headcom from './Headcom'
const Kosugi = Kosugi_Maru({ subsets: ['latin'],weight:"400"})


export default function RootLayout({ children }) {

  return (
    <html lang="ja">
      <Headcom/>
      <body className={`${Kosugi.className} text-brown-900`}>{children}</body>
    </html>
  )
}
