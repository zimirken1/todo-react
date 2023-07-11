import React, {useContext, useState} from 'react';
import {TodoContext} from '../context/index';

const TodoList = () => {
    const {todos, completeTodo, removeTodo, editTodo} = useContext(TodoContext);
    const [editId, setEditId] = useState('')

    const handleEdit = (id) => {
        setEditId(id);
    };

    return (<ul>
        {todos.map((todo) => (<li key={todo.id}>
            {editId === todo.id ?
                (<input
                    type="text"
                    value={todo.task}
                    onChange={(e) => editTodo(todo.id, e.target.value)}
                />)
                :
                (<span
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                        }}
                    >
                {todo.task}
                </span>
                )}
            {editId === todo.id ?
                (<button
                    onClick={() => setEditId('')}
                >
                    Сохранить
                </button>)
                :
                (<button
                    onClick={() => handleEdit(todo.id)}
                >
                    Редактировать
                </button>)
            }
            <button onClick={() => completeTodo(todo.id)}>Выполнено</button>
            <button onClick={() => removeTodo(todo.id)}>Удалить</button>
        </li>))}
    </ul>);
};

export default TodoList;