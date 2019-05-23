const timerElem: Element = document.querySelector('.timer'); 
const buttonsElem: Element = document.querySelector('.break-btn');

const timer: Timer = new Timer(timerElem);

timerElem.addEventListener('click', (event) => {
    const target: Element = <Element>event.target;
    if (timer.isStarted == true ) {
        if (target.matches('.timer__control') && target.classList.contains('cancel')) {
            timer.cancel();
        }
        return;
    }
    timer.start(25); 
});

buttonsElem.addEventListener('click', (event) => {
    const target: Element = <Element>event.target;
    if (target.matches('.break-btn__short')) {
        timer.start(5);
    }
    if (target.matches('.break-btn__long')) {
        timer.start(15);
    }
});
