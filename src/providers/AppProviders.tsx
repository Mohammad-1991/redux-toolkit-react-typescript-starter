"use client";
import { Provider } from "react-redux";
import { FC, ReactNode } from "react";
import { reduxStore } from "../redux_manager/reduxStore";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundry";

type Props = {
  children: ReactNode;
};
// gathers all providers that we need at same file and exported as AppProviders
export const AppProviders: FC<Props> = ({ children }) => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={reduxStore}>{children}</Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default AppProviders;
