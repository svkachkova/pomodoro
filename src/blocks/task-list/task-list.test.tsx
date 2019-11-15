import * as React from 'react';
import { shallow, mount, render } from 'enzyme';

import TaskList from './task-list';
import Form from './form';

// describe('Form Component', () => {
//     it('button text', () => {
//         const wrapper = mount(<Form handleSubmit={() => {}} />);
//         expect(wrapper.find('.form__submit').text()).toBe('Add');
//     });
// });

// test('shows a success message after submission', () => {

//     const wrapper = mount(<Form handleSubmit={() => {}} />);
//     wrapper.instance().submitForm();
//     expect(wrapper.state('task')).toBe('');
// });

// test('shows a success message after submission', () => {
//     const {getByLabelText, getByText, getByRole} = render(<Form handleSubmit={() => {}} />);
//     fireEvent.change(getByLabelText(/email/i, { target: { value: 'hello@example.com' } });
//     fireEvent.click(getByText(/submit/i);
//     expect(getByRole('status').textContent).toMatch('Thank you for subscribing!');
// });

// test('CheckboxWithLabel changes the text after click', () => {
//     // Render a checkbox with label in the document
//     const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  
//     expect(checkbox.text()).toEqual('Off');
  
//     checkbox.find('input').simulate('change');
  
//     expect(checkbox.text()).toEqual('On');
//   });


// it('renders the correct text when no enthusiasm level is given', () => {
//     const hello = shallow(<Hello name='Daniel' />);
//     expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
//   });
  
//   it('renders the correct text with an explicit enthusiasm level of 5', () => {
//     const hello = shallow(<Hello name='Daniel' enthusiasmLevel={5} />);
//     expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
//   });
  
//   it('throws when the enthusiasm level is 0', () => {
//     expect(() => {
//       shallow(<Hello name='Daniel' enthusiasmLevel={0} />);
//     }).toThrow();
//   });
  
