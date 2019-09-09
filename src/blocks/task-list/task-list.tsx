import React, { Component } from 'react';

// type Props = { name: string };
// const Hello: FunctionComponent<Props> = ({ name }) => <h1>Hello, {name}</h1>;

class TaskList extends Component {
    render() {
        return (
            <div className="task-list page__task-list">
                <h2 className="task-list__title">Task List</h2>
                <ul className="task-list__list">
                    <li className="task-list__task">Focus for 25 minutes</li>
                    <li className="task-list__task">Break for 5 minutes</li>
                    <li className="task-list__task">Every three cycles, break for 15 minutes</li>
                </ul>
            </div>
        );
    }
}

export default TaskList;
