import axios from "axios";
import React from "react";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

function Products() {

    const [productdata, setProductsdata] =useState([]);

  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => setProductsdata(res.data))
    .catch((err) => console.log(err));

  return (
    <div>
        <h2 style={{color:"teal",marginTop:"25px"}}>PRODUCTS</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",marginTop:"20px",gap:"10px"}}>
      {productdata.map((e)=>(
        <Link to={`/project/${e.id}`} key={e.id}>
        <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={e.image} height={350} width={200}/>
        <Card.Body>
          <Card.Title>{e.title}</Card.Title>
          <Card.Text>
           {e.price}
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    ))}
      </div>
    </div>
  );
}

export default Products;
