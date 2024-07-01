import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice";
import questionStateReducer from "./questionStateSlice";

const store = configureStore({
    reducer: {
        question: questionReducer,
        questionState: questionStateReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
