import { useState } from "react";

export default function ConditionalComponent(){
    const prices = [10,20,34,50,69];
    const [display, setDisplay] = useState(prices);

    const setDisplayValue = () =>{
        if(display){
            setDisplay(false);
        }else{
            setDisplay(true);
        }
        
    }

    return (
        <div>
            {display ? (<div>Display is true</div>) : (<div>Display is false</div>)}
            <div>
                <button onClick={setDisplayValue}>Click me</button>
            </div>
            
        </div>
    )

}