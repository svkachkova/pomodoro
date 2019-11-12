import React, { Component } from 'react';

import { TaskItem } from './task-list.types';

type Props = {
    task: TaskItem,
    handleRemove: (taskId: number) => void
};

type State = {};

class Task extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.removeTask = this.removeTask.bind(this);
    }

    removeTask = () => {
        this.props.handleRemove(this.props.task.id);
    }

    render() {
        const { task } = this.props;

        return (
            <li className='task-list__task'>
                <label>
                    <input 
                        className="task-list__checkbox"
                        type="checkbox"
                        checked={task.checked}
                    />
                    {task.text}
                </label>
                <button 
                    className="task-list__remove-btn" 
                    onClick={this.removeTask}
                >x</button>
            </li>
        );
    }
};

export default Task;