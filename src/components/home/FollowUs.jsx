import { Img14, Img15, Img16, Img17, Img18 } from '@/assets/imgIndex'
import Image from 'next/image'
import React from 'react'

export default function FollowUs() {
  return (
    <div className='width my-10'>
        <h1 className='xl:text-3xl lg:text-2xl text-xl font-bold mb-5'>Follow us @modimal</h1>
        <div className='flex'>
            <div className='w-1/2'>
                <Image src={Img14} alt='img-14' className='w-full h-full'/>
            </div>
            <div className='w-1/2 flex flex-wrap'>
                <div className='w-1/2'>
                    <Image src={Img15} alt='img-14' className='w-full h-full'/>
                </div>
                <div className='w-1/2'>
                    <Image src={Img16} alt='img-14' className='w-full h-full'/>
                </div>
                <div className='w-1/2'>
                    <Image src={Img17} alt='img-14' className='w-full h-full'/>
                </div>
                <div className='w-1/2'>
                    <Image src={Img18} alt='img-14' className='w-full h-full'/>
                </div>
            </div>
        </div>
    </div>
  )
}
