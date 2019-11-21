import * as React from 'react';
import { mount } from 'enzyme';

import Form from './Form';
import Task from './Task';
import TaskList from './TaskList'; 

describe('<Form />', () => {
    const taskText = 'Hello world';
    const onSubmit = jest.fn();

    it('input changes value', () => {
        const form = mount(<Form handleSubmit={() => {}} />);
        expect(form.find('.form__input').prop('value')).toBe('');

        form.find('.form__input').simulate('change', { target: { value: taskText } });
        form.update();

        expect(form.find('.form__input').prop('value')).toBe(taskText);
    });

    it('submits task', () => {
        const form = mount(<Form handleSubmit={onSubmit} />);

        form.find('.form__input').simulate('change', { target: { value: taskText } });
        form.find('.form__submit').simulate('click');

        expect(form.find('.form__input').prop('value')).toBe('');

        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit).toHaveBeenCalledWith(taskText);        
    });
});

describe('<Task />', () => {
    it('renders with props', () => {
        const task = { id: 0, text: 'Hi', checked: true };
        const taskElem = mount(<Task task={task} checked={() => {}} remove={() => {}} />);

        expect(taskElem.find('[type="checkbox"]').prop('checked')).toBe(task.checked);
        expect(taskElem.find('.task-list__label').text()).toBe(task.text);
    });
});

describe('<TaskList />', () => {
    const labels = [
        'Focus for 25 minutes',
        'Break for 5 minutes',
        'Every three cycles, break for 15 minutes',
        'Hello world'
    ];
    const taskList = mount(<TaskList />);

    it('adds task', () => {
        taskList.find('.form__input').simulate('change', { target: { value: labels[3] } });
        taskList.find('.form__submit').simulate('click');

        expect(taskList.find('.task-list__task')).toHaveLength(4);

        labels.forEach(label => {
            expect(taskList.find('.task-list__list').text()).toMatch(label);
        });
    });

    it('changes task', () => {
        expect(taskList.find('[type="checkbox"]').at(0).prop('checked')).toBe(false);

        taskList.find('[type="checkbox"]').at(0).simulate('change');
        expect(taskList.find('[type="checkbox"]').at(0).prop('checked')).toBe(true);
    });

    it('removes task', () => {
        taskList.find('.task-list__remove-btn').at(3).simulate('click');
        expect(taskList.find('.task-list__task')).toHaveLength(3);

        labels.pop();
        labels.forEach(label => {
            expect(taskList.find('.task-list__list').text()).toMatch(label);
        });
    });
});
