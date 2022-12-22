import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./todo.css"

export const Todo=()=>{
    const [toDos,setToDos]=useState([])
    const [toDoText,setToDoText]=useState("")
    const [toDoEdit,setToDoEdit]=useState();


    const handleChange=(e)=>{
        setToDoText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
       if(toDoText){
        if(toDoEdit){
            const todoEditItem=toDos.map((item)=>{
                if(item.id===toDoEdit.id){
                    return {...item,text:toDoText}
                }
                return item
            })
            setToDos(todoEditItem)
            setToDoEdit(null)
            setToDoText("")

        }
        else{
            const newtodoitem={
                id:uuidv4().substring(0,5),
                text:toDoText,
                isDone:false
            }
            const updateToDo=[...toDos,newtodoitem]
    
            setToDos(updateToDo)
        }
        
       }
       else{
        alert("Inputa bir sey yaz!!!")
    }
    setToDoText("")
    }

const handleEdit=(todo)=>{
    setToDoEdit(todo)
    setToDoText(todo.text)
}
const handleDelete=(id)=>{

    const deletedItem=toDos.filter(x=>x.id!==id)
    setToDos(deletedItem)
}
    const handleMoveTo=(id)=>{
        const moveto=toDos.map((item)=>{
            if(item.id===id){
                return {...item,isDone:!item.isDone}; 
            }
            return item;
        })
        setToDos(moveto)
    }
    return(

        <div>
            <form onSubmit={handleSubmit}>

                <input placeholder="Write to do" value={toDoText} onChange={handleChange}/>
                <input type="submit" value={toDoEdit ?"Save" : "Add"}/>
                {toDoEdit ? <button onClick={()=>{
            setToDoEdit(null)
            setToDoText("")
        }}>Cancel</button> : ""}

            </form>
       

            <ul>
                {toDos.map((todo,index)=>{
                    return (
                        <li key={index} className={todo.isDone ? "isDone" : ""}>
                             #{todo.id}--{todo.text}
                             <button onClick={()=>handleEdit(todo)}>Edit</button>
                             <button onClick={()=>{
                                handleDelete(todo.id)
                             }}>Delete</button>
                             <button onClick={()=>handleMoveTo(todo.id)}>{todo.isDone ? "Move to undone" : "Move to done"}</button>
                        </li>

                    );
                })}
            </ul>
        </div>
    );
}