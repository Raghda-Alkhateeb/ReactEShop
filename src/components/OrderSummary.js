import React from 'react'
import { CartUseValue } from '../provider/CartContext'

export default function OrderSummary() {
    const[{cart},dispatch]=CartUseValue()

const totalPrice = cart?.reduce((acc,item)=> acc +( item.price*item.count)
,0)
  return (
    <div>
        <div className="card text-start">
  <h5 className="card-header">Order Summery</h5>
  <div className="card-body">
    <p className="card-title">Total Price:</p>
    <strong className="card-text ">{totalPrice}$</strong><br/>
    <button className="btn btn-warning mt-3 w-100">Order Confirmation & Payment</button>
  </div>
</div>
    </div>
  )
}
