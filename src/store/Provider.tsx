'use client';

import { Provider } from "react-redux";
import store from "./store";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}