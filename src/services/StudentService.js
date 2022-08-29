import Axios from "axios"

// const host = 'http://localhost:8080'
// const host = 'http://pipelinepredatorseb-env.eba-8fpya2g3.us-east-1.elasticbeanstalk.com'
const host = 'https://pipelinepredators.com'

/**
 * It takes in an email and password, and returns the data from the API call.
 * @param email - email
 * @param password - "12345"
 * @returns The data from the Axios call.
 */
export const signIn = async (email, password) => {
  const studentData = Axios.get(`${host}/student/api/login_student`, { params: { email: email, password: password } })
  return (await studentData).data;
}

export const signUp = async (payload)=>{
  const studentData = Axios.post(`${host}/student/api/create_student`,payload);
  return (await studentData).data;
}
