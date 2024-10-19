import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title }) {
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);

  const timer = useRef();
  const dialog = useRef();

  const [targetTime, setTargetTime] = useState(5);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining < targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => prev - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleChange(e) {
    setTargetTime(e.target.value);
    setTimeRemaining(e.target.value * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          <input type="number" onChange={handleChange} value={targetTime} />
          second
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        {/* <p className={timerIsActive ? "active" : undefined}>
          Timer is {timerIsActive ? "running" : "inactive"}
        </p> */}
      </section>
    </>
  );
}
