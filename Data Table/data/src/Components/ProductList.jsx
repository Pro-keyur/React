import React, { useEffect, useState } from 'react'
import axios from "axios"


function ProductList() {

    const[product,setproduct]=useState([])

   useEffect(()=>{
       
    axios.get('http://localhost:8080/product')
    .then(response => {setproduct(response.data)})
    .catch(error => {console.log(error)})
    
   },[])

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {product.map((e)=>
        <div key={e.id}>
            <h4>{e.id}</h4>
            <img src={e.images} height={450} width={350}/>
            <h1>{e.title}</h1>
        </div>
        )}
    </div>
  )
}

export default ProductList