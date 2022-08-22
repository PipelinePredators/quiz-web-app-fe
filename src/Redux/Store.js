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


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const subjectPersistedReducer = persistReducer(persistConfig, subjectReducer);

const store = configureStore({
    reducer: {
        subjects: subjectPersistedReducer
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