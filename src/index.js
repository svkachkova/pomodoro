class Timer {
    constructor(elem) {
        this.isStarted = false;
        this.time = [0, 0];
        this.digitElem = elem.querySelector('.timer__time');
        this.controlElem = elem.querySelector('.timer__control');
    }
    prettier(min, sec) {
        const m = (min < 10) ? `0${min}` : `${min}`;
        const s = (sec < 10) ? `0${sec}` : `${sec}`;
        return `${m}:${s}`;
    }
    controlFocus() {
        this.controlElem.innerHTML = 'focus';
        this.controlElem.classList.add('timer_focus');
        this.controlElem.classList.remove('timer_cancel');
    }
    controlCancel() {
        this.controlElem.innerHTML = 'cancel';
        this.controlElem.classList.add('timer_cancel');
        this.controlElem.classList.remove('timer_focus');
    }
    end() {
        clearInterval(this.interval);
        this.controlFocus();
        this.isStarted = false;
        document.title = 'Pomodoro';
    }
    start(duration) {
        clearInterval(this.interval);
        this.controlCancel();
        this.isStarted = true;
        this.time = [duration, 0];
        this.digitElem.innerHTML = this.prettier(...this.time);
        const timerName = (duration === 25) ? 'Focus' : 'Break';
        document.title = `(${this.time[0]}m) ${timerName}`;
        this.interval = setInterval(() => {
            if (this.time[1] === 0) {
                this.time[1] = 59;
                this.time[0]--;
                document.title = `(${this.time[0] + 1}m) ${timerName}`;
            }
            else
                this.time[1]--;
            this.digitElem.innerHTML = this.prettier(...this.time);
            if (this.time[0] === 0 && this.time[1] === 0) {
                this.end();
            }
        }, 1000);
    }
    cancel() {
        this.end();
        this.time = [0, 0];
        this.digitElem.innerHTML = this.prettier(...this.time);
    }
}
const timerElem = document.querySelector('.timer');
const buttonsElem = document.querySelector('.timer__break-btn');
const timer = new Timer(timerElem);
timerElem.addEventListener('click', (event) => {
    const target = event.target;
    if (timer.isStarted == true) {
        if (target.matches('.timer__control') && target.classList.contains('timer_cancel')) {
            timer.cancel();
        }
        return;
    }
    timer.start(25);
});
buttonsElem.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('.break-btn_type_short')) {
        timer.start(5);
    }
    if (target.matches('.break-btn_type_long')) {
        timer.start(15);
    }
});
