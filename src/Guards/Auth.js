import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudentDetailsState } from "Redux/StudentSlice";
import { removeStudentState } from "Redux/StudentSlice";
import { setStudentState } from "Redux/StudentSlice";

const AuthContext = createContext(null)


export const AuthProvider = ({ children }) => {

    /* A hook that lets you extract data from the Redux store state, using a selector function. A
    selector is a function that accepts Redux store state as an argument and returns data that is
    derived from that state. */
    const student = useSelector(state => state.student.token)

    /* A hook that gives access to the dispatch function. */
    const dispatch = useDispatch();

    const login = (value) => {
        /* Dispatching an action to the redux store. */
        dispatch(setStudentState(value.token))
        dispatch(setStudentDetailsState(value.student));
    }


    const logout = () => {
        /* Dispatching an action to the redux store. */
        dispatch(removeStudentState());
    }


    return (
        <AuthContext.Provider value={{ student, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}