'use client'
import Image from 'next/image'
import { FaRegUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgSearch } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { Logo } from '@/assets/imgIndex';
import React, { useState } from "react"
import { ChevronDown } from "lucide-react"
import { CustomBtn, NavItemHover } from '..';
import { links } from '@/lib/data';
import { isLogin } from '@/store/userStore';
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"


export default function Navbar() {
  const [isHover, setIsHover] = React.useState(false)
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
        <div className='lg:hidden flex gap-5'>


          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 lg:hidden"
              >
                <GiHamburgerMenu className='lg:text-2xl text-xl cursor-pointer hover:text-primary' />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg">
                {links.map((link) => (
                  <div key={link.id} className='cursor-pointer text-lg '>
                    <Link className='lg:flex hidden gap-1 items-center h-14 '>
                      {link.name} 
                      {/* {link?.isSublink && <ChevronDown
                        className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${link.id === id && rotate}`}
                        aria-hidden="true" />} */}
                    </Link>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <CgSearch className='navIcon' />
        </div>
        {/* logo */}
        <div>
          <Image src={Logo} alt='Logo' className='w-[170px] ' />
        </div>
        {/* links */}
        <div className='lg:flex hidden xl:gap-10 gap-5'>
          {links.map((link) => (
            <div key={link.id} className='cursor-pointer text-lg ' onMouseEnter={() => handleMouseEnter(link.id)} onMouseLeave={() => handleMouseLeave(link.id)}>
              <div className='lg:flex hidden gap-1 items-center h-14 '>
                {link.name} {link?.isSublink && <ChevronDown
                  className={`relative top-[1px] ml-1 h-3 w-3 transition duration-200 ${link.id === id && rotate}`}
                  aria-hidden="true" />}
              </div>
            </div>
          ))}


        </div>
        {/* icons */}
        <div className='flex items-center xl:gap-10 gap-5'>
          <CgSearch className='navIcon lg:block hidden' />
          <>
            {isLogin ? <>
              <FaRegUser className='navIcon lg:block hidden' />
              <FaRegHeart className='navIcon' />
              <FiShoppingBag className='navIcon' />
            </>
              : <>
                <Link href={'#'} className='border-[1px] rounded-md border-primary h-10 center px-3'>SignIn</Link>
                <CustomBtn title={'SignUp'} link={'#'} />
              </>
            }
          </>
        </div>

      </div>
      {isHover && data?.isSublink && <NavItemHover setIsHover={setIsHover} data={data} />}
    </div>
  )
}




