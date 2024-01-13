
import {Kosugi_Maru} from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const Kosugi = Kosugi_Maru({ subsets: ['latin'],weight:"400"})

 const meta = {
  title: '癒し処 あんころもち',
  description: '癒し処 あんころもち',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}/>
      </Head>
      <body className={`Kosugi.className text-brown-900`}>{children}</body>
    </html>
  )
}
