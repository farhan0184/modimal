
import { HeaderBack } from '@/assets/imgIndex'
import Image from 'next/image'
import React from 'react'
import { CustomBtn } from '..'

export default function Header() {
    return (
        <div
            className="relative h-[95vh] text-center"
            >
            <Image src={HeaderBack} alt="HeaderBack" className="absolute overflow-hidden  bg-cover bg-no-repeat  h-full w-full object-cover z-10" />
            <div
                className="absolute h-full w-full overflow-hidden  z-30"
                style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}}
                >
                <div className="flex h-full items-center width ">
                    <div className="text-white w-full sm:w-[60%] lg:w-[35%] flex flex-col ">
                        <h2 className="mb-10 lg:text-4xl text-2xl italic text-left">
                            Elegance In Simplicity Earth's Harmony
                        </h2>
                        <CustomBtn title={"Shop Now"} style={"bg-white text-primary hover:text-white w-max"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
