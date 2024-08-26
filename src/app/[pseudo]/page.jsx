"use client";
import ConnecterLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Profile() {
    // Variable
    const params = useParams();
    const pseudo = params.pseudo.slice(3);

    const posts = [
        {
            _id: "1",
            content: "Premier post",
            pseudo: "johndoe",
            profile: "/picture.png",
        },
        {
            _id: "2",
            content: "deuxieme post",
            pseudo: "johndoe",
            profile: "/picture.png",
        },
        {
            _id: "3",
            content: "troisieme post",
            pseudo: "johndoe",
            profile: "/picture.png",
        },
        {
            _id: "4",
            content: "quatrieme post",
            pseudo: "johndoe",
            profile: "/picture.png",
        },
        {
            _id: "5",
            content: "cinquieme post",
            pseudo: "johndoe",
            profile: "/picture.png",
        },
    ];
    return (
        <ConnecterLayout>
            <div className="mt-10 md:w-[700px] mx-auto text-white">
                {/* Infos */}
                <div className="flex justify-between gap-4">
                    {/* Data */}
                    <div>
                        <h1 className="text-3xl font-semibold">John Doe</h1>
                        <div className="">@{pseudo}</div>
                        {/* Bio */}
                        <div className="mt-5">-</div>
                        <div className="mt-5 text-blue-500 hover:text-blue-400 hover:cursor-pointer duration-150">
                            <a href="https://steverlynck.fr" target="_blank">
                                https://steverlynck.fr
                            </a>
                        </div>
                    </div>

                    {/* Photo */}
                    <div>
                        <Image
                            src={"/picture.png"}
                            alt="user"
                            width={100}
                            height={100}
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-10 flex">
                    {/* Threads */}
                    <div className="flex-1 border-b  border-white pb-4 px-4 text-center hover:text-white hover:border-white duration-150 cursor-pointer">
                        Threads
                    </div>

                    {/* Response */}
                    <div className="tab">Reponses</div>

                    {/* Repost */}
                    <div className="tab">Republication</div>
                </div>
                {/* Post */}
                <div>
                    {posts.map((post) => (
                        <div key={post._id}>
                            <Post post={post} />
                        </div>
                    ))}
                </div>
            </div>
        </ConnecterLayout>
    );
}
