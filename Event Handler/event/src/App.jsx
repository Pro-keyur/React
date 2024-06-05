import { useState } from 'react'
import './App.css'
import Post from './Components/Post'

function App(id,title,body) {
  const [data,setdata] = useState ([])

  const handledata = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>setdata(data))
    .catch((err)=>console.log(err))
  }
    

  return (
    <div className="App">
      <button onClick={handledata} style={{backgroundColor:"skyblue",color:"white",marginTop:"5px"}}>GET POST</button>
    {data.map((el)=><Post id={el.id} title={el.title} body={el.body} />)}
    </div>
  );
}

export default App;
