import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

export default (env) => {
    if (env == PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                MONGODB_CLIENT:
                    "mongodb+srv://christian:46eqNdBAYFqHkXhD@cluster0.ipigw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
                MONGODB_DATABASE: "threads",
                NEXTAUTH_SECRET: "jzgqmbvaxfgcxwvyuxszcguzytbrds",
                NEXTAUTH_URL: "https://localhost:3000",
            },
        };
    } else {
        return {
            env: {
                MONGODB_CLIENT:
                    "mongodb+srv://christian:46eqNdBAYFqHkXhD@cluster0.ipigw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
                MONGODB_DATABASE: "threads",
                NEXTAUTH_SECRET: "jzgqmbvaxfgcxwvyuxszcguzytbrds",
                NEXTAUTH_URL: "https://localhost:3000",
            },
        };
    }
};
