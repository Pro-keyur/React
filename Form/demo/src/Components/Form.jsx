import React, { useState } from "react";

function Form() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [country, setcountry] = useState("");
  const [married, setmarried] = useState("");


  const handlechangename=(e)=>{
    setname(e.target.value)
  }

  const handlechangeemail=(e)=>{
    setemail(e.target.value)
  }

  const handlechangepass=(e)=>{
    setpass(e.target.value)
  }

  const handlechangecountry=(e)=>{
    setcountry(e.target.value)
  }

  const handlechangemarried=(e)=>{
    setmarried(e.target.value)
  }

  const handlechange=(e)=>{
    e.preventDefault();
    
    let data={
      username:name,
      email:email,
      password:pass,
      select:country,
      married:married
    }
    console.log(data);

  }
  

  return (
    <div>
      <form style={{ marginTop:"200px"}} onSubmit={handlechange}>
        username  :-<input type="text" placeholder="Enter username here......" value={name} onChange={(e)=>handlechangename(e)}/>
        <br /> <br />
        Email :-<input type="text" value={email} placeholder="Enter email here....." onChange={(e)=>handlechangeemail(e)} />
        <br /> <br />
        Password :-<input type="password" value={pass} placeholder="password email here....." onChange={(e)=>handlechangepass(e)}/>
        <br /> <br />
        country :-<select value={country} onChange={(e)=>handlechangecountry(e)}>
          select your country
          <option value="India" key="">
            India
          </option>
          <option value="US" key="">
            US
          </option>
          <option value="Canada" key="">
            Canada
          </option>
        </select>
        <br /> <br />
        ismarried <input type="checkbox" value={married} onChange={(e)=>handlechangemarried(e)}/>
        <br /> <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
