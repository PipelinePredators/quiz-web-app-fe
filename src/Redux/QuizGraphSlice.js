import { createSlice } from "@reduxjs/toolkit";

export const QuizGraphSlice = createSlice({
    name: 'quizCount',
    initialState: {
        count: [],
        percentage: [],
        results: [],
    },
    reducers: {
        setQuizCountState: (state, action) => {
            state.count = action.payload;
        },
        setQuizPercentageState: (state, action) => {
            state.percentage = action.payload
        },
        setQuizResultState: (state, action) => {
            state.results = action.payload
        }
    }
})

export const { setQuizCountState, setQuizPercentageState, setQuizResultState } = QuizGraphSlice.actions;

export default QuizGraphSlice.reducer;