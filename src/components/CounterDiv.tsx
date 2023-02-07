import React, {useState, useEffect} from "react";

const CounterDiv=()=>{
    const [count, setCount] = useState<number>(0);
    const [stopper, setStopper] = useState<Boolean>(true);

    useEffect(()=>{
        console.log(count);
    }, [count]);

    return(
        <div>
            <button onClick={()=>{
                stopper&&setCount(count+1);
                
            }}>Click the Button</button>
            <p style={{ color: stopper ? 'black' : 'red' }}>{count}</p>
            <button onClick={()=>{
                setStopper(!stopper);
                
            }}>stop this counting</button>
        </div>
    )
}

export default CounterDiv;