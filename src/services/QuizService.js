import axios from "axios"

// const host = 'http://18.204.21.86:8080'
const host = 'http://localhost:8080'

export const getExams = async () => {
    return await axios.get(`${host}`)
}


/**
 * It returns a promise that resolves to the response of an HTTP request to the URL
 * `/quiz/api/fetch_subjects`
 * @returns An object with a data property that contains the array of subjects.
 */
export const getSubjects = async () => {
    const subjects = axios.get(`${host}/quiz/api/fetch_subjects`);
    return (await subjects).data;
}
