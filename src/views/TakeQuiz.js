import TakeQuizCard from 'components/TakeQuizCard/TakeQuizCard';
import TakeQuizRules from 'components/TakeQuizCard/TakeQuizRules';
import React from 'react'
import { useParams } from 'react-router-dom';

const TakeQuiz = () => {

    let { id } = useParams();

    const [body, setBody] = React.useState(
        <TakeQuizRules handleClick={() => setBody((prevBody) => <TakeQuizCard />)} />
    );
    return <article>{body}</article>
}

export default TakeQuiz