import React from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

export const Project=()=> {

    const [product,setproduct]=useState({})
  

    const {id}=useParams()
  
  
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((response) => setproduct(response.data))
    .catch((error) => console.log(error));
    return (
      <div>
        <h1 style={{color:"teal"}}>Description</h1>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image}/>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           {product.description}
          </Card.Text>
          <Card.Text>
           {product.category}
          </Card.Text>
          <Card.Text>
           {product.price}
          </Card.Text>
          <Card.Text>
           {product?.rating?.rate}
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      </div>
    )
}


