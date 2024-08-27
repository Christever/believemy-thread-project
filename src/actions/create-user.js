"use server";

import { checkEmail } from "@/utils/check-email-syntax";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

export const createUser = async (username, pseudo, email, password) => {
    // If a field is empty
    if (!username || !pseudo || !email || !password) {
        throw new Error("Aucun champs ne doit être vide!");
    }

    // Check email
    if (!checkEmail(email)) {
        throw new Error("Champ email invalide !");
    }

    // Connect to the MongoDB cluster
    const client = await MongoClient.connect(process.env.MONGODB_CLIENT);

    // Connect to the MongoDB database
    const db = client.db(process.env.MONGODB_DATABASE);

    try {
        // FIRST: Verify if this email is already used
        // Select the "users" collection
        let user = await db
            .collection("users")
            .find({ email })
            .limit(1)
            .toArray();

        // If the email is already used
        if (user.length !== 0) {
            await client.close();
            throw new Error("Cet email est déjà utilisé");
        }

        // SECOND: verify if this pseudo is already used
        user = await db.collection("users").find({ pseudo }).limit(1).toArray();

        // if the pseudo is already used
        if (user.length !== 0) {
            await client.close();
            throw new Error("Ce pseudo est déjà utilisé");
        }

        // THIRD: Encrypt the password
        const passwordENcrypted = await bcrypt.hash(password, 10);

        // FOURTH: Create the user
        await db.collection("users").insertOne({
            username,
            pseudo,
            email,
            password: passwordENcrypted,
            profil: "/picture.png",
            bio: "-",
            url: "",
            creation: new Date(),
        });
    } catch (error) {
        await client.close;
        throw new Error(error);
    }

    await client.close();
};
