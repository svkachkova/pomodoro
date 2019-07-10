import { Timer } from '../blocks/timer/timer';

const timerElem: Element = document.querySelector('.timer');
const buttonsElem: Element = document.querySelector('.timer__break-btn');

const timer: Timer = new Timer(timerElem);

timerElem.addEventListener('click', event => {
    const target: Element = <Element>event.target;
    if (timer.isStarted == true) {
        if (target.matches('.timer__control') && target.classList.contains('timer_cancel')) {
            timer.cancel();
        }
        return;
    }
    timer.start(25);
});

buttonsElem.addEventListener('click', event => {
    const target: Element = <Element>event.target;
    if (target.matches('.break-btn_type_short')) {
        timer.start(5);
    }
    if (target.matches('.break-btn_type_long')) {
        timer.start(15);
    }
});

// Switch
const themeSwitch: Element = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
    const page: Element = document.querySelector('.page');
    page.classList.toggle('theme_light');
});
