import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Thread",
    description: "Clone de Thread",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>{children}</body>
        </html>
    );
}
