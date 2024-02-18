import type { Metadata } from "next";
import React from "react";

import StoreProvider from "@/helpers/StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
    title: "Pomodoro Pulse: Maximize Your Productivity",
    description: "Designed for Pomodoro enthusiasts aiming for maximum productivity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <StoreProvider>
            <html lang="en">
                <head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/icons/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/icons/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                </head>
                <body>
                    {children}
                </body>
            </html>
        </StoreProvider>
    );
}
