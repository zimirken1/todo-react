import React, {useContext} from 'react';
import {TodoContext} from '../context/index';
import TodoItem from "./TodoItem";
import '../styles/TodoList.css'

const TodoList = () => {
    const {todos} = useContext(TodoContext);

    return (<ul className={"todo-list"}>
        {todos.map((todo) => <TodoItem todo = {todo} key = {todo.id}/>)}
    </ul>);
};

export default TodoList;