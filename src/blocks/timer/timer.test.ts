import { expect } from 'chai';
import 'mocha';
import Timer from './timer';

function createTimer(): Element[] {
    const timerElement: Element = document.createElement('div');
    const timerTimeElement: Element = document.createElement('div');
    const timerControlElement: Element = document.createElement('div');

    timerElement.classList.add('timer');
    timerTimeElement.classList.add('timer__time');
    timerControlElement.classList.add('timer__control', 'timer_focus');

    timerElement.appendChild(timerTimeElement).appendChild(timerControlElement);

    return [timerElement, timerTimeElement, timerControlElement];
}

function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

describe('timer', () => {
    describe('timer.start', () => {
        const [timerElem, timeElem, controlElem]: Element[] = createTimer();
        const timer: Timer = new Timer(timerElem);

        timer.start(10);

        it('isStarted true', () => {
            expect(timer.isStarted).to.equal(true);
        });

        it('control has class "timer_cancel"', () => {
            expect(controlElem.classList.contains('timer_cancel')).to.equal(true);
        });

        it('control text is "cancel"', () => {
            expect(controlElem.innerHTML).to.match(/^cancel$/);
        });

        it('time is "10:00"', () => {
            expect(timeElem.innerHTML).to.match(/^10:00$/);
        });

        it('5 seconds after start time is "09:55"', () => {
            setTimeout(() => {
                expect(timeElem.innerHTML).to.match(/^09:55$/);
            }, 5000);
        });
    });

    describe('timer.cancel()', () => {
        const [timerElem, timeElem, controlElem]: Element[] = createTimer();
        const timer: Timer = new Timer(timerElem);

        timer.start(10);

        it('isStarted false', async () => {
            await timeout(50);
            timer.cancel();

            expect(timer.isStarted).to.equal(false);
        });

        it('control has class "timer_focus"', () => {
            expect(controlElem.classList.contains('timer_focus')).to.equal(true);
        });

        it('control text is "focus"', () => {
            expect(controlElem.innerHTML).to.match(/^focus$/);
        });

        it('time is "00:00"', () => {
            expect(timeElem.innerHTML).to.match(/^00:00$/);
        });
    });

    describe('focus', () => {
        const [timerElem, timeElem]: Element[] = createTimer();
        const timer: Timer = new Timer(timerElem);

        timer.start(25);

        it('25 minutes after start time is "00:00"', () => {
            setTimeout(() => {
                expect(timeElem.innerHTML).to.match(/^00:00$/);
            }, 25 * 60000);
        });
    });

    describe('break', () => {
        describe('short', () => {
            const [timerElem, timeElem]: Element[] = createTimer();
            const timer: Timer = new Timer(timerElem);

            timer.start(5);

            it('5 minutes after start time is "00:00"', () => {
                setTimeout(() => {
                    expect(timeElem.innerHTML).to.match(/^00:00$/);
                }, 5 * 60000);
            });
        });

        describe('long', () => {
            const [timerElem, timeElem]: Element[] = createTimer();
            const timer: Timer = new Timer(timerElem);

            timer.start(15);

            it('15 minutes after start time is "00:00"', () => {
                setTimeout(() => {
                    expect(timeElem.innerHTML).to.match(/^00:00$/);
                }, 15 * 60000);
            });
        });
    });
});
