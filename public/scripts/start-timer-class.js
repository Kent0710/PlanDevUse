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

        this.hideResetAndPauseTimers();


        // Hide controsl that allows value up or down
        this.hideTimerValueControls()

        // Show timers
        this.showPauseTimer();
        this.showResetTimer();


        this.disableStartTimer();

        // First timer
        this.handleFirstTimer();


    };

    handleFirstTimer() {
        let hours = parseInt(this.firstTimer.hours.valueElement.textContent, 10);
        let minutes = parseInt(this.firstTimer.minutes.valueElement.textContent, 10);
        let seconds = parseInt(this.firstTimer.seconds.valueElement.textContent, 10);

        if (hours === 0 && minutes === 0 && seconds === 0) {
            console.log('First timer is set to 0. Skipping to second timer.');
            this.handleSecondTimer();
            return;
        }

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

        if (hours === 0 && minutes === 0 && seconds === 0) {
            console.log('Second timer is set to 0. Skipping to third timer.');
            this.handleThirdTimer();
            return;
        }

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

        if (hours === 0 && minutes === 0 && seconds === 0) {
            console.log('Third timer is set to 0. All timers finished!');
            this.showTimerValueControls();
            this.enableStartTimer();
            this.hideResetAndPauseTimers();
            this.showFinishedMessage();
            return;
        }

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
                            this.showTimerValueControls();
                            this.enableStartTimer();
                            this.hideResetAndPauseTimers();
                            this.showFinishedMessage();
                            console.log('Third timer finished!')
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

    hideTimerValueControls() {
        // First Timer
        this.firstTimer.hours.upBtn.style.display = "none";
        this.firstTimer.hours.downBtn.style.display = "none";
        this.firstTimer.minutes.upBtn.style.display = "none";
        this.firstTimer.minutes.downBtn.style.display = "none";
        this.firstTimer.seconds.upBtn.style.display = "none";
        this.firstTimer.seconds.downBtn.style.display = "none";

        // Second Timer
        this.secondTimer.hours.upBtn.style.display = "none";
        this.secondTimer.hours.downBtn.style.display = "none";
        this.secondTimer.minutes.upBtn.style.display = "none";
        this.secondTimer.minutes.downBtn.style.display = "none";
        this.secondTimer.seconds.upBtn.style.display = "none";
        this.secondTimer.seconds.downBtn.style.display = "none";

        // Third Timer
        this.thirdTimer.hours.upBtn.style.display = "none";
        this.thirdTimer.hours.downBtn.style.display = "none";
        this.thirdTimer.minutes.upBtn.style.display = "none";
        this.thirdTimer.minutes.downBtn.style.display = "none";
        this.thirdTimer.seconds.upBtn.style.display = "none";
        this.thirdTimer.seconds.downBtn.style.display = "none";
    }

    showTimerValueControls() {
        // First Timer
        this.firstTimer.hours.upBtn.style.display = "";
        this.firstTimer.hours.downBtn.style.display = "";
        this.firstTimer.minutes.upBtn.style.display = "";
        this.firstTimer.minutes.downBtn.style.display = "";
        this.firstTimer.seconds.upBtn.style.display = "";
        this.firstTimer.seconds.downBtn.style.display = "";

        // Second Timer
        this.secondTimer.hours.upBtn.style.display = "";
        this.secondTimer.hours.downBtn.style.display = "";
        this.secondTimer.minutes.upBtn.style.display = "";
        this.secondTimer.minutes.downBtn.style.display = "";
        this.secondTimer.seconds.upBtn.style.display = "";
        this.secondTimer.seconds.downBtn.style.display = "";

        // Third Timer
        this.thirdTimer.hours.upBtn.style.display = "";
        this.thirdTimer.hours.downBtn.style.display = "";
        this.thirdTimer.minutes.upBtn.style.display = "";
        this.thirdTimer.minutes.downBtn.style.display = "";
        this.thirdTimer.seconds.upBtn.style.display = "";
        this.thirdTimer.seconds.downBtn.style.display = "";
    }

    showPauseTimer() {
        const pauseTimerBtn = document.createElement('button');
        pauseTimerBtn.classList.add('secondary-btn', 'pause-timer-btn');
        pauseTimerBtn.textContent = 'Pause Timer';
        this.startTimerBtn.parentNode.insertBefore(pauseTimerBtn, this.startTimerBtn.nextSibling);
        pauseTimerBtn.addEventListener('click', () => {
            clearInterval(this.timeInterval);
            this.enableStartTimer();
            this.showTimerValueControls();
            this.hideResetAndPauseTimers();

        });

    }

    showResetTimer() {
        const resetTimerBtn = document.createElement('button');
        resetTimerBtn.classList.add('secondary-btn', 'reset-timer-btn');
        resetTimerBtn.textContent = 'Reset Timer';
        this.startTimerBtn.parentNode.insertBefore(resetTimerBtn, this.startTimerBtn.nextSibling);

        resetTimerBtn.addEventListener('click', () => {
            clearInterval(this.timeInterval);
            this.enableStartTimer();
            this.showTimerValueControls();
            this.hideResetAndPauseTimers();


            // Clear values
            this.firstTimer.hours.valueElement.textContent = '00';
            this.firstTimer.minutes.valueElement.textContent = '00';
            this.firstTimer.seconds.valueElement.textContent = '00';
            this.secondTimer.hours.valueElement.textContent = '00';
            this.secondTimer.minutes.valueElement.textContent = '00';
            this.secondTimer.seconds.valueElement.textContent = '00';
            this.thirdTimer.hours.valueElement.textContent = '00';
            this.thirdTimer.minutes.valueElement.textContent = '00';
            this.thirdTimer.seconds.valueElement.textContent = '00';
        });
    }

    hideResetAndPauseTimers() {
        const pauseTimerBtn = document.querySelector('.pause-timer-btn');
        const resetTimerBtn = document.querySelector('.reset-timer-btn');
        if (pauseTimerBtn) {
            pauseTimerBtn.remove();
        }
        if (resetTimerBtn) {
            resetTimerBtn.remove();
        }
    }

    disableStartTimer() {
        this.startTimerBtn.disabled = true;
        this.startTimerBtn.classList.add('disabled-btn');
    }

    enableStartTimer() {
        if (this.startTimerBtn.disabled) {
            this.startTimerBtn.disabled = false;
            this.startTimerBtn.classList.remove('disabled-btn');
        }
    }

    showFinishedMessage() {
        const body = document.querySelector('main');
        const message = document.createElement('div');
        message.classList.add('sonner-container')

        message.innerHTML = `
        <div class="sonner-content">
        <div>
    <p class="sonner-title"> Timer ended </p>
    <p class="sonner-description"> Deploy what you built. </p>
        </div>
        <button class="close-sonner-btn"> Close </button>
        </div>
        `
        body.appendChild(message);

        // Add event listener to close button
        const closeBtn = document.querySelector('.close-sonner-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                message.remove();
            });
        }
    }
}