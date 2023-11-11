import { calculatePasswordStrength, checkPasswordMatch } from "."

describe('Тестирование методов валидации пароля', () => {
    describe('Тестирование метода checkPasswordMatch', () => {
        test('Пароли совпадают', () => {
            const password = 'secret'
            const passwordConfirm = 'secret'

            const result = checkPasswordMatch(password, passwordConfirm)
            expect(result).toBe(true)
        })

        test('Пароли не совпадают', () => {
            const password = 'secret'
            const passwordConfirm = 'new secret'

            const result = checkPasswordMatch(password, passwordConfirm)

            expect(result).toBe(false)
        })
    })

    describe('Тестирование метода calculatePasswordStrength', () => {
        test('Сила пароля 25', () => {
            const password = 's'
            const result = calculatePasswordStrength(password)
            expect(result).toBe(25)
        })

        test('Сила пароля 50', () => {
            const password = 'secret'
            const result = calculatePasswordStrength(password)
            expect(result).toBe(50)
        })

        test('Сила пароля 75', () => {
            const password = 'secretT'
            const result = calculatePasswordStrength(password)
            expect(result).toBe(75)
        })

        test('Сила пароля 100', () => {
            const password = 'secretT1'
            const result = calculatePasswordStrength(password)
            expect(result).toBe(100)
        })
    })
})