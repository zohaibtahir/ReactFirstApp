import { useState } from "react";
import Listitem from "./ListItem";

export default function Todo(){
    
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    function handleinput(event){
        setTodo(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={todo} onChange={handleinput} />
                <button type="submit">Add</button>
            </form>

            <div>
                    {todoList.map((item,index)=>(
                        <Listitem key={index} value={item}></Listitem>
                    ))}
                
            </div>
        </div>
    )
}