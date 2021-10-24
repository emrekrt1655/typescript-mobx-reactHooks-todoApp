import React, {useState} from "react"
import { useStore } from "../helper/useStore"
import { onEnter } from "../helper/useEnterKey"
import "../App.css"




export const NewTodoForm = () => {
    const [newTodo, setNewTodo] = useState("")
    const todoList = useStore()

    const addNewTodo = () => {
        todoList.addTodo(newTodo)
        setNewTodo("")
    }


    return (
        <div className="new-todo-form">
            <input className="new-todo-input" placeholder="New Todo" value={newTodo}  type="text" onKeyDown={onEnter(addNewTodo)} onChange={(e) => setNewTodo(e.target.value)}  />
            <button className="new-todo-button" onClick={addNewTodo}>Add Todo</button>

        </div>
    )
}





