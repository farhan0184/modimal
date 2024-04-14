'use client'
import { Img1, Img10, Img5, Img6, Img7, Img8, Img9 } from '@/assets/imgIndex'
import React from 'react'
import { ProductCard } from '..'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'


const modiweek = [
    {
        id: 1,
        img: Img1,
        title: 'Sunday',
        isLeft: true,
    },
    {
        id: 2,
        img: Img5,
        title: 'Monday',
        isLeft: false,
    },
    {
        id: 3,
        img: Img6,
        title: 'Tuesday',
        isLeft: true,
    },
    {
        id: 4,
        img: Img7,
        title: 'Wednesday',
        isLeft: false,
    },
    {
        id: 5,
        img: Img8,
        title: 'Thursday',
        isLeft: true,
    },
    {
        id: 6,
        img: Img9,
        title: 'Friday',
        isLeft: false,
    },
    {
        id: 7,
        img: Img10,
        title: 'Saturday',
        isLeft: true,
    },
]

export default function Modiweek() {
    const [isHover, setIsHover] = React.useState(false)
    const [id, setId] = React.useState(-1)

    const handleMouseEnter = (id) => {
        setIsHover(true)
        setId(id)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    return (
        <div className=''>
            <div className='width'>
                <h1 className='xl:text-3xl lg:text-2xl text-xl font-bold mb-5'>Modiweek</h1>
            </div>


            <ScrollArea className="width ">
                <div className='w-max space-x-4  flex gap-5'>
                    {modiweek.map((modi) => (
                        <ProductCard key={modi.id} data={modi} isHover={isHover} setIsHover={setIsHover} id={id} handleMouseEnter={handleMouseEnter} style={'w-[250px] h-[350px]'} />
                    ))}
                </div>
                <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>


        </div>
    )
}
