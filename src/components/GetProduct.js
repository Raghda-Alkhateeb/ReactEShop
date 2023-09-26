import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import Product from './Product'


export default function GetProduct(props) {
    const[products,setProducts]=useState([])

    useEffect(()=>{
      
        const getData= async()=>{
          try{
        await axios.get(props.url)
        .then ((res)=>{
        console.log(res.data)
        setProducts(res.data)
         })
        }catch(err){
        console.error(err)
       }
      }
      getData()
    },[])
    
    const listProducts=products.map((product)=>{
      return <Product
      key={product.id}
      id={product.id}
      name={product.title}
      img={product.image}
      price={product.price}
      count={product.rating.count}
      rate={product.rating.rate}
      />
    })
    
    return (
      <div className='products container d-flex justify-content-center flex-wrap my-5'>
         {listProducts}
        </div>
      )
}
