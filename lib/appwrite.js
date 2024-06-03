import { Client, Account, ID, Avatars } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.Crea.CreaSphere",
  projectId: "665e0cb40028665cd5f2",
  databaseId: "665e11cc002951fcad2e",
  userCollextionId: "665e1217003329d09c17",
  videoCollectionId: "665e1343003db4b8da5d",
  storageId: "665e180d00018fcd52c7",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username,
    );
    if (!newAccount) throw Error;
    const avatarsUrl = avatars.getInitials(username);

    await signIn(email, password);
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}
