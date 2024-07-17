/* eslint-disable no-undef */
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../Services/Firebase";
import { useEffect, useState } from "react";
let initialstate = {
  image: "",
  price: "",
  description: "",
  category: "",
  title: "",
};

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [formdata, setFormdata] = useState(initialstate);
  const [id, setId] = useState(0);
  const { image, price, description, category, title } = formdata;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  // const fatchdatafromfirestore = () => {
  //   getDocs(collection(db, "Product"))
  //     .then((res) => {
  //       let filetrdata = res.docs.map((el) => ({ ...el.data(), id: el.id }));
  //       console.log(filetrdata);
  //       setProduct(filetrdata);
  //     })

  //     .catch((err) => console.log(err));
  // };

  const fatchdatafromfirestore = async () => {
    try {
      const datafromdb = await getDocs(collection(db, "Product"));
      // console.log(datafromdb);
      if (datafromdb) {
        let filetrdata = datafromdb.docs.map((el) => ({
          ...el.data(),
          id: el.id,
        }));
        // console.log(filetrdata);
        setProduct(filetrdata);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Product", id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetSingledata = async (id) => {
    setId(id);
    try {
      let res = await getDoc(doc(db, "Product", id));
      let filterdata = res.data();
      setFormdata(filterdata);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    console.log(id);
    try {
      await updateDoc(doc(db, "Product", id), formdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fatchdatafromfirestore();
  }, [product]);

  return (
    <div>
      <hr />
      <div style={{ textAlign: "center", backgroundColor:"skyblue"}}>
        <h1 style={{color:"teal"}}>Update Form</h1>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={image}
            name="image"
            placeholder="Enter Image Here"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={title}
            name="title"
            placeholder=" Enter title Here"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={price}
            name="price"
            placeholder="Enter price Here"
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            value={description}
            name="description"
            placeholder=" Enter description Here"
          />
          <br />
          <br />
          <select
            value={category}
            name="category"
            onChange={(e) => handleChange(e)}
          >
            <option value="" hidden>
              Category
            </option>
            <option value="men's clothing">Men</option>
            <option value="women's clothing">Women</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>

      <hr />
      <h1 style={{ textAlign: "center" }}>Product</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {product.length > 0 &&
          product.map((el) => (
            <div
              key={el.id}
              style={{ border: "1px solid black", textAlign: "center" }}
            >
              <img src={el.image} height={250} width={250} />
              <h4>{el.title}</h4>
              <p style={{ textAlign: "center" }}>Price : {el.price}/-</p>
              <p>{el.description}</p>
              <p>{el.category}</p>
              <br />

              {/* edit and delete button */}
              <div>
                <button onClick={() => handleDelete(el.id)}>Delete</button>
                <button
                  style={{ margin: "5px" }}
                  onClick={() => handleGetSingledata(el.id)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
