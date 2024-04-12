import React from 'react'
import Link from 'next/link'
export default function NavListItem({title,data}) {
    return (
        <div className='flex flex-col gap-2 '>
            <h1 className='text-lg font-semibold mb-4'>{title}</h1>
            {data.map((link) => (
                <Link key={link.id} href={'#'}>{link.name}</Link>
            ))}
        </div>
    )
}
