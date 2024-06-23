import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [productdata, setProductsdata] = useState([]);

  const { id } = useParams();

  axios
    .get(`http://localhost:8080/product/${id}`)
    .then((res) => setProductsdata(res.data))
    .catch((err) => console.log(err));

  return (
    <div style={{ border: "1px solid black" }}>
      <div style={{ margin: "40px" }}>
        <img src={productdata.image} alt="" height={350} />

        <h3>{productdata.title}</h3>

        <h4>{productdata.category}</h4>

        <h5>price :- {productdata.price}</h5>
      </div>
    </div>
  );
}

export default ProductDetails;
