import React from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../Service/firebase";
import { signInWithPopup } from "firebase/auth";


function Googlebutton() {
  const handlesignup = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <GoogleButton style={{ marginLeft: "90px" }} onClick={handlesignup} />
    </div>
  );
}

export default Googlebutton;
