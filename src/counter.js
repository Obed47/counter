import { useState } from "react";
import './counter.css'
function Counter()
{
    //got an error here when the array was a const when incrementing
    //array destructuring
    let [num,setNum]=useState(0);
    //testing if i can get a variable with promt and print it
    //let n=prompt('enter a name');
    function Increment()
    {
        setNum(num+=1);
    }
    //arrow function here
    let Decrement=()=>
    {
        setNum(num-=1);
    }
    let Initialise=()=>
    {
        setNum(0);
    }
    return(
        <div className="events">
            <p>{num}</p>
            <button onClick={Increment}>Increment <span>+</span></button>
            <button onClick={Initialise}>Initialise <span>0</span></button>
            <button onClick={Decrement}>Decrement <span>-</span></button>
        </div>
    );
}
export default Counter;