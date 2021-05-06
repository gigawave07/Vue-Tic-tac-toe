import countTimer from "../store/timer";

export default class ResetLogic {

    constructor() {
        this.timer = countTimer
    }

    execute() {
        this.resetTimer()
    }

    resetTimer() {
        this.timer.currentTimer = 0
        this.timer.isEnabled = false
        this.timer.captures = []
    }

    getEnableStatus() {
        return this.timer.isEnabled
    }
}
