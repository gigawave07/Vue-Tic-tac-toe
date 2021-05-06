import ResetLogic from "./ResetLogic";
import countTimer from "../store/timer";

export default class StartLogic {

    constructor() {
        this.timer = countTimer
        this.resetLogic = new ResetLogic()
    }

    execute() {
        this.startTimer()
    }

    startTimer() {
        if (!this.timer.isEnabled) {
            this.resetLogic.execute()
            this.timer.currentTimer = this.timer.inputTimer
            this.timer.isEnabled = true
        }

        let isFinish = this.timer.currentTimer <= 0;
        if (isFinish) {
            this.timer.isEnabled = false
            return
        }

        this.timer.currentTimer = +(this.timer.currentTimer - 0.1).toFixed(1)
        this.timer.loop = setTimeout(() => this.startTimer(), 100)
    }

    getEnableStatus() {
        return this.timer.isEnabled
    }
}
