import React from 'react'
import { NavListItem } from '..'
import Image from 'next/image'
export default function NavItemHover({setIsHover,data}) {
    return (
        <div className={`bg-black/30 backdrop-blur-sm absolute top-14 w-full h-[calc(100vh-88px)] `}>
            <div className='2xl:h-[65vh] h-[70vh] bg-white' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <div className='width flex'>
                    <div className='flex gap-10 w-1/2 pt-5'>
                        <NavListItem title={'Featured'} data={data?.subLinks?.category} />
                        <NavListItem title={'Featured'} data={data?.subLinks?.featured} />
                        <NavListItem title={'More'} data={data?.subLinks?.more} />
                    </div>
                    <div className='w-1/2 flex justify-between gap-3 pt-5 '>
                        {data?.subLinks?.images?.map((image) => (
                            <div className='flex-1 ' key={image.id}>
                                <Image src={image?.src} alt={image?.name} className='object-fill w-full h-[400px]' />
                                <p className='text-sm font-semibold mt-2'>{image?.name}</p>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
