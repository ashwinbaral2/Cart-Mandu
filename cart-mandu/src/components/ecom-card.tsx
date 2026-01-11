'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
type ProductItem = {
    id: number
    title: string
    description: string
    price: number
    images: string[]
}

const EcomCard = (props: { item: ProductItem }) => {
    const { item } = props
    const router = useRouter()
    return (
        <div onClick={()=>router.push('product/'+props.item.id)} className='flex justify-center p-5'>
            <div
                className='flex flex-col group relative w-72 rounded-2xl border bg-gray-100 p-4 shadow-xl 
            hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900"'
                key={item.id}>
                <img
                src={item.images?.[0] ?? 'https://placehold.co/400'}
                alt={item.title}
                className="w-40 h-40 object-cover rounded-xl"
            />
                
                <h2 className='text-lg font-bold text-black'>{item.title}</h2>
                <p className='text-sm text-gray-500'>{item.description}</p>
                <span className='text-xl font-semibold text-yellow-500'>${item.price}</span>
                <button className='mt-2 bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600'>Add to Cart</button>
            </div>
            
        </div>
    )
}

export default EcomCard