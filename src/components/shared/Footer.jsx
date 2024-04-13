import React from 'react'
import { Input } from '../ui/input'
import { Checkbox } from '../ui/checkbox'
import { TiArrowRight } from "react-icons/ti";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaPinterest , FaTiktok   } from "react-icons/fa";
import { Footerbox } from '@/assets/imgIndex';
import Image from 'next/image';

export default function Footer() {
  const footerList = [
    {
      title: 'About Modimal',
      list: [
        {
          title: 'Collection',
          link: '#'
        },
        {
          title: 'Sustainability',
          link: '#'
        },
        {
          title: 'Privacy Policy',
          link: '#'
        },
        {
          title: 'Support System',
          link: '#'
        },
        {
          title: 'Terms & Condition',
          link: '#'
        },
        {
          title: 'Copyright Notice',
          link: '#'
        }
      ]
    },
    {
      title: 'Help & Support',
      list: [
        {
          title: 'Returns & Refunds',
          link: '#'
        },
        {
          title: 'Orders & Shipping',
          link: '#'
        },
        {
          title: 'FAQs',
          link: '#'
        },
        {
          title: 'Contact Us',
          link: '#'
        }
      ]
    },
    {
      title: 'Join Up',
      list: [
        {
          title: 'Modimal Club',
          link: '#'
        },
        {
          title: 'Careers',
          link: '#'
        },
        {
          title: 'Visit Us',
          link: '#'
        }
      ]
    }
  ]
  return (
    <footer className='bg-secondary -z-10 py-16 relative'>
      <div className='width lg:flex lg:flex-row flex-col gap-5'>
        <div className='lg:w-1/2 w-full lg:mb-0 mb-10'>
          <div className='lg:w-[80%] w-full'>
            <h1 className='lg:text-xl text-lg text-white mb-5 font-bold'>Join our club, get 15% off for your Birthday</h1>
            <div className='relative'>
              <Input className='outline-0 border-[2px] border-white bg-transparent px-5 text-white' placeholder='Enter your email address' />
              <TiArrowRight className='xl:text-2xl text-xl cursor-pointer text-white absolute top-1/2 -translate-y-1/2 right-5' />
            </div>

            <div className="flex items-center mt-5 space-x-2  text-white">
              <Checkbox id="terms" className='border-white border-[1px]' />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              >
                By Submittng your email, you agree to receive advertising emails from Modimal.
              </label>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 w-full flex flex-wrap lg:gap-10 gap-8 lg:justify-around justify-start'>
          {
            footerList.map((item, index) => (
              <div key={index}>
                <h1 className='lg:text-xl text-lg text-white mb-5 font-bold'>{item.title}</h1>
                {
                  item.list.map((link, index) => (
                    <Link key={index} href={link.link} className='text-white lg:text-lg text-base block mb-2 '>{link.title}</Link>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className='width lg:mt-0 mt-5'>
        <div className='flex gap-4'>
          <FaFacebook className='text-white hover:text-primary text-3xl cursor-pointer'/>
          <FaInstagram  className='text-white hover:text-primary text-3xl cursor-pointer'/>
          <FaPinterest  className='text-white hover:text-primary text-3xl cursor-pointer'/>
          <FaTiktok className='text-white hover:text-primary text-3xl cursor-pointer'/>
        </div>
        <p className='text-white lg:text-lg text-sm lg:mt-10 mt-5 flex items-center gap-2 '><span className='text-2xl'>&copy;</span> 2024 Modimal. All rights reserved</p>

        <Image src={Footerbox} alt="logo" width={50} height={50} className='absolute bottom-20 lg:right-20 right-10'/>
      </div>
    </footer>
  )
}
