'use client'
import { Plus, X } from 'lucide-react';
import React from 'react'
import { CustomBtn, FiltterOptions } from '..';
import { Button } from '../ui/button';
import { filtters } from '@/lib/data';
import { LuSettings2 } from "react-icons/lu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';


export default function SearchLeft() {
  const [filterList, setFiltterList] = React.useState([])
  const [navOpen, setNavOpen] = React.useState(false)
  const handleRemoveItem = (item) => {
    const newList = filterList.filter((el) => el !== item);
    setFiltterList([...newList]);
  }
  return (
    <div className='sm:w-[30%] w-full '>
      <h1 className='title sm:block hidden'>Filtter</h1>
      <Sheet className='sm:hidden block'>
        <SheetTrigger asChild >
          <div className='sm:hidden flex gap-2 w-min mx-auto my-5 cursor-pointer'>
            <LuSettings2 />
            <p>Filter</p>
          </div>
        </SheetTrigger>
        <SheetContent side={'top'} className='h-screen'>
          <SheetHeader>
            <SheetTitle className='title'>Filter</SheetTitle>

          </SheetHeader>
          <ScrollArea className='h-[80vh]'>
            <div className='space-y-4 '>
              {filtters?.map((filtter) => (
                <FiltterOptions filtter={filtter} key={filtter.id} filterList={filterList} setFiltterList={setFiltterList} />
              ))}
            </div>
            <ScrollBar />
          </ScrollArea>

          <div className='flex gap-2 absolute bg-slate-300 w-[93%]  bottom-3'>
            <Button onClick={() => setFiltterList([])} className={'border-[1px] text-gray-600 bg-transparent border-primary py-3 w-1/2'}>Clear All</Button>
            <CustomBtn title={'Apply Filter'} style={'bg-primary text-white py-3 w-1/2'} />
          </div>
        </SheetContent>
      </Sheet>

      {filterList.length > 0 && <div className='space-y-5 mb-10'>
        <div className='flex flex-wrap gap-2'>
          {filterList?.map((item, idx) => (
            <div key={idx} className='flex items-center justify-between bg-gray-300 text-gray-500 p-3   w-1/2'>
              <p className='text-sm'>{item}</p>
              <X onClick={() => handleRemoveItem(item)} className='cursor-pointer' />
            </div>
          ))}
        </div>
        <div className='sm:flex hidden gap-2 '>
          <Button onClick={() => setFiltterList([])} className={'border-[1px] text-gray-300 bg-transparent border-primary py-3 w-1/2'}>Clear All</Button>
          <CustomBtn title={'Apply Filter'} style={'bg-primary text-white py-3 w-1/2'} />
        </div>
      </div>}
      <ScrollArea className='h-[100vh] sm:block hidden'>

        <div className='space-y-4 '>
          {filtters?.map((filtter) => (
            <FiltterOptions filtter={filtter} key={filtter.id} filterList={filterList} setFiltterList={setFiltterList} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );

}
