import Link from "next/link";

export default function Login() {
    return (
        <>
            {/* Title */}
            <h1 className="text-white text-xl text-bold text-center">
                Comment souhaitez-vous utiliser Threads ?
            </h1>

            {/* Signin & Signout */}
            <div className="mt-5 w-[500px] mx-auto">
                <Link href={"/login/signup"}>
                    <div className="auth-method">
                        <h2 className="text-white font-bold">
                            S'inscrire ou se connecter avec une adresse mail
                        </h2>
                        <div className="text-threads-gray-light mt-4">
                            Connectez-vous ou creez un profil Threads avec une
                            adresse mail. Cela vou permettra de publier du
                            contenu et d'iinteragir sur Threads.
                        </div>
                    </div>
                </Link>
            </div>

            {/* Invited */}
            <div className="mt-5 w-[500px] mx-auto">
                <Link href={"/login/pass"}>
                    <div className="auth-method">
                        <h2 className="text-white font-bold">
                            Utiliser sans profil
                        </h2>
                        <div className="text-threads-gray-light mt-4">
                            Vous pouvez naviguer dans Threads sans profil, mais
                            vous ne pourrez pas iinteragir avec Threads ni
                            publier du contenu.
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}
