import { useState } from "react";


export const Counter=()=>{

    const[counter,setCounter]=useState(0);

const handleDecrement=()=>{
    setCounter((d)=>d-1)
    setCounter((d)=>d-1)
    setCounter((d)=>d-1)
    setCounter((d)=>d-1)
}
const handleIncrement=()=>{
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
}

    return(
        <div>
        <button onClick={handleDecrement}>Decrement</button>
        {counter}
        <button onClick={handleIncrement}>Increment</button>
        </div>

    );
}