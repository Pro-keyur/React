import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductList() {
  const [productdata, setproductdata] = useState([]);
  const [filter, setfilter] = useState(null);
  const [sort, setsort] = useState(null);
  const [page, setpage] = useState(1);
  const [search, setsearch] = useState("");

  const fetchdata = () => {
    axios
      .get("http://localhost:8080/product", {
        params: {
          category: filter,
          _sort: "price",
          _order: sort,
          _limit: 6,
          _page: page,
          q: search,
        },
      })
      .then((res) => setproductdata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchdata();
  }, [filter, sort, page, search]);

  const handledelete = (id) => {
    axios
      .delete(`http://localhost:8080/product/${id}`)
      .then((res) => {
        console.log("Data deleted:", res.data);
        alert("Data is Deleted");
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <div>
      <div style={{ backgroundColor: "skyblue" }}>
        <h1 style={{ color: "black" }}>PRODUCT</h1>
      </div>

      {/* Add Product Button */}
      <div>
        <Link to={"/addproduct"}>
          <button style={{ color: "teal", border: "1px solid black" }}>
            Add Product
          </button>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "15px",
        }}
      >
        {/* Category for Filtering Product */}
        <select onChange={(e) => setfilter(e.target.value)}>
          <option hidden>select category</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>

        {/* Product search button */}
        <div>
          Search :{" "}
          <input
            type="text"
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </div>

        {/* sorting base on price asending or desceding */}
        <div>
          <button onClick={() => setsort("asc")}>LowtoHigh</button>
          <button onClick={() => setsort("desc")}>HightoLow</button>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        {/* product maping */}
        {productdata.map((e) => (
          <Link to={`/productdetails/${e.id}`} key={e.id}>
            <div key={e.id} style={{ border: "2px solid black" }}>
              <img
                src={e.image}
                alt="title"
                height={150}
                width={150}
                style={{ marginTop: "15px" }}
              />
              <h4>{e.title}</h4>
              <h5>Category :- {e.category}</h5>
              <h5>Price := ${e.price}</h5>
              <button
                onClick={() => handledelete(e.id)}
                style={{ border: "1px solid teal", marginBottom: "10px" }}
              >
                Delete
              </button>
              <Link className="linkto" to={`/edit/${e.id}`}>
                <button
                  style={{
                    border: "1px solid teal",
                    marginLeft: "15px",
                    marginBottom: "10px",
                  }}
                >
                  Edit
                </button>
              </Link>
            </div>
          </Link>
        ))}
      </div>

      {/* pagination */}
      <div style={{ marginTop: "10px" }}>
        <button disabled={page == 1} onClick={() => setpage(page - 1)}>
          Prev
        </button>
        <button disabled>{page}</button>
        <button disabled={page == 4} onClick={() => setpage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductList;
