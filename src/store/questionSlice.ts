"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuestionState {
    activeQuestionNumber: number;
}

const initialState: QuestionState = {
    activeQuestionNumber: 1,
};

const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        setActiveQuestionNumber(state, action: PayloadAction<number>) {
            state.activeQuestionNumber = action.payload;
        },
    },
});

export const { setActiveQuestionNumber } = questionSlice.actions;

export default questionSlice.reducer;
