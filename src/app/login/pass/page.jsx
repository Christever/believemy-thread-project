"use client";
import Button from "@/components/Buttons/Button";

import { setCookie } from "cookies-next";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Pass() {
    // Variable
    const router = useRouter();

    // Function
    const onContinue = () => {
        // Generate a new cookie
        setCookie("guest", "true");

        // Redirection
        router.push("/");
    };

    const onReturn = () => {
        // Redirection
        router.push("/login");
    };
    return (
        <div className="w-[300px] mx-auto">
            {/* Title */}
            <h1 className="title flex gap-1">
                <Link href={"/login"}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="m6.523 12.5l3.735 3.735q.146.146.153.344q.006.198-.153.363q-.166.166-.357.168t-.357-.162l-4.382-4.383q-.243-.242-.243-.565t.243-.566l4.382-4.382q.147-.146.347-.153q.201-.007.367.159q.16.165.162.353q.003.189-.162.354L6.523 11.5h12.38q.214 0 .358.143t.143.357t-.143.357t-.357.143z"
                        />
                    </svg>
                </Link>
                Utiliser Thread sans profil ?
            </h1>

            {/* Text */}
            <div className="text-white text-sm flex gap-2 items-center mt-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M15.2 10.95L10.55 6.3q.35-.15.713-.225T12 6q1.475 0 2.488 1.013T15.5 9.5q0 .375-.075.738t-.225.712M5.85 17.1q1.275-.975 2.85-1.537T12 15q.45 0 .863.038t.862.112l-2.2-2.2q-1.175-.15-2.012-.987T8.525 9.95L5.675 7.1q-.8 1.025-1.237 2.263T4 12q0 1.475.488 2.775T5.85 17.1m12.45-.2q.8-1.025 1.25-2.262T20 12q0-3.325-2.337-5.663T12 4q-1.4 0-2.637.45T7.1 5.7zM12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q2.075 0 3.888.788t3.174 2.15t2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22m0-2q1.325 0 2.5-.387t2.15-1.113q-.975-.725-2.15-1.112T12 17t-2.5.388T7.35 18.5q.975.725 2.15 1.113T12 20m0-1.5"
                    />
                </svg>
                <h2>Utiliser Threads sans profil </h2>
            </div>
            <div className="text-threads-gray-light gap-5">
                Vous pouvez naviguer dans Threads sans profil, mais vous ne
                pourrez pas iinteragir avec Threads ni publier du contenu.
            </div>

            <div className="text-white text-sm flex gap-2 items-center mt-5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="m21.558 3.592l-1.15-1.15a1.49 1.49 0 0 0-2.12 0L13 7.731V11h3.27l5.288-5.288a1.49 1.49 0 0 0 0-2.12M15.579 9.45h-1.03V8.42L18 4.973l1.03 1.03Z"
                    />
                    <path
                        fill="currentColor"
                        d="M19 19H5V5h6V3H5a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-6h-2Z"
                    />
                </svg>
                <h2>Vous pouvez modidier votre choix à tout instant</h2>
            </div>
            <div className="text-threads-gray-light gap-5">
                Si vous voulez utiliser Threads avec un profil, vous pouvez vous
                connecter avec un compte Instagram.
            </div>
            <div className="mt-5">
                <div className="">
                    <Button onClick={() => onContinue()}>
                        Utiliser sans profil
                    </Button>
                </div>
            </div>
        </div>
    );
}
