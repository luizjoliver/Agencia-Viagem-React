import { ID, OAuthProvider, Query } from "appwrite";
import { account, appwriteConfig, database } from "./client";
import { redirect } from "react-router";

export const loginWithGoogle = async () => {
    try {
        account.createOAuth2Session(OAuthProvider.Google)
    } catch (error) {
        console.log("Login com o google usando OAuth2: " + error);

    }
}


export const getUser = async () => {
    try {
        const user = await account.get()

        if (!user) redirect("/sign-in")

        const { } = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [
                Query.equal('accountId', user.$id),
                Query.select(['name', 'email', 'imageUrl', 'joinedAt', 'accountId'])
            ]
        )
    } catch (error) {
        console.log("Pegar usuário: " + error);

    }
}

export const getAllUsers = async (limit: number, offset: number) => {
    try {
        const { documents: users, total } = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [Query.limit(limit), Query.offset(offset)]
        )

        if (total === 0) return { users: [], total };

        return { users, total };
    } catch (e) {
        console.log('Error fetching users')
        return { users: [], total: 0 }
    }
}

export const getGooglePicture = async () => {
    try {
        const session = await account.getSession('current')

        const oAuthToken = session.providerAccessToken

        if (!oAuthToken) {
            console.log("oAuthToken não foi disponibilizado!")

            return null
        }

        const response = await fetch("https://people.googleapis.com/v1/people/me?personFields=photos", {
            headers: {
                Authorization: `Bearer ${oAuthToken}`
            }
        })

        if (!response.ok) {
            console.log("Erro ao fez fetch image google");

            return null

        }

        const data = await response.json()
        const photoUrl = data.photo && data.photos.length > 0
            ? data.photos[0].url
            : null

        return photoUrl

    } catch (error) {
        console.log("Pegar foto do google: " + error);

    }
}

export const logoutUser = async () => {
    try {
        await account.deleteSession("current");
        return true 
    } catch (error) {
        console.log("LogOut usuário: " + error);

    }
}





export const storeUserData = async () => {
    try {

        const user = await account.get()

        if (!user) return null

        const { documents } = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            [Query.equal('accountId', user.$id)]
        )

        if (documents.length > 0) return documents[0]

        const imageUrl = await getGooglePicture()

        const newUser = await database.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            ID.unique(),
            {
                accountId: user.$id,
                email: user.email,
                imageUrl: imageUrl || '',
                joinedAt: new Date().toISOString()

            }
        )
        if (!newUser.$id) redirect("/sign-in");

    } catch (error) {
        console.log("Armazenar dados usuário: " + error);

    }
}