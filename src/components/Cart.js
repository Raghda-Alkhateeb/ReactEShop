import React from 'react'
import  image from  '../assets/img/pexels-sora-shimazaki-5926217.jpg'
import { CartUseValue } from '../provider/CartContext'
import OrderSummary from './OrderSummary'
export default function Cart() {
  const [{cart}, dispatch] =CartUseValue()
  console.log(cart)
  
  return (
    <div className='cart'>
      <div className='cart-img '>
        <img src={image }alt='....' className='w-100  h-100'/>
      </div>
      <div className='cart-body mx-5 row'>

      <div className='cart-info col-12 col-md-8'>
        {cart.map((product)=>{
          return (
            <div className='cart-item row mb-4 bg-light' key={product.id}>
              <div className='cart-item-img col-4 bg-white '>
                <img src={product.img} alt='....' className='w-100 h-100'/>
              </div>
              <div className='cart-item-info col-8 text-start p-3'>
                <h4>{product.name}</h4>
               <strong>Price:{product.price}$</strong>
                <p>Quantity:<input type='number'min={0} value={product.count} onChange={(e)=>{
                  dispatch({
                    type: "Update_Count",
                    id: product.id,
                    count: parseInt(e.target.value),})
                }}/> </p>
                <button className='btn btn-warning' onClick={()=>{dispatch({type:"Remove-From-Cart", id:product.id})}}>Rmove From Cart</button>
              </div>
              </div>)

        })

        }
        {console.log(cart)}
      </div>
      <div className='cart-total col-12 col-md-4'>
        {<OrderSummary/>}
      </div>
      </div>
    </div>
  )
}
