import { Img1, Img14, Img2, Img3, Img4 } from '@/assets/imgIndex'
import Image from 'next/image'
import React from 'react'
const colloection = [
    {
        id: 1,
        img: Img2,
        title: 'Boluses',
        isLeft: true,
    },
    {
        id: 2,
        img: Img3,
        title: 'Pants',
        isLeft: false,
    },
    {
        id: 3,
        img: Img1,
        title: 'Dresses',
        isLeft: true,
    },
    {
        id: 4,
        img: Img4,
        title: 'Outwear',
        isLeft: false,
    },
]

export default function Collection() {
    return (
        <div className='width py-10'>
            <h1 className='xl:text-3xl lg:text-2xl text-xl font-bold mb-5'>Collection</h1>
            <div className='flex lg:gap-10 gap-5'>
                <div className='w-1/2 flex flex-col lg:gap-10 gap-5'>
                    <div className=' h-min  relative'>
                        <Image src={Img2} alt={"Img1"} className='w-full h-max' />
                        <div className='absolute lg:flex justify-center items-center hidden bottom-5 right-5 w-[200px] py-3 bg-white '>
                            <p>Boluses</p>
                        </div>
                    </div>
                    <div className=' h-min relative'>
                        <Image src={Img3} alt={"Img2"} className='w-full h-max' />
                        <div className='absolute lg:flex justify-center items-center hidden bottom-5 left-5 w-[200px] py-3 bg-white '>
                            <p>Pants</p>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-between lg:gap-10 gap-5'>
                    <div className=' h-min  relative'>
                        <Image src={Img1} alt={"Img1"} className='w-full h-min' />
                        <div className='absolute lg:flex justify-center items-center  hidden bottom-5 right-5 w-[200px] py-3 bg-white '>
                            <p>Dresses</p>
                        </div>
                    </div>
                    <div className=' h-min relative'>
                        <Image src={Img4} alt={"Img2"} className='w-full h-min' />
                        <div className='absolute lg:flex justify-center items-center hidden bottom-5 right-5 w-[200px] py-3 bg-white '>
                            <p>Outwear</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
