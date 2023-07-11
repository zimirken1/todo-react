import {createContext, useState} from "react";
export const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        const newTodo = {
            id: Date.now(),
            task,
            completed: false,
        };

        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const completeTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        );
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const editTodo = (id, task) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task };
                }
                return todo;
            })
        );
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, completeTodo, removeTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;

