import React  from 'react'
import GetProduct from '../components/GetProduct'

export default function Mens() {

return (
  <div className='products container d-flex justify-content-center flex-wrap my-5'>
     <GetProduct url={"https://fakestoreapi.com/products/category/men's clothing"}/>
    </div>
  )
}
