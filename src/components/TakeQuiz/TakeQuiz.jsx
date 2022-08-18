import TakeQuizCard from "components/TakeQuiz/TakeQuizCard";
import React from "react";

import TakeQuizRules from "./TakeQuizRules";
function TakeQuiz() {
  const [body, setBody] = React.useState(
    <TakeQuizRules
      handleClick={() => setBody((prevBody) => <TakeQuizCard />)}
    />
  );

  return <div style={{ padding: "50px" }}>{body}</div>;
}

export default TakeQuiz;
