'use client'

import type { ReactNode } from "react";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";

type ProvidersProps = {
    children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange
        >
            <TooltipProvider delayDuration={0}>
                {children}
            </TooltipProvider>
        </ThemeProvider>
    )
}