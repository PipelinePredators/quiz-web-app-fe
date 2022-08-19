import axios from "axios"

export const getExams = async () => {
    return await axios.get('http://18.204.21.86:8080/')
}
