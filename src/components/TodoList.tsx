import React from "react";
import { useStore } from "../helper/useStore"
import TodoItem from "./TodoItem";
import { useObserver } from "mobx-react";

export const TodoList = () => {
    const todoList = useStore();

    let openTodosCount = todoList.openTodos.length
    let finishedTodosCount = todoList.finishedTodos.length




    return useObserver(() => (
        <div className="todo-list">
            <h1> TODOS </h1>
            <div className="open-todos">
                <h2 style={{display:"inline"}} >Open Todos</h2> <span> {openTodosCount} left </span>
                {todoList.openTodos.map(todo => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} /> )}
            </div>
            <div className="finished-todos"> 
                <h3 style={{display:"inline"}}>Finished Todos</h3> <span> {finishedTodosCount} pieces </span>
                {todoList.finishedTodos.map(todo => <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} /> )}
            </div>

        </div>
    ));
        
}
