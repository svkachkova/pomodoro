import { expect } from 'chai';
import 'mocha';
import Timer from './timer';

describe('timer start(25)', () => {
    const timerElem: Element = document.createElement('div');
    const timerTimeElement: Element = document.createElement('div');
    const timerControlElement: Element = document.createElement('div');

    timerElem.classList.add('timer');
    timerTimeElement.classList.add('timer__time');
    timerControlElement.classList.add('timer__control', 'timer_focus');

    timerElem.appendChild(timerTimeElement).appendChild(timerControlElement);

    const timer: Timer = new Timer(timerElem);

    timer.start(25);

    it('isStarted true', () => {
        expect(timer.isStarted).to.equal(true);
    });

    it('control has class "timer_cancel"', () => {
        expect(timerControlElement.classList.contains('timer_cancel')).to.equal(true);
    });

    it('control text is "cancel"', () => {
        expect(timerControlElement.innerHTML).to.match(/^cancel$/);
    });

    it('time is "25:00"', () => {
        expect(timerTimeElement.innerHTML).to.match(/^25:00$/);
    });

    it('5 seconds after start time is "24:55"', () => {
        setTimeout(() => {
            expect(timerTimeElement.innerHTML).to.match(/^24:55$/);
        }, 5000);
    });

    it('document title is "(25m) Focus"', () => {
        expect(document.title).to.match(/^\(25m\) Focus$/);
    });

    it('25 minutes after start time is "00:00"', () => {
        setTimeout(() => {
            expect(timerTimeElement.innerHTML).to.match(/^00:00$/);
        }, 25 * 60000);
    });
});
