import React from 'react';
import './App.css';
import {TodoList, NewTodoForm} from "./components"

function App() {
  return (
    <div className="App">
        <TodoList/>
        <NewTodoForm/>
    </div>
  );
}

export default App;
