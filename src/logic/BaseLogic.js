import StartLogic from "./StartLogic";
import StopLogic from "./StopLogic";
import ResetLogic from "./ResetLogic";
import CaptureLogic from "./CaptureLogic";
import ContinueLogic from "./ContinueLogic";
import CONSTANT from "../modules/const";

export default class BaseLogic {

    static createLogic(type) {
        const {START, STOP, CAPTURE, CONTINUE, RESET} = CONSTANT
        return {
            [START]: new StartLogic(),
            [STOP]: new StopLogic(),
            [CAPTURE]: new CaptureLogic(),
            [CONTINUE]: new ContinueLogic(),
            [RESET]: new ResetLogic(),
        }[type]
    }

    execute() {}

}
