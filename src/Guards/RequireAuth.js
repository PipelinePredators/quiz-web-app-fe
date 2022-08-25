import { useHistory } from 'react-router-dom'
import { useAuth } from './Auth'

const RequireAuth = ({children}) => {
    const auth = useAuth()

    const history = useHistory();

    if(!auth.student){
        history.push('./login')
    }


  return children
}

export default RequireAuth