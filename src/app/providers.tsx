"use client";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { store } from '@/store/store'

export function Providers({ children }: { children: React.ReactNode }) {
    const persistor = persistStore(store)
    return (
        <SessionProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                </PersistGate>
            </Provider>
        </SessionProvider>
    );
}