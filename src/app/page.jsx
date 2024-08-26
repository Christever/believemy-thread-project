import ConnecterLayout from "@/components/ConnectedLayout/ConnectedLayout";
import Post from "@/components/Post/Post";

export default function Index() {
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
        <>
            <ConnecterLayout>
                <div className="md:w-[800px] w-full mx-auto mt-10">
                    {/* NewPost */}

                    {/* Posts */}
                    {posts.map((post) => (
                        <div key={post._id}>
                            <Post post={post} />
                        </div>
                    ))}
                </div>
            </ConnecterLayout>
        </>
    );
}
