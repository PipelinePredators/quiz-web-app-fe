import axios from "axios"

export const getExams = async () => {
    return await axios.get('http://localhost:8080/')
}
