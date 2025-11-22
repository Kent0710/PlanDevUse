import { TimerValueClass } from './timer-value-class.js';
import { StartTimer } from './start-timer-class.js';
import { parseAndPadValue } from './utils.js';

export class App {
    constructor() {

    }

    init() {
        // FIRST TIMER CONTROLLERS
        this.firstHoursTimer = new TimerValueClass(
            'first-hours-up-btn',
            'first-hours-down-btn',
            'first-hours-value'
        );

        this.firstMinutesTimer = new TimerValueClass(
            'first-minutes-up-btn',
            'first-minutes-down-btn',
            'first-minutes-value'
        );

        this.firstSecondsTimer = new TimerValueClass(
            'first-seconds-up-btn',
            'first-seconds-down-btn',
            'first-seconds-value'
        );

        // SECOND TIMER CONTROLLERS
        this.secondHoursTimer = new TimerValueClass(
            'second-hours-up-btn',
            'second-hours-down-btn',
            'second-hours-value'
        );

        this.secondMinutesTimer = new TimerValueClass(
            'second-minutes-up-btn',
            'second-minutes-down-btn',
            'second-minutes-value'
        );

        this.secondSecondsTimer = new TimerValueClass(
            'second-seconds-up-btn',
            'second-seconds-down-btn',
            'second-seconds-value'
        );

        // THIRD TIMER CONTROLLERS
        this.thirdHoursTimer = new TimerValueClass(
            'third-hours-up-btn',
            'third-hours-down-btn',
            'third-hours-value'
        );

        this.thirdMinutesTimer = new TimerValueClass(
            'third-minutes-up-btn',
            'third-minutes-down-btn',
            'third-minutes-value'
        );

        this.thirdSecondsTimer = new TimerValueClass(
            'third-seconds-up-btn',
            'third-seconds-down-btn',
            'third-seconds-value'
        );

        // Start Timer
        this.startTimerBtn = new StartTimer('start-timer-btn',
            {
                hours: this.firstHoursTimer,
                minutes: this.firstMinutesTimer,
                seconds: this.firstSecondsTimer,

            },
            {
                hours : this.secondHoursTimer,
                minutes: this.secondMinutesTimer,
                seconds: this.secondSecondsTimer
            },
            {
                hours: this.thirdHoursTimer,
                minutes: this.thirdMinutesTimer,
                seconds: this.thirdSecondsTimer
            }

        );

        console.log('App initialized');
    };

    exit() {
        this.secondHoursTimer.exit();
        this.secondMinutesTimer.exit();
        this.secondSecondsTimer.exit();
    }
}