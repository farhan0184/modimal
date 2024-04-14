import { Img13 } from '@/assets/imgIndex'
import Image from 'next/image'
import React from 'react'
import { CustomBtn } from '..'

export default function Sustainability() {
    return (
        <div
            className="relative lg:h-[70vh] h-[30vh]  text-center my-5"
        >
            <Image src={Img13} alt="HeaderBack" className="absolute overflow-hidden  bg-cover bg-no-repeat  h-full w-full object-fill z-10" />
            <div
                className="absolute w-full h-full center lg:flex lg:pr-5 lg:pb-5 lg:justify-end lg:items-end overflow-hidden  z-30"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            >
                <div className=' lg:w-[30%] w-[80%]  mx-auto '>
                    <h2 className="mb-5 text-xl  italic text-white text-left">
                        Stylish sustainability in clothing promotes eco-friendly choices for a greater future
                    </h2>
                    <div className='flex justify-end'>
                        <CustomBtn title={"Sustainability"} style={"bg-white text-primary hover:text-white w-max"} />
                    </div>

                </div>
            </div>
        </div>
    )
}
