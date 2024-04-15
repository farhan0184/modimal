import React from 'react'
import { Input } from '../ui/input'
import { Search, X } from 'lucide-react'

export default function SearchInput() {
  return (
    <div className=' border-b-[1px] border-gray-300 mb-10 center px-5'>
      <Search className=' cursor-pointer text-gray-300'/>
      <Input type="text" placeholder="Search" className="w-full outline-none  px-5 " />
      <X  className=' cursor-pointer  text-gray-300'/>
    </div>
  )
}