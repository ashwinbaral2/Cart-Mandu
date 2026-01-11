"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import EcomCard from "@/components/ecom-card"

type ProductItem = {
    id: number
    title: string
    price: number
    description: string
    images: string[]
}

const Product = () => {
    const [product, setProduct] = useState<ProductItem[]>([])

    const fetchData = async () => {
        try {
            const { data } = await axios.get<ProductItem[]>(
                "https://api.escuelajs.co/api/v1/products"
            )
            setProduct(data)
        } catch (error) {
            console.error("Error fetching products:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="flex flex-wrap justify-center">
            {product.map((item) => (
                <EcomCard key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Product
