"use client";

import Link from "next/link";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "../Button/Button";

export default function ConnectedLayout({ children }) {
    // Variable
    const pathname = usePathname();

    return (
        <section className="flex flex-col min-h-screen px-5">
            {/* Header */}
            <header className="flex justify-between items-center py-4">
                {/* Nav */}
                <nav className="absolute left-0 top-0 right-0 flex justify-center py-7 gap-5 z-0">
                    {/* Index */}
                    <Link href="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-10 h-10 hover:bg-threads-gray-dark duration-150 p-1 rounded-xl ${
                                pathname == "/"
                                    ? "text-white"
                                    : "text-threads-gray-light"
                            }`}
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M224 115.55V208a16 16 0 0 1-16 16h-40a16 16 0 0 1-16-16v-40a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v40a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-92.45a16 16 0 0 1 5.17-11.78l80-75.48l.11-.11a16 16 0 0 1 21.53 0a1.14 1.14 0 0 0 .11.11l80 75.48a16 16 0 0 1 5.08 11.78"
                            ></path>
                        </svg>
                    </Link>

                    {/* Search */}
                    <Link href="/search">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-10 h-10 hover:bg-threads-gray-dark duration-150 p-1 rounded-xl ${
                                pathname == "/search"
                                    ? "text-white"
                                    : "text-threads-gray-light"
                            }`}
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"
                            ></path>
                        </svg>
                    </Link>
                </nav>

                {/* Logo */}
                <Image src="/logo.png" alt="Threads" width={40} height={40} />

                {/* Button */}
                <div className="z-10">
                    <Link href="/login">
                        <Button withoutMarginTop>Se connecter</Button>
                    </Link>
                </div>
            </header>

            {/* Content */}
            <div className="flex-1">{children}</div>

            {/* Footer */}
            <Footer />
        </section>
    );
}
