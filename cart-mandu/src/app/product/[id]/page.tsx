"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";

const ProductDetails = () => {
  const [product, setProduct] = useState<any>(null);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchProductDetails = async () => {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      setProduct(response.data);
    };

    if (id) fetchProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 flex gap-10">
      <div className="shrink-0">
        <img
          src={product.images?.[0] ?? "https://placehold.co/400x400"}
          alt={product.title}
          className=" w-80 h-80 rounded-lg mb-4"
        />
      </div>
      <div className="flex flex-col gap-5 border p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

        <p className="text-gray-900 mb-2">{product.description}</p>
        <span className="font-bold text-xl">
          Product Price: ${product.price}
        </span>
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline" className="text-white bg-black">Buy Now</Button>
    </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// --- IGNORE --- AI GENERATED ATTEMPT BELOW ---

// "use client"

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'next/navigation'

// const ProductDetails = () => {
//   const [product, setProduct] = useState<any>(null)
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0)
//   const [quantity, setQuantity] = useState(1)
//   const params = useParams()
//   const id = params.id

//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       try {
//         const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
//         setProduct(response.data)
//       } catch (error) {
//         console.error("Error fetching product details:", error)
//       }
//     }

//     if (id) fetchProductDetails()
//   }, [id])

//   if (!product) return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
//         <p className="text-gray-600 text-lg">Loading product details...</p>
//       </div>
//     </div>
//   )

//   const images = product.images && product.images.length > 0 ? product.images : ['https://placehold.co/600x600']

//   return (
//     <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-8">
//       <div className="min-w-6xl mx-auto px-4">
//         {/* Breadcrumb */}
//         <div className="text-sm text-gray-600 mb-6">
//           <span className="hover:text-purple-600 cursor-pointer">Home</span> /
//           <span className="hover:text-purple-600 cursor-pointer ml-2">{product.category?.name}</span> /
//           <span className="text-gray-900 font-semibold ml-2">{product.title}</span>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-8">
//           {/* Image Gallery */}
//           <div className="flex flex-col gap-4">
//             <div className="flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden h-80 md:h-80">
//               <img
//                 src={images[selectedImageIndex]}
//                 alt={product.title}
//                 className="w-100 h-100 object-cover transition-transform duration-300 hover:scale-105"
//               />
//             </div>

//             {/* Thumbnail Gallery */}
//             {images.length > 1 && (
//               <div className="flex gap-3 overflow-x-auto">
//                 {images.map((img: string, idx: number) => (
//                   <button
//                     key={idx}
//                     onClick={() => setSelectedImageIndex(idx)}
//                     className={`shrink-0 w-20 h-20 rounded-lg border-2 transition-all ${
//                       selectedImageIndex === idx
//                         ? 'border-purple-600 scale-105'
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                   >
//                     <img src={img} alt={`${product.title} ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Product Info */}
//           <div className="flex flex-col justify-between">
//             {/* Title and Category */}
//             <div>
//               <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
//                 {product.category?.name}
//               </div>
//               <h1 className="text-4xl font-bold text-gray-900 mb-3">{product.title}</h1>

//               {/* Rating Section */}
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="flex gap-1">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-yellow-400">★</span>
//                   ))}
//                 </div>
//                 <span className="text-gray-600 text-sm">(128 reviews)</span>
//               </div>

//               {/* Price */}
//               <div className="mb-6 pb-6 border-b-2">
//                 <div className="flex items-center gap-3 mb-2">
//                   <span className="text-4xl font-bold text-purple-600">${product.price}</span>
//                   <span className="text-lg text-gray-400 line-through">${(product.price * 1.2).toFixed(2)}</span>
//                   <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">-17%</span>
//                 </div>
//                 <p className="text-green-600 font-semibold">In Stock (12 available)</p>
//               </div>

//               {/* Description */}
//               <p className="text-gray-700 text-base leading-relaxed mb-6">{product.description}</p>

//               {/* Additional Info */}
//               <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
//                 <div>
//                   <p className="text-gray-600 text-sm">Product ID</p>
//                   <p className="font-semibold text-gray-900">#{product.id}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm">Availability</p>
//                   <p className="font-semibold text-green-600">In Stock</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm">Shipping</p>
//                   <p className="font-semibold text-gray-900">Free Shipping</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm">Warranty</p>
//                   <p className="font-semibold text-gray-900">1 Year</p>
//                 </div>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex flex-col gap-4">
//               {/* Quantity Selector */}
//               <div className="flex items-center gap-4 bg-gray-100 rounded-lg p-4 w-fit">
//                 <button
//                   onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                   className="text-gray-600 hover:text-gray-900 font-bold text-xl w-8 h-8 flex items-center justify-center"
//                 >
//                   −
//                 </button>
//                 <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity(quantity + 1)}
//                   className="text-gray-600 hover:text-gray-900 font-bold text-xl w-8 h-8 flex items-center justify-center"
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Buttons */}
//               <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors shadow-lg">
//                 🛒 Add to Cart
//               </button>
//               <button className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-lg transition-colors">
//                 ❤️ Add to Wishlist
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductDetails
