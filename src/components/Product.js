import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartUseValue } from '../provider/CartContext'

export default function Product({ name, price, img, count, id, rate }) {
  const navigate = useNavigate()
  const [state, dispatch] = CartUseValue()

  const addToCart = () => {
    dispatch({
      type: "Add_To_Cart",
      item: {
        id: id,
        name: name,
        price: price,
        img: img,
        count: 1,
      }
    })
  }
  return (
    <div >
      <div className="card m-3 position-relative" style={{ width: "17rem", height: "", overflow: "hidden" }} >
        {/* {  !props.countity?(<p>SOLD OUT</p>):(null)} */}
        {!count && (<p className='sold-out text-white bg-danger fw-3 ps-5 ' style={{ position: "absolute", transform: "skewY(-30deg)", top: "10%", right: "10%", left: "0" }}>SOLD OUT</p>)}

        <div className='card-top'>
          <img src={img} className="card-img-top h-100" alt="..." onClick={() => { navigate(`/product/${id}`) }} />
        </div>
        <div className="card-body text-start">
          <h6 className="card-title fs-6">{name}</h6>
          <p>{Array(parseInt(rate)).fill("⭐")}</p>
          <p className="card-text">{price} $</p>

          <button className="btn btn-warning" style={{ display: count ? "block" : "none" }} onClick={addToCart}>Add To cart </button>
        </div>
      </div>

    </div>
  )
}
