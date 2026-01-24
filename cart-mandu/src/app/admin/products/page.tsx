'use client'
import axios from 'axios';
import { useEffect, useState } from 'react'
import CreateProducts from './create-products'
import ProductsTable from './products-table'

const page = () => {
    const [products, setProduct] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://fakestoreapi.com/products");
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

            <CreateProducts fetchData={fetchData} />

            <ProductsTable products={products} fetchData={fetchData} />
        </div>
    )
}

export default page