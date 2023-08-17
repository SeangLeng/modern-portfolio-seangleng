import Navbar from '@/app/component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import thumbnail from '../../public/images/thmbnail.png'
import Loading from './loading'
import { Suspense } from 'react'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seng seang leng Portfolio',
  description: 'A web developer is a skilled professional who specializes in creating. i am proficient in various programming languages such as HTML, CSS, and JavaScript, and they utilize their expertise to design and develop visually appealing and user-friendly websites.',
  thumbnail: { thumbnail },
  openGraph: {
    images: [{ thumbnail }],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content={thumbnail} />
        <meta name="thumbnail:image" content={thumbnail} />
      </Head>
      <body className={inter.className}>
        <Suspense fallback={<Loading />} >
          <Navbar />
          {children}
        </Suspense>
        <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html >
  )
}
