"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import EcomCard from "@/components/ecom-card"
import { Header } from "@/components/header"

type ProductItem = {
    id: number
    title: string
    price: number
    description: string
    image: string
}

const Product = () => {
    const [product, setProduct] = useState<ProductItem[]>([])

    const fetchData = async () => {
        try {
            const { data } = await axios.get<ProductItem[]>(
                // "https://api.escuelajs.co/api/v1/products"
                "https://fakestoreapi.com/products"
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
        <div>
            <div className="fixed top-0 left-0 right-0 z-50"><Header /></div>
            <div className="flex flex-wrap justify-center mt-18">
                {product.map((item) => (
                    <EcomCard key={item.id} item={item} />
                ))}
            </div>
        </div>

    )
}

export default Product

