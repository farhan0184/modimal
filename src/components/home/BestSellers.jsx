'use client'
import { Img10, Img11, Img12, Img13, Img14 } from '@/assets/imgIndex'
import Image from 'next/image'
import React from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa'
import ProductCard from '../shared/ProductCard'
import { products } from '@/lib/data'


export default function BestSellers() {
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
    <div className='width py-10'>
      <div className='flex justify-between items-center'>
        <h1 className='xl:text-3xl lg:text-2xl text-xl font-bold'>Best Sellers</h1>
        <span className='cursor-pointer'>Show All</span>
      </div>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-5  mt-5 '>
        {products.slice(0,3).map((seller) => (
          <ProductCard key={seller.id} data={seller} isHover={isHover} setIsHover={setIsHover} id={id} handleMouseEnter={handleMouseEnter} style={'w-full object-fill'}/>
        ))}
      </div>
    </div>
  )
}
