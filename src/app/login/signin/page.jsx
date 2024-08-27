"use client";
import Button from "@/components/Buttons/Button";
import { checkEmail } from "@/utils/check-email-syntax";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { setCookie } from "cookies-next";

export default function Signin() {
    // Variables
    const router = useRouter();

    // Functions
    const prepareLogin = async (formdata) => {
        const email = formdata.get("email");
        const password = formdata.get("password");

        if (!email || !password) {
            return toast.error("Les champs doivent etre remplis !");
        }

        if (!checkEmail(email)) {
            return toast.error("Email invalide !");
        }

        // SignIn the user
        try {
            const response = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (response.error) {
                return toast.error(response.error);
            }
        } catch (error) {
            return toast.error(error.message);
        }

        setCookie("connected", "true");
        toast.success("Vous êtes maintenant connecté !");

        // Redirect -
        router.replace("/"); // replace pour remplacer la page de connexion
    };
    return (
        <>
            <div className="text-white md:w-[440px] mx-auto w-full">
                <div className="flex items-center gap-3">
                    <Link href={"/login"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 256 256"
                        >
                            <path
                                fill="currentColor"
                                d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"
                            ></path>
                        </svg>
                    </Link>
                    <h1 className="text-3xl font-semibold">Connectez-vous</h1>
                </div>
                <form action={prepareLogin}>
                    <input
                        type="email"
                        className="input"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        className="input"
                        name="password"
                        placeholder="Mot de passe"
                        required
                    />
                    <Button>Se connecter</Button>
                </form>
                <div className="flex items-center mt-4 justify-center">
                    <div className="border-t border-threads-gray-light w-1/4"></div>
                    <div className="text-threads-gray-light mx-4">ou</div>
                    <div className="border-t border-threads-gray-light w-1/4"></div>
                </div>

                <Link href={"/login/signup"}>
                    <Button formButton>S' inscrire</Button>
                </Link>
            </div>
        </>
    );
}
