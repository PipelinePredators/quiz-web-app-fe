import axios from "axios"

const host = 'http://localhost:8080'
//const host = 'http://pipelinepredatorseb-env.eba-8fpya2g3.us-east-1.elasticbeanstalk.com'
// const host = 'https://backend.pipelinepredators.com'

/**
 * It returns a promise that resolves to the response of an HTTP request to the URL
 * `/quiz/api/fetch_subjects`
 * @returns An object with a data property that contains the array of subjects.
 */
export const getSubjects = async () => {
    const subjects = axios.get(`${host}/quiz/api/fetch_subjects`);
    return (await subjects).data;
}

/**
 * It fetches a quiz from the server and returns the data.
 * @returns An array of objects.
 */
export const getTakeQuizzes = async ({ subjectId, questionNumber }) => {

    const quizzes = axios.get(`${host}/quiz/api/fetch_quiz`,
        {
            params: {
                subjectId: subjectId,
                questionNumber: questionNumber
            }
        });
    return (await quizzes).data;
}


export const saveTakeQuizResults = async ({ studentToken, currentScore, questionNumber,subjectId }) => {
    const payload = {
        studentToken: studentToken,
        currentScore: currentScore,
        quizTotal: questionNumber,
        subjectId: subjectId
    }
    const results = axios.post(`${host}/quiz/api/save_results`, payload);
    return (await results).data;
}
