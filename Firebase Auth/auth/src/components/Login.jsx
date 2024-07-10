import React, { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../Service/firebase";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={(e)=>handlesubmit(e)}>
        <input
          onChange={(e) => setemail(e.target.value)}
          type="text"
          placeholder=" Enter email here"
        />
        <br />
        <br />
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Enter password here"
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
