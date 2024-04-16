'use client'
import { Minus, Plus } from 'lucide-react'
import React from 'react'


export default function FiltterOptions({ filtter, setFiltterList, filterList }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const handleChange = (e, item) => {
        const { name, checked } = e.target
        if (item.name === name) {
            const isExist = filterList.includes(item.title)
            if (!isExist && checked) {
                setFiltterList([...filterList, item.title])
            } else {
                const idx = filterList.indexOf(item.title);
                const newList = filterList.filter(el => el !== item.title);
                setFiltterList([...newList])
            }
        }
    }
    return (
        <div className={`${isOpen && ' border-[1px] border-primary '}} cursor-pointer`}>
            <div onClick={() => setIsOpen(!isOpen)} className={`flex  items-center justify-between ${isOpen ? 'bg-transparent text-black' : 'bg-primary text-white'}   p-3 `}>
                <h1>{filtter.name}</h1>
                {isOpen?<Minus/>:<Plus />}
            </div>
            {isOpen && <div className='p-3 space-y-3 '>
                {filtter.list.map((item, idx) =>
                    <div key={idx} className='flex gap-2 items-center  text-primary text-lg'>
                        <input type="checkbox" name={item.name} checked={filterList.includes(item.title)} onChange={(e) => handleChange(e, item)} className="bg-primary w-5 h-5" />
                        <p>{item.title}</p>
                    </div>
                )}
            </div>
            }

        </div>
    )
}



// function InputCheck({ item, setFiltterList, filterList }) {
//     // console.log(isCheck);
//     const handleChange = (e, item) => {
//         // console.log(e.target.name, e.target.checked)
//         const { name, checked } = e.target
//         console.log(name, checked)
//         if (item.name === name) {
//             const isExist = filterList.includes(item.title)
//             console.log(isExist)
//             if (!isExist && checked) {
//                 setFiltterList([...filterList, item.title])
//             } else {
//                 const idx = filterList.indexOf(item.title);
//                 console.log(idx)
//                 const newList = filterList.filter(el => el !== item.title);
//                 console.log(newList)
//                 setFiltterList([...newList])
//             }
//         }
//     }
//     // console.log(isCheck)
//     return (
//         <div className='flex gap-2 items-center  text-primary text-lg'>
//             <input type="checkbox" name={item.name} onChange={(e) => handleChange(e, item)} className="bg-primary w-5 h-5" />
//             <p>{item.title}</p>
//         </div>
//     )
// }

