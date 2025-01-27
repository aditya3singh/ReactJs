import { useState } from "react";
export default function Inccounterdec() {
    let [counti, setCounti]  = useState(0);
    let [countd, setCountd]  = useState(0);

    let incCount = () =>{
        setCounti(counti + 1);        
    }
    
    let decCount = () =>{
        setCountd(countd - 1);
    }

    return(
        <>
        <h3>Count = {counti}</h3>
        <button onClick={incCount}>Increase</button>
        <h3>Count = {countd}</h3>
        <button onClick={decCount}>Decrease</button>
        </>
    );
}
