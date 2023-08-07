import Image from 'next/image'
import React from 'react'
import homepage_image from '../../../public/images/homepage-image.png'
import Link from 'next/link'
export default function About() {
    return (
        <div className="min-h-screen py-36 px-[10%] lg:flex md:flex justify-between flex-row-reverse items-center">
            <div className='lg:w-1/2 md:w-1/2' data-aos="fade-right">
                <p className='text-white text-[64px] capitalize font-bold'>About <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 font-bold'>me</span></p>

                <p className='text-white text-[20px] capitalize font-bold'>Web developer</p>
                <p className='text-gray-300 text-xl mt-14'>I am <span className='capitalize font-semibold text-xl'>Seng Seang Leng</span>, and Welcome to my portfolio, where I embark on a thrilling journey into the world of full stack web development. With a solid foundation in both front-end and back-end technologies, I've honed my skills over the past two months to create dynamic and immersive digital experiences.</p>
                <div className='mt-10'>
                    <Link href='/service/frontend' className='bg-gradient-to-r hover:bg-gradient-to-l transition-all from-blue-400 to-blue-600 text-white text-lg px-5 py-2 font-medium rounded-xl'>More about me</Link>
                </div>
            </div>
            <div data-aos="fade-left">
                <Image src={homepage_image} width={600} height={600} />
            </div>
        </div>
    )
}
