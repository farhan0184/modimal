
import { SearchInput, SearchLeft, SearchRight } from '@/components'
import { products } from '@/lib/data'
import { LuSettings2 } from "react-icons/lu";

export default function SearchPage() {
  const data = products.filter((el) => el.type === 'pant')

  return (
    <div className='width py-10'>
      <SearchInput />
      <p className='text-lg text-center mb-5'>10 Items</p>
      <div className='sm:flex sm:gap-5 '>
        <SearchLeft />
        <SearchRight data={data} />
      </div>
    </div>
  )
}
