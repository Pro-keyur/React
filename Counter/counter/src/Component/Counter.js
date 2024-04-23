import {useState} from 'react';

function Counter()
{
        const[value,setValue]=useState(0)

    return(
        <div style={{border:"2px solid black",width:"555px",margin:"auto",backgroundColor:"skyblue",marginTop:"150px",height:"200px"}}>
            <h1 style={{color:"red"}}>Counter</h1>
           
            <h1> {value} </h1>

            <button  onClick={()=>setValue(value+1)} style={{backgroundColor:"teal"}}> Increment </button>
            <button onClick={()=>setValue(0)} style={{backgroundColor:"teal", marginLeft:"15px"}}> Reset </button>
            <button disabled={value==0} onClick={()=>setValue(value-1)} style={{backgroundColor:"teal",  marginLeft:"15px"}}> Decrement </button>

        </div>
    )

}
export default Counter;