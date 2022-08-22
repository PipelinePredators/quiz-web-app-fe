import TakeQuizCard from 'components/TakeQuizCard/TakeQuizCard';
import TakeQuizRules from 'components/TakeQuizCard/TakeQuizRules';
import React from 'react'

const TakeQuiz = () => {

    const [body, setBody] = React.useState(
        <TakeQuizRules handleClick={() => setBody(() => <TakeQuizCard />)} />
    );
    return <article>{body}</article>
}

export default TakeQuiz