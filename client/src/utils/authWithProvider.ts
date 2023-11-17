import { IUserPersonalData } from '@/interfaces'

import {
    Auth,
    AuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential,
} from 'firebase/auth'

export const authWithProvider = async (auth: Auth, providerObj: AuthProvider): Promise<IUserPersonalData> => {
    let provider = null

    if (providerObj instanceof GoogleAuthProvider) {
        provider = GoogleAuthProvider
    } else if (providerObj instanceof GithubAuthProvider) {
        provider = GithubAuthProvider
    }

    const result: UserCredential = await signInWithPopup(auth, providerObj)
    const credential = provider?.credentialFromResult(result)

    return {
        id: result.user?.uid ?? '',
        email: result.user?.email ?? '',
        token: credential?.accessToken ?? '',
    }
}
