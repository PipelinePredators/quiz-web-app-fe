import React, { useState, useEffect, useRef } from "react";
// This time is the calculated seconds returned base on the number of questions selected during the take quiz.
const INITIAL_COUNT = 120;
const twoDigits = (num) => String(num).padStart(2, "0");

export default function Timer() {
  const [secondsRemaining, setSecondsRemaining] = useState(() => INITIAL_COUNT);

  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60;

  useInterval(() => {
    if (secondsRemaining > 0) {
      setSecondsRemaining(secondsRemaining - 1);
    }
  }, 1000);
  return (
    <div style={{ float: "right" }}>
      <div style={{ fontFamily: "monospace", padding: 20, fontSize: "20px" }}>
        <span>{secondsRemaining === 0 ? "Time Up!!" : "Time Remaining"}</span>{" "}
        <br />
        {twoDigits(hoursToDisplay)}:{twoDigits(minutesToDisplay)}:
        {twoDigits(secondsToDisplay)}
      </div>
    </div>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remembers the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
