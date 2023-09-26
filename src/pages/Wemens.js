import React from 'react'
import GetProduct from '../components/GetProduct'

export default function Wemens() {
  return (
    <div className='products container d-flex justify-content-center flex-wrap my-5'>
    <GetProduct url={"https://fakestoreapi.com/products/category/women's clothing"}/>
   </div>
  )
}
