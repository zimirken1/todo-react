import React, {useState, useContext, useEffect} from 'react';
import {TodoContext} from '../context/index';
import '../styles/TodoForm.css'
import {FiPlus} from "react-icons/fi";

const TodoForm = () => {
    const {addTodo} = useContext(TodoContext);
    const [task, setTask] = useState('');
    const [taskDirty, setTaskDirty] = useState(false);
    const [taskError, setTaskError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (taskError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [taskError])

    const blurHandler = (e) => {
        if (e.target.name === 'task') {
            setTaskDirty(true)
        }
    }

    const taskHandler = (e) => {
        setTask(e.target.value);
        const re = /^[a-zA-Z]{3,}$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setTaskError('Некорректный ввод')
        } else {
            setTaskError("")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask('');
    };

    return (
        <div className={"form-wrapper"}>
            things to do
            <div className={"form-valid"}>
                {(taskDirty && taskError) && <div>{taskError}</div>}
            </div>
            <form
                onSubmit={handleSubmit}
                className={"todo-form"}
            >
                <input
                    onBlur={(e) => blurHandler(e)}
                    name={'task'}
                    className={"todo-form__input"}
                    type="text"
                    value={task}
                    onChange={(e) => taskHandler(e)}
                    placeholder="Введите задачу"
                />
                <button disabled={!formValid} type="submit"><FiPlus size={30} className={"todo-form__add-btn"}/>
                </button>
            </form>
        </div>
    );
};

export default TodoForm;