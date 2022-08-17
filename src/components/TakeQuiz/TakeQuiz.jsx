import TakeQuizCard from "components/TakeQuizCard/TakeQuizCard";
import React from "react";

import TakeQuizRules from "./TakeQuizRules";
function TakeQuiz() {
  const [body, setBody] = React.useState(<TakeQuizRules />);

  return (
    <div>
      <h2>
        Welcome username to the take quiz page <br /> Take quiz now!!!!
      </h2>{" "}
      <TakeQuizRules
        handleClick={() => setBody((prevBody) => <TakeQuizCard />)}
      />
      {body}
    </div>
  );
}

export default TakeQuiz;
