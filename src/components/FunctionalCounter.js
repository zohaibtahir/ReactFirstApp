import {useState} from 'react';

function FunctionalCounter(){

    const [counter, setCounter] = useState(0);

    const increament = ()=> {
        setCounter(counter + 1);
    }
    return(
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={increament}>Increase</button>
        </div>

    )
}

export default FunctionalCounter;