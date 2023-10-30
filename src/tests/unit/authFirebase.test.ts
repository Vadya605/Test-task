import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, UserCredential, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

jest.mock('firebase/auth', () => {
    const original = jest.requireActual('firebase/auth');

    return {
        ...original,
        getAuth: jest.fn(),
    };
});

describe('Тестирование аутентификации', () => {
    let firebaseApp: FirebaseApp;
    let auth: Auth;

    const user = {
        uid: 'uid-example',
        email: 'email@example.com',
    }

    beforeAll(() => {

        const firebaseConfig = {
            apiKey: 'apiKey',
            authDomain: 'authDomain',
            projectId: 'projectId',
        };

        firebaseApp = initializeApp(firebaseConfig);
        auth = getAuth(firebaseApp);
    });

    test('Успешная регистрация', async () => {
        const createUserWithEmailAndPasswordMockResolve = jest.fn().mockResolvedValue({user} as UserCredential);

        (createUserWithEmailAndPassword as jest.Mock) = createUserWithEmailAndPasswordMockResolve;
        const userCredential = await createUserWithEmailAndPassword(auth, 'email@example.com', 'secret');

        expect(userCredential.user.uid).toBe(user.uid)
        expect(userCredential.user.email).toBe(user.email)
    });

    test('Ошибка при регистрации', async () => {
        const error = new Error('User creation failed');
        const createUserWithEmailAndPasswordMockReject = jest.fn().mockRejectedValue(error);

        (createUserWithEmailAndPassword as jest.Mock) = createUserWithEmailAndPasswordMockReject;
        await expect(createUserWithEmailAndPassword(auth, 'test@example.com', 'invalidPassword')).rejects.toThrow(error.message);
    });

    test('Успешная авторизация', async () => {
        const signInWithEmailAndPasswordMockResolve = jest.fn().mockResolvedValue({user} as UserCredential);

        (signInWithEmailAndPassword as jest.Mock) = signInWithEmailAndPasswordMockResolve;
        const userCredential = await signInWithEmailAndPassword(auth, 'email@example.com', 'secret')

        expect(userCredential.user.uid).toBe(user.uid)
        expect(userCredential.user.email).toBe(user.email)
    })

    test('Ошибка при авторизации', async () => {
        const error = new Error('User creation failed');
        const signInWithEmailAndPasswordMockReject = jest.fn().mockRejectedValue(error);

        (signInWithEmailAndPassword as jest.Mock) = signInWithEmailAndPasswordMockReject;
        await expect(createUserWithEmailAndPassword(auth, 'test@example.com', 'invalidPassword')).rejects.toThrow(error.message);
    })
});