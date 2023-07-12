import React, {useState, useEffect} from 'react';

const TaskInput = ({value, onChange}) => {
    const [dirty, setDirty] = useState(false);
    const [error, setError] = useState('');

    function setPlaceholder(text) {
        let input = document.getElementById('task');
        input.placeholder = `${text}`;
    }

    useEffect(() => {
        const validateTask = (task) => {
            if (!task) {
                return 'Введите задачу';
            }
            // const re = /^[a-zA-Z]{3,}$/;
            // if (!re.test(String(task).toLowerCase())) {
            //     return 'Некорректный ввод';
            // }
            return '';
        }
        setError(validateTask(value));
    }, [value]);

    return (
        <div className={"form-valid"}>
            {/*{dirty && error && <div className={"form-valid__error"}>{error}</div>}*/}
            {dirty && error && setPlaceholder(error)}
            <input
                className={"todo-form__input"}
                onBlur={() => setDirty(true)}
                id="task"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default TaskInput;