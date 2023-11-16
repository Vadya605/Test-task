import { ErrorsType } from "@/types";

export const ERRORS: ErrorsType = {
    'error-map': 'С картой пошло что-то не так, попроуйте еще раз',
    'error-favorites': 'Не удалось загрузить раздел избранного',

    'auth/invalid-login-credentials': 'Неверный email или пароль',
    'auth/email-already-in-use': 'Email уже используется',
    'auth/account-exists-with-different-credential': 'Аккаунт с такой почтой уже существует',
    'auth/weak-password': 'Пароль должен состоять не менее чем из 6 символов',
    'password-mismatch': 'Пароли не совпадают',

    'error-getting-favorites': 'Не удалось получить избранные места',
    'error-removing-favorites': 'Не удалось удалить из избранного',
    'error-adding-favorites': 'Не удалось добавить в избранное',

    'error-geo': 'Не удалось определить ваше текущее местоположение, проверьте настройки браузера',

    'error-sending-mail': 'Не удалось отпрвить письмо вам на почту'
}