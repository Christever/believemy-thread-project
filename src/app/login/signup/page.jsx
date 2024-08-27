"use client";
import { createUser } from "@/actions/create-user";
import Button from "@/components/Buttons/Button";
import { checkEmail } from "@/utils/check-email-syntax";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Singup() {
    const router = useRouter();

    const prepareCreateUser = async (formdata) => {
        const user = formdata.get("username");
        const pseudo = formdata.get("pseudo");
        const email = formdata.get("email");
        const password = formdata.get("password");

        // If a field is empty
        if (!user || !pseudo || !email || !password) {
            return toast.error("Aucun champs ne doit être vide!");
        }

        // Check email
        if (!checkEmail(email)) {
            return toast.error("Champ email invalide !");
        }
        try {
            await createUser(user, pseudo, email, password);
        } catch (error) {
            return toast.error(error.message);
        }
        toast.success("Votre compte a bien été créé !");
        router.push("/login/signin");
    };
    return (
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
                <h1 className="text-3xl font-semibold">Inscrivez-vous</h1>
            </div>

            <form action={prepareCreateUser}>
                <input
                    type="text"
                    className="input"
                    name="username"
                    placeholder="Nom d'utilisateur"
                    required
                />

                <input
                    type="text"
                    className="input"
                    name="pseudo"
                    placeholder="Pseudo"
                    required
                />
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
                <Button formButton>S'incrire</Button>
            </form>
            <div className="flex items-center mt-4 justify-center">
                <div className="border-t border-threads-gray-light w-1/4"></div>
                <div className="text-threads-gray-light mx-4">ou</div>
                <div className="border-t border-threads-gray-light w-1/4"></div>
            </div>

            <Link href={"/login/signin"}>
                <Button>Se connecter</Button>
            </Link>
        </div>
    );
}
