import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from '../components/Product'

export default function Home() {
  const [category, setCategory] = useState("all")
  const [url, setUrl] = useState("https://fakestoreapi.com/products")
  const [products, setProducts] = useState([])

  const getCategory = (e) => {
    setCategory(e.target.value)
  
  }
  useEffect(()=>{
    if (category === "all") {
      setUrl("https://fakestoreapi.com/products")
    }
    else { setUrl(`https://fakestoreapi.com/products/category/${category}`) }
  },[category])

  useEffect(() => {
        axios.get(url)
          .then((res) => {
            console.log(res.data)
            setProducts(res.data)
          })
          .catch ((err)=> { console.error(err)})
    console.log("url", url)
  }, [url])

  const listProducts = products ? products.map((product) => {
    return <Product
      key={product.id}
      id={product.id}
      name={product.title}
      img={product.image}
      price={product.price}
      count={product.rating.count}
      rate={product.rating.rate}
    />
  }) : null

  return (
    <>
      <div className='d-flex justify-content-between mt-5 mx-5'>
        <h1 className=' text-start ms-5'>Welcome In Our Shop</h1>
        <select className='category bg-warning me-5 ' value={category} onChange={getCategory}>
          <option value="all" >All</option>
          <option value="men's clothing">Mens</option>
          <option value="women's clothing">Wemens</option>
          <option value="jewelery">Jewelary</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className='products d-flex justify-content-center flex-wrap mb-5 mt-3 mx-5'>

        {listProducts}
      </div>
    </>
  )
}
