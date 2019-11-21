import React from 'react';

import { TaskItem } from './TaskList.types';

type Props = {
    task: TaskItem;
    checked: (id: number) => void;
    remove: (id: number) => void;
};

function Task(props: Props) {
    const { task, checked, remove } = props;

    return (
        <li className="task-list__task">
            <label className={'task-list__label' + (task.checked ? ' task-list__label_line-through' : '')}>
                <input
                    className="task-list__checkbox"
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => checked(task.id)}
                />
                {task.text}
            </label>
            <button className="task-list__remove-btn" onClick={() => remove(task.id)}>
                &times;
            </button>
        </li>
    );
}

export default Task;
