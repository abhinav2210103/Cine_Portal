"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import allQuestions from "@/constants/dummyQuestions.json";

interface option {
    desc: string;
    id: number;
}

interface questionType {
    _id: string;
    state: string;
    quesId: number;
    subject: string;
    question: string;
    options: option[];
    recordedAns: number;
    answer: number;
}

interface questionStates {
    allQuestions: questionType[];
}

const initialState: questionStates = {
    allQuestions: [],
};

const questionStateSlice = createSlice({
    name: "questionState",
    initialState,
    reducers: {
        setQuestionsState(state, action: PayloadAction<questionType[]>) {
            state.allQuestions = action.payload;
        },
    },
});

export const { setQuestionsState } = questionStateSlice.actions;

export default questionStateSlice.reducer;
