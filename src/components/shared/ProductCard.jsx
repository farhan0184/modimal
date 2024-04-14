import Image from 'next/image'
import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

export default function ProductCard({ data, isHover, setIsHover, id, handleMouseEnter, style }) {
    return (
        <div className={`relative `}>
            <Image src={data.img} alt={data.title} className={`  ${style}`} />
            <div className='p-2'>
                <h1 className='mb-2 font-bold'>{data.title}</h1>
                {data?.subTitle && data?.price && data?.colors && <><div className='flex justify-between text-sm mb-5'>
                    <p>{data?.subTitle}</p>
                    {data?.price && <p>${data?.price}</p>}
                </div>
                    <div className='flex gap-1'>
                        {
                            data?.colors?.map((color) => (
                                <div
                                    key={color}
                                    className='w-5 h-5 rounded-full cursor-pointer hover:border-[1px] border-black'
                                    style={{ backgroundColor: color }}
                                />
                            ))
                        }

                    </div> </>}
                <div className='absolute top-5 right-5'>
                    {isHover && id === data.id ?
                        <FaHeart onMouseLeave={() => setIsHover(false)} className='text-base text-red-600 ' /> : <FaRegHeart onMouseEnter={() => handleMouseEnter(data.id)} className='text-base ' />}
                </div>
            </div>
        </div>
    )
}
