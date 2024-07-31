"use client";
import { ChildrenType } from "@/core/types/children";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from ".";

const StoreProvider = ({ children }: ChildrenType) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </SessionProvider>
  );
};

export default StoreProvider;
