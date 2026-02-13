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
    title: "Surya Sivakumar — Full-Stack Developer & ML Enthusiast",
    description:
        "Full-stack developer and machine learning enthusiast with a 4.0 GPA Master's in Computer Science from ASU. Portfolio showcasing projects in React Native, Node.js, GIS, and computer vision.",
    openGraph: {
        title: "Surya Sivakumar — Full-Stack Developer & ML Enthusiast",
        description:
            "Full-stack developer and ML enthusiast with a 4.0 GPA Master's in CS from ASU.",
        type: "website",
        url: "https://surya-441.github.io",
    },
    twitter: {
        card: "summary",
        title: "Surya Sivakumar — Full-Stack Developer",
        description:
            "Full-stack developer and ML enthusiast with a 4.0 GPA Master's in CS from ASU.",
    },
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
