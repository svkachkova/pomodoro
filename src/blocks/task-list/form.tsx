import React, { Component } from 'react';

type Props = {
    handleSubmit: (task: string) => void;
};

type State = {
    task: string;
};

class Form extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            task: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            task: event.target.value,
        });
    }

    submitForm = () => {
        event.preventDefault();

        if (this.state.task.trim()) {
            this.props.handleSubmit(this.state.task);
            this.setState({
                task: '',
            });
        }
    };

    render() {
        return (
            <form className="task-list__form form">
                <input
                    className="form__input"
                    type="text"
                    value={this.state.task}
                    placeholder="Type a task..."
                    onChange={this.handleChange}
                />
                <button className="form__submit" onClick={this.submitForm}>
                    Add
                </button>
            </form>
        );
    }
}

export default Form;
