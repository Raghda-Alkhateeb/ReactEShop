import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../index.css'

export default function ProductDetails() {
 
  const [product, setProduct] = useState({})
  let params = useParams()
  const productId = params.id
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data)
        console.log(res)
      })

      .catch((err) => { console.log(err) })

  }, [productId])

  const rate = product.rating ? parseInt(product.rating.rate) : null;
  const category = product.category?product.category.charAt(0).toUpperCase() + product.category.slice(1):null; 



  return (
    <>
   
      <h2 className='py-2'>{category}</h2>
      <div className='product-detail container bg-light round-5  mx-auto '>
        <div className=' row align-items-center pt-5'>
          <div className='col-12 col-md-6 h-100 '>
            <img className='img-thumbnail  w-75' src={product.image} alt='productImage' />
          </div>
          <div className='col-12 col-md-6 text-start '>
            <h3>{product.title}</h3>
            <p className='product-description pe-4 '>{product.description}</p>
            <div className='d-flex justify-content-between me-5 pe-2'>
              <p>{rate && Array(rate).fill("⭐")}</p>
              <strong> {product.price}$</strong>
            </div>
            <div className="text-center mt-5"> 

            <button className='btn btn-warning ms-auto'>Add To Cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
