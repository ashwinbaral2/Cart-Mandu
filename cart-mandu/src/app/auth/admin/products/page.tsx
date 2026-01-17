'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CreateProducts from './create-products'
import ProductsTable from './products-table'

const page = () => {
      const [products, setProduct] = useState([]);
  
      const fetchdata = async () => {
          try {
              const { data } = await axios.get("https://fakestoreapi.com/products");
              setProduct(data)
          } catch (error) {
              console.error("Error fetching products:", error)
          }
      }
      const createProducts = async (productInfo) => {
          try {
              const { data } = await axios.post("https://fakestoreapi.com/products", productInfo);
              
          } catch (error) {
              console.error("Error fetching products:", error)
          }
      }
      const editProducts = async (id, productInfo) => {
          try {
              const { data } = await axios.put("https://fakestoreapi.com/products"+id, productInfo);
              
          } catch (error) {
              console.error("Error fetching products:", error)
          }
      }
      const deleteProduct = async (id) => {
          try {
              const { data } = await axios.delete("https://fakestoreapi.com/products"+id);
              
          } catch (error) {
              console.error("Error fetching products:", error)
          }
      }
  
      useEffect(() => {
          fetchdata()
      }, [])
  return (
    <div>

        <CreateProducts createProducts={createProducts} fetchdatah={fetchdata} />
            
        <ProductsTable products={products} editProducts={editProducts} deleteProduct={deleteProduct}  />
    </div>
  )
}

export default page