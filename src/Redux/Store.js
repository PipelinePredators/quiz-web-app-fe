import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import subjectReducer from './SubjectSlice'
import studentReducer from './StudentSlice'
import takeQuizReducer from './TakeQuizSlice'
import graphDataReducer from './QuizGraphSlice'

const subjectConfig = {
    key: 'subject',
    version:1,
    storage:storage,
    whitelist:['value']
}

const studentConfig = {
    key:'student',
    version:1,
    storage:storage,
    whitelist:['token','studentDetails']
}

const takeQuizConfig = {
    key:'takeQuiz',
    version:1,
    storage
}

const graphDataConfig = {
    key:'quizGraphData',
    version:1,
    storage
}

const store = configureStore({
    reducer: {
        subject: persistReducer(subjectConfig,subjectReducer),
        student:persistReducer(studentConfig,studentReducer),
        takeQuiz:persistReducer(takeQuizConfig,takeQuizReducer),
        quizGraphData:persistReducer(graphDataConfig,graphDataReducer)
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

let persistor = persistStore(store);

export { store, persistor }