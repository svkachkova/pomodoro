import React from 'react';
import ReactDOM from 'react-dom';

import Timer from '../blocks/timer/timer';
import TaskList from '../blocks/task-list/task-list';

const Cookies = require('js-cookie');

const timerElem: Element = document.querySelector('.timer');
const buttonsElem: Element = document.querySelector('.timer__break-btn');

const timer: Timer = new Timer(timerElem);

timerElem.addEventListener('click', event => {
    const target: Element = event.target as Element;
    if (timer.isStarted == true) {
        if (target.matches('.timer__control') && target.classList.contains('timer_cancel')) {
            timer.cancel();
        }
        return;
    }
    timer.start(25);
});

buttonsElem.addEventListener('click', event => {
    const target: Element = event.target as Element;
    if (target.matches('.break-btn_type_short')) {
        timer.start(5);
    }
    if (target.matches('.break-btn_type_long')) {
        timer.start(15);
    }
});

// ThemeSwitch
const themeSwitch: Element = document.getElementById('themeSwitch');
const page: Element = document.querySelector('.page');

if (Cookies.get('theme') === 'light') {
    page.classList.add('theme_light');
}

themeSwitch.addEventListener('change', () => {
    if (Cookies.get('theme') === 'light') {
        Cookies.set('theme', 'dark');
        page.classList.remove('theme_light');
    } else {
        Cookies.set('theme', 'light');
        page.classList.add('theme_light');
    }
});

// TaskList
ReactDOM.render(React.createElement(TaskList), document.getElementById('task-list'));
