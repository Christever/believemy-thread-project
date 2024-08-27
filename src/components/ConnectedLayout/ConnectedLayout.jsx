"use client";
import Link from "next/link";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Buttons/Button";
import { useSession } from "next-auth/react";

export default function ConnecterLayout({ children }) {
    // Variable
    const pathname = usePathname();
    const { data: session } = useSession();

    console.log(session);

    return (
        <section className="flex flex-col min-h-screen px-4 ">
            {/* Header */}
            <header className="flex items-center justify-between py-4">
                {/* Nav */}
                <nav className="absolute left-0 right-0 top-0 flex justify-center py-7 gap-5 z-0">
                    <Link href={"/"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-10 h-10 p-1 rounded-xl hover:bg-threads-gray-dark duration-150 ${
                                pathname == "/"
                                    ? "text-white"
                                    : "text-threads-gray-light"
                            }`}
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M224 120v96a8 8 0 0 1-8 8h-56a8 8 0 0 1-8-8v-52a4 4 0 0 0-4-4h-40a4 4 0 0 0-4 4v52a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-96a16 16 0 0 1 4.69-11.31l80-80a16 16 0 0 1 22.62 0l80 80A16 16 0 0 1 224 120"
                            ></path>
                        </svg>
                    </Link>

                    {/* Search */}
                    <Link href={"/search"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`w-10 h-10 p-1 rounded-xl hover:bg-threads-gray-dark duration-150 ${
                                pathname == "/search"
                                    ? "text-white"
                                    : "text-threads-gray-light"
                            }`}
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="m228.24 219.76l-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48M38 112a74 74 0 1 1 74 74a74.09 74.09 0 0 1-74-74"
                            ></path>
                        </svg>
                    </Link>
                </nav>

                {/* Logo */}
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={40}
                    height={40}
                    className="text-white"
                />

                {/* Button */}
                <div className="z-10">
                    {session?.user?.email ? (
                        <Button withoutMarginTop>Se deconnecter</Button>
                    ) : (
                        <Link href={"/login"}>
                            <Button>Se connecter</Button>
                        </Link>
                    )}
                </div>
            </header>

            {/* Content */}
            <div className="flex-1">{children}</div>

            {/* Footer */}
            <Footer />
        </section>
    );
}
