export class TimerValueClass {
    constructor(upId, downId, valueId) {
        this.upBtn = document.querySelector(`.${upId}`);
        this.downBtn = document.querySelector(`.${downId}`);
        this.valueElement = document.querySelector(`.${valueId}`);

        this.init();
    }

    init() {
        this.upBtn.addEventListener('click', () => this.upValue());
        this.downBtn.addEventListener('click', () => this.downValue());
    }

    upValue() {
        let currentValue = parseInt(this.valueElement.textContent, 10);
        const maxValue = this.valueElement.classList.contains('hours-value') ? 99 : 59;
        if (currentValue < maxValue) {
            currentValue += 1;
            this.valueElement.textContent = currentValue.toString().padStart(2, '0');
        }
    }

    downValue() {
        let currentValue = parseInt(this.valueElement.textContent, 10);
        if (currentValue > 0) {
            currentValue -= 1;
            this.valueElement.textContent = currentValue.toString().padStart(2, '0');
        }
    }

    exit() {
        this.upBtn.removeEventListener('click', () => this.upValue());
        this.downBtn.removeEventListener('click', () => this.downValue());
    }
}
