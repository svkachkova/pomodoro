import React, { Component } from 'react';

import Form from './Form';
import Task from './Task';
import { TaskItem, Tasks } from './TaskList.types';

type Props = {};
type State = {
    tasks: Tasks;
};

const initialTasks: Tasks = [
    {
        id: 0.1,
        text: 'Focus for 25 minutes',
        checked: false,
    },
    {
        id: 0.2,
        text: 'Break for 5 minutes',
        checked: false,
    },
    {
        id: 0.3,
        text: 'Every three cycles, break for 15 minutes',
        checked: false,
    },
];

let index = 0;

class TaskList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            tasks: JSON.parse(localStorage.getItem('tasks')) || initialTasks,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleSubmit(text: string) {
        const id = index++;
        const newTasks = [...this.state.tasks, { id, text, checked: false }];

        this.setState({ tasks: newTasks });
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    handleChecked(id: number) {
        const tasks = [...this.state.tasks];

        const newTasks: Tasks = tasks.map((task: TaskItem) => {
            if (task.id === id) task.checked = !task.checked;
            return task;
        });

        this.setState({ tasks: newTasks });
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    handleRemove(id: number) {
        const tasks = [...this.state.tasks];

        const newTasks: Tasks = tasks.reduce((res: Tasks, task: TaskItem) => {
            if (task.id !== id) res.push(task);
            return res;
        }, []);

        this.setState({ tasks: newTasks });
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }

    render() {
        const { tasks } = this.state;

        const taskList: JSX.Element[] = tasks.map((task: TaskItem) => {
            return <Task key={task.id} task={task} checked={this.handleChecked} remove={this.handleRemove} />;
        });

        return (
            <div className="task-list page__task-list">
                <h2 className="task-list__title">Task List</h2>
                <Form handleSubmit={this.handleSubmit} />
                <ul className="task-list__list">{taskList}</ul>
            </div>
        );
    }
}

export default TaskList;
