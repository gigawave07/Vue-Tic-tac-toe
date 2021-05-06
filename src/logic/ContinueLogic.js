import StartLogic from "./StartLogic";
import countTimer from "../store/timer";

export default class ContinueLogic {

    constructor() {
        this.timer = countTimer
        this.startLogic = new StartLogic()
    }

    execute() {
        this.continueTimer()
    }

    continueTimer() {
        if (!this.timer.isEnabled) {
            this.timer.isEnabled = true
        }

        let isFinish = this.timer.currentTimer <= 0;
        if (isFinish) {
            this.timer.isEnabled = false
            return
        }

        this.timer.currentTimer = +(this.timer.currentTimer - 0.1).toFixed(1)
        this.timer.loop = setTimeout(this.startLogic.startTimer(), 100)
    }

    getEnableStatus() {
        return this.timer.isEnabled
    }
}
