import { useReducer } from "react"
import ReactDOM from "react-dom";

const initialstate={
    counter:0
}

function reducer(state,action){
    switch(action.type){
        case "ADD" :{ 
            return {counter : state.counter+action.payload}
        }
        case "ADD" :{
            return { counter : state.counter+action.payload}
        }
    }
}

function Counter() {

    const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
        <h1>Counter : {state.counter}</h1>
         <button onClick={()=>dispatch({type:"ADD",payload:1})} style={{marginRight:"10px"}}>ADD</button>
         <button disabled={state.counter==0} onClick={()=>dispatch({type:"ADD",payload:-1})}>SUB</button>
    </div>
  )
}

export default Counter