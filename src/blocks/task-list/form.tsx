import React, { FunctionComponent, Component } from 'react';

type Props = {
    handleSubmit: (task: string) => void
};

type State = {
    task: string
};

class Form extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            task: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            task: event.target.value
        });
    }

    submitForm = () => {
        event.preventDefault();

        this.props.handleSubmit(this.state.task);
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <form>
                <input 
                    type='text'
                    value={this.state.task}
                    placeholder='Type a task...'
                    onChange={this.handleChange}
                />
                <input 
                    type='submit'
                    value='Add'
                    onClick={this.submitForm}
                />
            </form>
        );
    }
};

export default Form;
