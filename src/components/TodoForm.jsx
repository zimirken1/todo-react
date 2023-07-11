import React, {useState, useContext} from 'react';
import {TodoContext} from '../context/index';
import '../styles/TodoForm.css'
import {FiPlus} from "react-icons/fi";

const TodoForm = () => {
    const [task, setTask] = useState('');
    const {addTodo} = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask('');
    };

    return (
        <div className={"form-wrapper"}>
            things to do
            <form
                onSubmit={handleSubmit}
                className={"todo-form"}
            >
                <input
                    className={"todo-form__input"}
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Введите задачу"
                />
                <button type="submit"><FiPlus size={30} className={"todo-form__add-btn"}/></button>
            </form>
        </div>
    );
};

export default TodoForm;