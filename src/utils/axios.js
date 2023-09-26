// useEffect(()=>{
//     const getData= async()=>{
//       await axios.get('https://fakestoreapi.com/products')
//     .then((res)=>{
//       console.log(res.data)
//       setProducts(res.data)
//      .catch((err)=>{
//       console.error(err)
//      }) 
  
//     })}
//     getData()
//   },[])


//   useEffect(()=>{
  
//     const getData= async()=>{
//       try{
//     await axios.get('https://fakestoreapi.com/products')
//     .then ((res)=>{
//     console.log(res.data)
//     setProducts(res.data)
//      })
//     }catch(err){
//     console.error(err)
//    }
//   }
//   getData()
// },[])