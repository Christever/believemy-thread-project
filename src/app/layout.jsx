import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: "Thread",
    description: "Clone de Thread",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className="bg-threads-gray">
                {children}

                <ToastContainer position="bottom-right" autoClose="3000" />
            </body>
        </html>
    );
}
