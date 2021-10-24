import { createContext } from "react";
import { TodoList } from "../stores/todoList";


export const StoreContext =createContext<TodoList>({} as TodoList) 
//export const StoreContext =createContext({} as TodoList)
export const StoreProvider = StoreContext.Provider


