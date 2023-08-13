"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import {ThemeProvider, ThemeProvider as NextThemesProvider} from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//
// const queryClient = new QueryClient();

const Providers = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>

    );
};

export default Providers;