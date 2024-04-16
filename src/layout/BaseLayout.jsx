'use client'
import { Footer, Navbar, TopTitle } from '@/components'
import { links } from '@/lib/data'
import { usePathname } from 'next/navigation'
import React from 'react'
import AuthLayout from './AuthLayout'

export default function BaseLayout({ child }) {
    const pathName = usePathname()
    // console.log(pathName);
    const [isHover, setIsHover] = React.useState(false)
    return (
        <div className={`${isHover&&'h-[100vh] overflow-hidden scrollbar-hide'}`}>
            <TopTitle />
            <Navbar isHover={isHover} setIsHover={setIsHover} links={links}/>
            {pathName === '/login'|| pathName === '/register' ?<AuthLayout child={child}/> : <>{child}</>}

            <Footer />
        </div>
    )
}
