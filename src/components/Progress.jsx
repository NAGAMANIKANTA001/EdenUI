import "react-step-progress-bar/styles.css";
import "./Form.css"
import { ProgressBar, Step } from "react-step-progress-bar";

export function Progress(props) {
    const {percentage} = props;
    const transitionStyles = {
        entering: { transform: "scale(1.5)",transition: "width 1s, height 1s, transform 1s" },
        entered: { transform: "scale(1)" ,transition: "width 1s, height 1s, transform 1s"},
        exiting: { transform: "scale(1.5)" ,transition: "width 1s, height 1s, transform 1s"},
        exited: { transform: "scale(1)" ,transition: "width 1s, height 1s, transform 1s"}
      };
    return(
        <>
        <ProgressBar percent={percentage} height={2} filledBackground={"#664DE5"} unfilledBackground={"rgba(230, 230, 230, 1)"}>
                <Step>
                    {({ accomplished,transitionState, index }) => (
                        <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}  style={transitionStyles[transitionState]}>
                            {index + 1}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished,transitionState, index }) => (
                        <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}  style={transitionStyles[transitionState]}>
                            {index + 1}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished,transitionState, index }) => (
                        <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}  style={transitionStyles[transitionState]}>
                            {index + 1}
                        </div>
                    )}
                </Step>
                <Step>
                    {({ accomplished,transitionState, index }) => (
                        <div className={`indexedStep ${accomplished ? "accomplished" : ""}`}  style={transitionStyles[transitionState]}>
                            {index + 1}
                        </div>
                    )}
                </Step>
            </ProgressBar>
        </>
    );
}