import type { Metadata } from "next";
import { Patrick_Hand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const patrickHand = Patrick_Hand({
    variable: "--font-patrick-hand",
    subsets: ["latin"],
    weight: "400",
});


export const metadata: Metadata = {
    title: "Surya's Portfolio",
    description: "Next JS Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${patrickHand.variable} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
