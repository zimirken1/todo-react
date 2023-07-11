import React, {useContext, useState} from 'react';
import {TodoContext} from '../context/index';
import TodoItem from "./TodoItem";

const TodoList = () => {
    const {todos} = useContext(TodoContext);

    return (<ul>
        {todos.map((todo) => <TodoItem todo = {todo} key = {todo.id}/>)}
    </ul>);
};

export default TodoList;