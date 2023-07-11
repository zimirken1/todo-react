import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/index';

const TodoForm = () => {
    const [task, setTask] = useState('');
    const { addTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Введите задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default TodoForm;