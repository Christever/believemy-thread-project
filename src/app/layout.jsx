import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Providers";

export const metadata = {
    title: "Thread",
    description: "Clone de Thread",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="bg-threads-gray">
                <AuthProvider>{children}</AuthProvider>
                <ToastContainer position="bottom-right" autoClose="3000" />
            </body>
        </html>
    );
}
