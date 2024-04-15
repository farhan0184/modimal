'use client'
import React from 'react'
import { ProductCard } from '..'

export default function SearchRight({data}) {
  const [isHover, setIsHover] = React.useState(false)
  const [id, setId] = React.useState(-1)

  const handleMouseEnter = (id) => {
    setIsHover(true)
    setId(id)
  }
  // console.log(data)
  return (
    <div className='sm:w-[70%] w-full  '>
      <div className='grid  sm:grid-cols-2 grid-cols-1 xl:gap-10 gap-10  mt-5 '>
        {data?.map((seller) => (
          <ProductCard key={seller.id} data={seller} isHover={isHover} setIsHover={setIsHover} id={id} handleMouseEnter={handleMouseEnter} style={'w-full object-fill'}/>
        ))}
      </div>
    </div>
  )
}
