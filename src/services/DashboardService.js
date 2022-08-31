import axios from 'axios';

const host = 'http://localhost:8080';

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


export const getTakeQuizCount = async ({studentToken,subjectId})=>{
    const graphData = axios.get(`${host}/dashboard/api/fetch_quiz_count`,
    {
        params:{
            studentToken:studentToken,
            subjectId:subjectId
        }
    });
    return (await graphData).data;
}
