import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Editproduct() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/${id}`)
      .then((res) => {
        const data = res.data;
        setImage(data.image);
        setTitle(data.title);
        setPrice(data.price);
        setCategory(data.category);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateData = {
      image,
      title,
      price,
      category,
    }

    ;

    axios
      .put(`http://localhost:8080/product/${id}`, updateData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{border:"2px solid black", height:"350px",width:"350px"}}>

        <h3 style={{color:"teal"}}>Edit Item</h3>

      <form action="" onSubmit={handleSubmit}>
       Image Url  : <input
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          placeholder="Enter image Url"
        /> <br /><br />
       Title  :  <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Enter Title"
        /><br /><br />
        Category  : <input
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          placeholder="Enter Category"
        /><br /><br />
       Price  :  <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder="Enter Price"
        /><br /><br />
        <input type="Submit" />
      </form>

      <Link className='linkto' to="/" ><button style={{color:"teal",marginTop:"20px"}}> Back to Home</button> </Link>

    </div>
  );
}

export default Editproduct;
