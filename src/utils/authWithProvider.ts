import { IUser } from "@/interfaces/IUser";
import { Auth, FacebookAuthProvider, GoogleAuthProvider, UserCredential, signInWithPopup, AuthProvider } from "firebase/auth";

export const authWithProvider = async (auth: Auth, providerObj: AuthProvider): Promise<IUser> => {
    try {
        let provider = null;

        if(providerObj instanceof GoogleAuthProvider){
            provider = GoogleAuthProvider
        } else if(providerObj instanceof FacebookAuthProvider){
            provider = FacebookAuthProvider
        }

        const result: UserCredential = await signInWithPopup(auth, providerObj);
        const credential = provider?.credentialFromResult(result);

        return {
            id: result.user?.uid ?? '',
            email: result.user?.email ?? '',
            token: credential?.accessToken ?? '',
        };
    } catch (error) {
        throw error;
    }
};
