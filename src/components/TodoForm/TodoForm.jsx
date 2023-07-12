import React, {useState, useContext} from 'react';
import {TodoContext} from '../../context';
import '../../styles/TodoForm.css'
import {FiPlus} from "react-icons/fi";
import TaskInput from "./TaskInput";

const TodoForm = () => {
    const {addTodo} = useContext(TodoContext);
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask('');
    };

    return (
        <div className="form-wrapper">
            things to do
            <form onSubmit={handleSubmit} className="todo-form">
                <TaskInput value={task} onChange={handleChange} />
                <button type="submit" disabled={!task}>
                    <FiPlus size={30} className="todo-form__add-btn" />
                </button>
            </form>
        </div>
    );
};

export default TodoForm;
