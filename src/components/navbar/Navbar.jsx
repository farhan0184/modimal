'use client'
import Image from 'next/image'
import { FaHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgSearch } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { Logo } from '@/assets/imgIndex';
import React, { useState } from "react"
import { ChevronDown, X } from "lucide-react"
import { CustomBtn, NavItemHover, NavListItem } from '..';

import { isLogin } from '@/store/userStore';
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';


export default function Navbar({isHover, setIsHover,links}) {
  const pathName = usePathname()
  // console.log(pathName);

  const [id, setId] = useState(-1)

  const handleMouseEnter = (id) => {
    setIsHover(true);
    setId(id);
  };



  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const rotate = isHover ? "rotate-180" : "rotate-0";
  const data = links[id - 1]
  return (
    <div className='relative'>
      <div className='width flex justify-between items-center  h-14'>
        {/* hamburger menu and search */}
        <div className='lg:hidden flex items-center gap-2 '>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 lg:hidden p-0"
              >
                <GiHamburgerMenu className='lg:text-2xl text-xl cursor-pointer hover:text-primary' />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className=''>
              <div className='relative'>
                <nav className="flex flex-col gap-2 text-lg mt-10">
                  {links.map((link) => (
                    <div key={link.id} className={`cursor-pointer text-base border-b-[1px] `} onMouseEnter={() => handleMouseEnter(link.id)} onMouseLeave={handleMouseLeave}>
                      <Link href={'#'} className={` gap-1 flex items-center justify-between h-8 ${link.isSublink && ''}`}>
                        {link.name}
                        {link?.isSublink && <ChevronDown
                          className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${link.id === id && rotate}`}
                          aria-hidden="true" />}
                      </Link>
                      {link?.isSublink && isHover && link?.id === id && <div className='ml-5 mt-2 mb-5 transition duration-200'>
                        <NavListItem data={data?.subLinks?.category} />
                      </div>}
                    </div>
                  ))}
                </nav>
                <div className='fixed bottom-5  flex gap-2  w-[60%]'>
                  <Link href={'#'} className='border-[1px] rounded-md border-primary  xl:h-10 h-8 center xl:px-3 px-2'>SignIn</Link>
                  <CustomBtn title={'SignUp'} link={'#'} style={'xl:h-10 h-8 center xl:px-3 px-2'} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          {pathName === '/search'? <X className='navIcon cursor-pointer' onClick={() => window.location.href = '/'}/> : <CgSearch className='navIcon cursor-pointer' onClick={() => window.location.href = '/search'}/>}
        </div>
        {/* logo */}
        <div className=''>
          <Image src={Logo} alt='Logo' className='w-[170px] ' />
        </div>
        {/* links */}
        <div className='lg:flex hidden xl:gap-7 gap-5'>
          {links.map((link) => (
            <div key={link.id} className='cursor-pointer xl:text-lg text-[16px]' onMouseEnter={() => handleMouseEnter(link.id)} onMouseLeave={() => handleMouseLeave(link.id)}>
              <div className='lg:flex hidden gap-1 items-center h-14 '>
                {link.name} {link?.isSublink && <ChevronDown
                  className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${link.id === id && rotate}`}
                  aria-hidden="true" />}
              </div>
            </div>
          ))}


        </div>
        {/* icons */}
        <div className='flex items-center xl:gap-5 gap-2'>
          {pathName === '/search'? <X className='navIcon hide cursor-pointer' onClick={() => window.location.href = '/'}/> : <CgSearch className='navIcon hide cursor-pointer' onClick={() => window.location.href = '/search'}/>}
          <FiShoppingBag className='navIcon' />
          {pathName === '/wish-list' ? <FaHeart className='navIcon text-red-600' /> : <FaRegHeart onClick={() => window.location.href='/wish-list'} className={`navIcon `} />}
          <>
            {isLogin ? <>
              <FaRegUser className='navIcon ' />
            </>
              : <>
                <Link href={'/login'} className='border-[1px] rounded-md border-primary hide h-10 pt-2 center xl:px-3 px-2'>SignIn</Link>
                <CustomBtn title={'SignUp'} link={'/register'} style={'h-10 center xl:px-3 px-2 hide'} />
              </>
            }
          </>
        </div>

      </div>
      {isHover && data?.isSublink && <NavItemHover setIsHover={setIsHover} data={data} />}
    </div>
  )
}




