export type ErrorsType = {
    'auth/invalid-login-credentials': string;
    'auth/email-already-in-use': string;
    'auth/weak-password': string;
    'password-mismatch': string;
};

export const ERRORS: ErrorsType = {
    'auth/invalid-login-credentials': 'Неверный email или пароль',
    'auth/email-already-in-use': 'Email уже используется',
    'auth/weak-password': 'Пароль должен состоять не менее чем из 6 символов',
    'password-mismatch': 'Пароли не совпадают'
}