export default class Timer {

    public isStarted: boolean = false;

    private time: [number, number] = [0, 0];

    private digitElem: Element;
    private controlElem: Element;
    
    private interval: number;

    constructor(elem: Element) {
        this.digitElem = elem.querySelector('.timer__time');
        this.controlElem = elem.querySelector('.timer__control');
    }

    private prettier(min: number, sec: number): string {
        const m: string = (min < 10) ? `0${min}` : `${min}`;
        const s: string = (sec < 10) ? `0${sec}` : `${sec}`;
        return `${m}:${s}`;
    }

    private controlFocus() {
        this.controlElem.innerHTML = 'focus';
        this.controlElem.classList.add('focus');
        this.controlElem.classList.remove('cancel');
    }

    private controlCancel() {
        this.controlElem.innerHTML = 'cancel';
        this.controlElem.classList.add('cancel');
        this.controlElem.classList.remove('focus');
    }

    private end(): void {
        clearInterval(this.interval);
        this.controlFocus();
        this.isStarted = false;

        document.title = 'Pomodoro';
    }

    start(duration: number): void {

        clearInterval(this.interval);
        this.controlCancel();
        this.isStarted = true;

        this.time = [duration, 0];
        this.digitElem.innerHTML = this.prettier(...this.time);

        const timerName: string= (duration === 25) ? 'Focus' : 'Break';
        document.title = `(${this.time[0]}m) ${timerName}`; 

        this.interval = <any>setInterval(() => {

            if (this.time[1] === 0) {
                this.time[1] = 59;
                this.time[0]--;

                document.title = `(${this.time[0] + 1}m) ${timerName}`;
            } else this.time[1]--;

            this.digitElem.innerHTML = this.prettier(...this.time);

            if (this.time[0] === 0 && this.time[1] === 0) {
                this.end();
            }
        }, 1000);
    }

    cancel():void {
        this.end();

        this.time = [0, 0];
        this.digitElem.innerHTML = this.prettier(...this.time);
    }
}
