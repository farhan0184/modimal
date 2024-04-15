import { Img12 } from '@/assets/imgIndex'
import { ProductCard } from '@/components'
import { products } from '@/lib/data'
import React from 'react'



export default function WishListPage() {
  return (
    <div className='my-10 width'>
      <div className='center flex-col'>
        <h1 className='sm:text-xl text-[16px] font-bold mb-2'>My Wish List</h1>
        <p className=''>1 item</p>
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-2 xl:gap-10 gap-5   mt-10 '>
        {products.slice(0, 4).map((seller) => (
          <ProductCard key={seller.id} data={seller}    style={'w-full object-fill'} />
        ))}
      </div>
    </div>
  )
}
