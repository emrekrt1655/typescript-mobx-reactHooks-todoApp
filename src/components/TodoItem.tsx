import React from 'react'
import TodoItemClass  from "../stores/todoItem"
import {useStore} from "../helper/useStore"
import {onEnter} from "../helper/useEnterKey";


interface Props {
    todo: TodoItemClass
}

const TodoItem = ({todo}: Props) => {
    const todoList = useStore()
    const [editedTodo, setEditedTodo] = React.useState("")
    const [isEditing, setEdit] = React.useState(false)
    
    const saveText = () => {
        todo.updateText(editedTodo);
        setEdit(false)
        setEditedTodo("");
    }
    
    return (
        <div className="todo-item">
            {
                isEditing ?
                    <div>
                        <input placeholder="Edit your todo"  className="edit-todo-input" type="text" onKeyDown={onEnter(saveText)} onChange={(e) => setEditedTodo(e.target.value)}  />
                        <button className="todo-item-button " style={{width:"80px", height: "40px"}} onClick={saveText}>Save</button>
                        <button className="todo-item-button " style={{width:"80px", height: "40px"}} onClick={()=> setEdit(false)}>Cancel</button>

                    </div> :
                    <div>
                        <span> {todo.text} </span>
                        <input type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}/>
                        <button className="todo-item-button "  onClick={()=> setEdit(true)}>Edit</button>
                        <button  className="todo-item-button" onClick={() => todoList.removeTodo(todo)}>Del</button>
                    </div>
            }
            
        </div>
    )
}

export default TodoItem
