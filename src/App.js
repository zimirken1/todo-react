import React from "react";
import './styles/App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./context";

function App() {
    return (
        <TodoContextProvider>
            <TodoForm/>
            <TodoList/>
        </TodoContextProvider>
    );
}

export default App;
