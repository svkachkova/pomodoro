import React, { Component } from 'react';

import { TaskItem } from './task-list.types';

type Props = {
    task: TaskItem;
    checked: (id: number) => void;
    remove: (id: number) => void;
};

type State = {};

class Task extends Component<Props, State> {
    render() {
        const { task, checked, remove } = this.props;

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
}

export default Task;
