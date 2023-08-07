import Image from 'next/image'
import homepage_image from '../../public/images/homepage-image.png'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="min-h-screen py-36 px-[10%] lg:flex md:flex justify-between items-center">
      <div className='lg:w-1/2 md:w-1/2' data-aos="fade-right">
        <p className='text-white text-[64px] uppercase font-bold'>seng</p>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 text-8xl uppercase font-bold -mt-5'>seang leng</p>
        <p className='text-[#42C6FF] text-[20px] capitalize font-bold'>Full stack developer <span className='text-white'>Cambodia</span></p>
        <p className='text-white text-xl mt-14'>A web developer is a skilled professional who specializes in creating and maintaining websites. They are proficient in various programming languages such as HTML, CSS, and JavaScript, and they utilize their expertise to design and develop visually appealing and user-friendly websites.</p>
      </div>
      <div data-aos="fade-left">
        <Image src={homepage_image} width={600} height={600} />
      </div>
    </main>
  )
}
