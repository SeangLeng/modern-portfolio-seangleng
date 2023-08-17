import Navbar from '@/app/component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import thumbnail from '../../public/images/Programming-amico.png'
import Loading from './loading'
import { Suspense } from 'react'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seng seang leng Portfolio',
  description: 'A web developer is a skilled professional who specializes in creating. i am proficient in various programming languages such as HTML, CSS, and JavaScript, and they utilize their expertise to design and develop visually appealing and user-friendly websites.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="https://elements-cover-images-0.imgix.net/bc1b4639-46ae-441e-987e-cda7482a798c?auto=compress%2Cformat&fit=max&w=900&s=2e76147eb82a97a64ebf419c6a51c468" />
        <meta name="frontend:image" content="https://elements-cover-images-0.imgix.net/bc1b4639-46ae-441e-987e-cda7482a798c?auto=compress%2Cformat&fit=max&w=900&s=2e76147eb82a97a64ebf419c6a51c468" />
      </Head>
      <body className={inter.className}>
        <Suspense fallback={<Loading />} >
          <Navbar />
          {children}
        </Suspense>
        <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
