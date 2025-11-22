export class StartTimer {
    constructor(startTimerClass,
        firstTimer, secondTimer, thirdTimer

    ) {
        this.startTimerBtn = document.querySelector(`.${startTimerClass}`);
        this.startTimerBtn.addEventListener('click', () => this.handleStartTimer());

        this.firstTimer = firstTimer;
        this.secondTimer = secondTimer;
        this.thirdTimer = thirdTimer;

        this.timeInterval = null;
    };

    handleStartTimer() {
        console.log("Timer started");

        // First timer
        this.handleFirstTimer();
    };

    handleFirstTimer() {
        let hours = parseInt(this.firstTimer.hours.valueElement.textContent, 10);
        let minutes = parseInt(this.firstTimer.minutes.valueElement.textContent, 10);
        let seconds = parseInt(this.firstTimer.seconds.valueElement.textContent, 10);

        this.timeInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                if (minutes > 0) {
                    minutes--;
                }
                else {
                    minutes = 59;
                    if (hours > 0) {
                        hours--;
                    }
                    else {
                        clearInterval(this.timeInterval);
                        console.log('First timer finished!');
                        this.handleSecondTimer();
                        return;
                    }
                }
            }
            this.firstTimer.hours.valueElement.textContent = hours.toString().padStart(2, '0');
            this.firstTimer.minutes.valueElement.textContent = minutes.toString().padStart(2, '0');
            this.firstTimer.seconds.valueElement.textContent = seconds.toString().padStart(2, '0');
        }
            , 1000);
    };

    handleSecondTimer() {
        let hours = parseInt(this.secondTimer.hours.valueElement.textContent, 10);
        let minutes = parseInt(this.secondTimer.minutes.valueElement.textContent, 10);
        let seconds = parseInt(this.secondTimer.seconds.valueElement.textContent, 10);

        this.timeInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                if (minutes > 0) {
                    minutes--;
                }
                else {
                    minutes = 59;
                    if (hours > 0) {
                        hours--;
                    }
                    else {
                        clearInterval(this.timeInterval);
                        console.log('Second timer finished!');
                        this.handleThirdTimer();
                        return;
                    }
                }
            }
            this.secondTimer.hours.valueElement.textContent = hours.toString().padStart(2, '0');
            this.secondTimer.minutes.valueElement.textContent = minutes.toString().padStart(2, '0');
            this.secondTimer.seconds.valueElement.textContent = seconds.toString().padStart(2, '0');
        }
            , 1000);
    };

    handleThirdTimer() {
        let hours = parseInt(this.thirdTimer.hours.valueElement.textContent, 10);
        let minutes = parseInt(this.thirdTimer.minutes.valueElement.textContent, 10);
        let seconds = parseInt(this.thirdTimer.seconds.valueElement.textContent, 10);

        this.timeInterval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else {
                seconds = 59;
                if (minutes > 0) {
                    minutes--;
                }
                else {
                    minutes = 59;
                    if (hours > 0) {
                        hours--;
                    }
                    else {
                        clearInterval(this.timeInterval);
                        console.log('Third timer finished!');
                        return;
                    }
                }
            }
            this.thirdTimer.hours.valueElement.textContent = hours.toString().padStart(2, '0');
            this.thirdTimer.minutes.valueElement.textContent = minutes.toString().padStart(2, '0');
            this.thirdTimer.seconds.valueElement.textContent = seconds.toString().padStart(2, '0');
        }
            , 1000);
    }
}