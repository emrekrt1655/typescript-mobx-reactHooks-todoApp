import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { TodoList } from "../stores/todoList";

export const useStore = () : TodoList  => useContext(StoreContext)
//export const useStore = ()   => useContext(StoreContext)


