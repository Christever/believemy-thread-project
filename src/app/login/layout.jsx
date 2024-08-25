import Footer from "@/components/Footer/Footer";
import Image from "next/image";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="absolute top-0 left-0 right-0 bottom-0 aspect-[3570/1020] z-0">
                {/* Welcome */}
                <Image
                    src={"/welcome.webp"}
                    alt="Welcome"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex-1 z-10 pt-[19vw]">{children}</div>
            {/* Footer */}
            <Footer />
        </div>
    );
}
