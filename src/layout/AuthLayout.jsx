import { Auth } from '@/assets/imgIndex'
import Image from 'next/image'
import React from 'react'

export default function AuthLayout({ child }) {
    return (
        <div className='flex width py-10'>
            <div className='w-1/2 '>
                <Image src={Auth} alt='img-13' className='w-full h-auto object-cover' />
            </div>
            <div className='w-1/2'>
                <div className='w-[70%] h-full mx-auto  '>
                    {child}
                </div>
            </div>
        </div>
    )
}
