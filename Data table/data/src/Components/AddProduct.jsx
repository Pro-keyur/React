import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Addproduct() {
    const formData =
    {
        image: "",
        title: "",
        price: "",
        category: ""
    }
    const [get, setGet] = useState(formData)
    const handleChnage = (e) => {
        const { name, value } = e.target
        setGet((pre) => ({ ...pre, [name]: value }))
    }

    const {
        image,
        title,
        price,
        category,
    }=get



    const handleSubmit = (e) => {
        e.preventDefault();
        if(image == "" ||title ==""||price == "" ||category == "")
            {
                alert("data is black")
            }
          else
          {
            axios.post("http://localhost:8080/product", get)
            .then(res => alert('Data posted:', res.data))
            .catch(error => console.error('Error posting data:', error))  
          }
    }
    return (
        <div>

        {/* Form For add data  */}

        <Link className='linkto' to="/" ><button style={{color:"teal"}}> Back to Home</button> </Link>
            <form action="" onSubmit={handleSubmit} style={{marginTop:"25px"}}>
                <input className='post' type="text" name='image' onChange={handleChnage} value={get.image} placeholder='Enter image Url here' /> <br /> <br />
                <input className='post' type="text" name='title' onChange={handleChnage} value={get.title} placeholder='Enter Title here ' /><br /> <br />
                <input className='post' type="text" name='category' onChange={handleChnage} value={get.category} placeholder='Enter Category here' /> <br /> <br />
                <input className='post' type="text" name='price' onChange={handleChnage} value={get.price} placeholder='Enter Price here' /> <br /> <br />
                <input className='post' type="Submit" />
            </form>
        </div>
    )
}

export default Addproduct;

