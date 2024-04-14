import React from 'react'
import Link from 'next/link'
export default function NavListItem({title,data}) {
    return (
        <div className='flex flex-col gap-2 '>
            <h1 className={`lg:text-lg text-sm font-semibold mb-4 md:block hidden`}>{title}</h1>
            {data?.map((link) => (
                <Link key={link.id} href={'#'}>{link.name}</Link>
            ))}
        </div>
    )
}
