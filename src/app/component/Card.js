import Image from 'next/image'
import React from 'react'

export default function Card({logo, title, description}) {
    return (
        <div className='bg-white/30 px-5 py-7 text-white flex flex-col gap-5 rounded-lg'>
            <Image src={logo} alt="logo" />
            <p className='text-center text-lg'>{title}</p>
            <p className='text-center text-sm'>{description}</p>
        </div>
    )
}
