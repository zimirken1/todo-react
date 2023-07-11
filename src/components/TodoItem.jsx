import React, {useContext, useState} from 'react';
import {TodoContext} from "../context";
import '../styles/TodoItem.css'
import {FiCheck, FiEdit, FiTrash2} from "react-icons/fi";

const TodoItem = ({todo}) => {

    const {completeTodo, removeTodo, editTodo} = useContext(TodoContext);
    const [editId, setEditId] = useState('')

    const handleEdit = (id) => {
        setEditId(id);
    };

    return (
        (<li className={"todo-list__item"}>
            <button onClick={() => completeTodo(todo.id)}><FiCheck size={30} className={"todo-item__complete-btn"}/>
            </button>
            <div className={"item-text"}>
                {editId === todo.id ?
                    (<input
                        type="text"
                        value={todo.task}
                        onChange={(e) => editTodo(todo.id, e.target.value)}
                    />)
                    :
                    (<span
                            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                        >
                {todo.task}
                </span>
                    )}
            </div>
            {editId === todo.id ?
                (<button
                    className={"todo-item__save-btn"}
                    onClick={() => setEditId('')}
                >
                    Сохранить
                </button>)
                :
                (<button
                    onClick={() => handleEdit(todo.id)}
                >
                    <FiEdit size={30} className={"todo-item__edit-btn"}/>
                </button>)
            }
            <button onClick={() => removeTodo(todo.id)}><FiTrash2 size={30} className={"todo-item__remove-btn"}/>
            </button>
        </li>)
    );
};

export default TodoItem;