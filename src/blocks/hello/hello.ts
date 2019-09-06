import React from 'react';
// import ReactDOM from 'react-dom';

// const Hello = () => <h1>Hello</h1>; 
class Hello extends React.Component {
    render() {
      return React.createElement('div', null, 'Hello');
    }
  }

export default Hello;

// ReactDOM.render(<Hello />, document.getElementById('hello'));
