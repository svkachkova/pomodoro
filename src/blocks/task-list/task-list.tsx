import React, { Component } from 'react';

import Form from './form';
import Task from './task';

type TaskItem = {
    id: number,
    text: string,
    checked: boolean
};

type Props = {};
type State = {
    tasks: TaskItem[]
};

const initialTasks: TaskItem[] = [
    {
        id: 0,
        text: 'Focus for 25 minutes',
        checked: false
    },
    {
        id: 1,
        text: 'Break for 5 minutes',
        checked: false
    },
    {
        id: 2,
        text: 'Every three cycles, break for 15 minutes',
        checked: false
    }
];

class TaskList extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            tasks: initialTasks
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSubmit(taskText: string) {
        const tasks = [...this.state.tasks];
        let lastId: number = -1;

        if (tasks.length) {
            lastId = tasks[tasks.length - 1].id;
        }

        const task: TaskItem = {
            id: lastId + 1,
            text: taskText,
            checked: false
        };

        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    handleRemove(taskId: number) {
        const tasks = [...this.state.tasks];
        let taskIndex: number;

        tasks.map((task, index) => {
            if (task.id === taskId) {
                taskIndex = index;
            }
        });

        tasks.splice(taskIndex, 1);

        this.setState({
            tasks: tasks
        });
    }

    render() {
        const { tasks } = this.state;

        const taskList: JSX.Element[] = tasks.map((task: TaskItem) => {
            return <Task key={task.id} task={task} handleRemove={this.handleRemove}/>;
        });

        return (
            <div className='task-list page__task-list'>
                <h2 className="task-list__title">Task List</h2>
                <Form handleSubmit={this.handleSubmit} />
                <ul className='task-list__list'>
                    {taskList}
                </ul>
            </div>
        );
    }
}

export default TaskList;
