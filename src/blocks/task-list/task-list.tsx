import React, { Component } from 'react';

import Form from './form';

type Props = {};
type State = {
    tasks: string[]
};

const initialTasks: string[] = [
    'Focus for 25 minutes',
    'Break for 5 minutes',
    'Every three cycles, break for 15 minutes'
];

class TaskList extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            tasks: initialTasks
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(task: string) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    render() {
        const { tasks } = this.state;

        const taskList: JSX.Element[] = tasks.map((task: string) => {
            return (
                <li key= {task.trim()} className='task-list__task'>
                    {task}
                </li>
            );
        });

        return (
            <div className="task-list page__task-list">
                {/* <h2 className="task-list__title">Task List</h2> */}
                <Form handleSubmit={this.handleSubmit} />
                <ul className="task-list__list">
                    {taskList}
                </ul>
            </div>
        );
    }
}

export default TaskList;
