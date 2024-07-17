import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="App" style={{textAlign:"center"}}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Link style={{textDecoration:"none"}} to={"/login"}>Login</Link>
        <Link style={{textDecoration:"none"}} to={"/dashboard"}>Dashboard</Link>
        <Link style={{textDecoration:"none"}} to={"/post"}>Post</Link>
      </div>
    </div>
  );
};

export default Navbar;
