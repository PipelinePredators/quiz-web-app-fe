import axios from 'axios';

// const host = 'http://localhost:8080';
const host = 'https://backend.pipelinepredators.com'

/**
 * It returns the data from the axios request.
 * @returns An object with a data property that contains the data you want.
 */
export const getTakeQuizResult = async ({ studentToken, subjectId }) => {
    const dashboardData = axios.get(`${host}/dashboard/api/fetch_quiz_results`,
        {
            params: {
                studentToken: studentToken,
                subjectId: subjectId
            }
        });
    return (await dashboardData).data;
}


/**
 * It returns the number of quizzes a student has taken for a particular subject.
 * @returns {
 *     "status": "success",
 *     "data": {
 *         "quiz_count": "1"
 *     }
 * }
 */
export const getTakeQuizCount = async ({ studentToken, subjectId }) => {
    const graphData = axios.get(`${host}/dashboard/api/fetch_quiz_count`,
        {
            params: {
                studentToken: studentToken,
                subjectId: subjectId
            }
        });
    return (await graphData).data;
}


/**
 * It returns a promise that resolves to an object that contains a property called data that is an
 * array of objects.
 * @returns An array of objects.
 */
export const getTakeQuizPercentage = async ({ studentToken, subjectId }) => {
    const percentageGraph = axios.get(`${host}/dashboard/api/fetch_quiz_percentage`,
        {
            params: {
                studentToken: studentToken,
                subjectId: subjectId
            }
        });
    return (await percentageGraph).data;
}
