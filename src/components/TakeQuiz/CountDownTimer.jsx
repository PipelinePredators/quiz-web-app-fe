import React from "react";

function CountDownTimer() {
  // timer > 60 ? Math.trunc(timer / 60) + ":" + (timer - 60) : timer
  let quizTime = 240;

  const [timer, setTimer] = React.useState(() => quizTime);
  const id = React.useRef(null);

  // Used clear interval to clear the current state when the timer reaches negative numbers

  const clear = () => {
    window.clearInterval(id.current);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);
  let minutes = Math.floor(timer / 60);
  let seconds = Math.floor((timer - 60) / minutes);
  console.log(seconds);

  return (
    <div>
      <h3>
        {timer}
        {timer === 0 ? "Time Up!!" : " minutes more"}
      </h3>
    </div>
  );
}

export default CountDownTimer;
