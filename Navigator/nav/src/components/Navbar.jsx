import React from 'react'
import { NavLink,Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Navbar() {

  let links=[
    {
      path:"/",
      title:"Home"
    },
    {
      path:"/about",
      title:"About"
    },
    {
      path:"/products",
      title:"products"
    }
  ]
  
  const handledelete=()=>{
    localStorage.removeItem("token")
  }

  return (
    <div>
        <div style={{display:'flex', justifyContent:'space-around'}}>
    {links.map((el)=>
    (<NavLink style={({isActive})=>
        {
        return  isActive ? {color:"teal",textDecoration:'none'}:{color:'red',textDecoration:'none'}
    }}
    key={el.path} to={el.path}>{el.title}</NavLink>))}
    <Link to="/login"> <Button variant="primary">Login</Button></Link>
    <Link to="/logout"> <Button variant="primary" onClick={()=>handledelete()}>Logout</Button></Link>
    </div>
    </div>
  )
}

export default Navbar
