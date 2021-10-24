import {action, computed, makeObservable, observable} from "mobx"
import TodoItem from "./todoItem"


export class TodoList {
    @observable.shallow todos: TodoItem[] = []


    constructor(list: string[]) {
        makeObservable(this);
        list.forEach(this.addTodo);


    }

    @action 
    addTodo = (text: string) => {
        this.todos.push(new TodoItem(text))
    }

    @action
    removeTodo = (todo: TodoItem) => {
        this.todos = this.todos.filter(tod => tod.id !== todo.id)
    }

    @computed
    get finishedTodos() : TodoItem [] {
        return this.todos.filter(todo => todo.isDone)
    }

    @computed
    get openTodos(): TodoItem[] {
        return this.todos.filter(todo => !todo.isDone)
    }

    

}